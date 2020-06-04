import {
  Either,
  left,
  right,
  map,
  getValidation,
  fromOption
} from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import { lift, lift2 } from './lift'
import { sequenceT, sequenceS } from 'fp-ts/lib/Apply'
import { pipe } from 'fp-ts/lib/pipeable'
import { NonEmptyArray, getSemigroup } from 'fp-ts/lib/NonEmptyArray'
import { RegistrationData } from './registerSlice'
import { constant, flow } from 'fp-ts/lib/function'
import {
  parseEmail,
  minLength,
  atLeastOneCapital,
  atLeastOneNumber,
  digits
} from './validation'

export const tInvalidEmail = 'Email address is invalid'
export const tInvalidPhone = 'Phone number should have 8 digits'
export const tPasswordsDiffer = 'Passwords are different'
export const tPasswordLength = 'Password should have at least 8 characters'
export const tPasswordOneCapital = 'Password should have at least one capital'
export const tPasswordOneNumber = 'Password should have at least one number'
export const tConsentRequired = 'You must accept the terms and conditions'

export const emailValidator = (email: string) =>
  flow(
    parseEmail,
    O.map(constant(email)),
    fromOption(constant(tInvalidEmail))
  )(email)

export const phoneValidator = flow(
  digits(8),
  fromOption(constant(tInvalidPhone))
)

export const consentValid = (c: boolean): Either<string, boolean> =>
  c ? right(true) : left(tConsentRequired)

export const equalPasswordsValidator = (
  p1: string,
  p2: string
): Either<string, string> => (p1 === p2 ? right(p1) : left(tPasswordsDiffer))

export const minPasswordLengthValidator = flow(
  minLength(8),
  fromOption(constant(tPasswordLength))
)

export const oneCapitalValidator = flow(
  atLeastOneCapital,
  fromOption(constant(tPasswordOneCapital))
)

export const oneNumberValidator = flow(
  atLeastOneNumber,
  fromOption(constant(tPasswordOneNumber))
)

const applicativeValidation = () => getValidation(getSemigroup<string>())

export function passwordValid (
  p1: string,
  p2: string
): Either<NonEmptyArray<string>, string> {
  return pipe(
    sequenceT(applicativeValidation())(
      lift(minPasswordLengthValidator)(p1),
      lift(oneCapitalValidator)(p1),
      lift(oneNumberValidator)(p1),
      lift2(equalPasswordsValidator)(p1, p2)
    ),
    map(constant(p1))
  )
}

export function validateRegistrationData (
  email: string,
  phone: string,
  p1: string,
  p2: string,
  consent: boolean
): Either<NonEmptyArray<string>, RegistrationData> {
  return sequenceS(applicativeValidation())({
    email: lift(emailValidator)(email),
    phone: lift(phoneValidator)(phone),
    password: passwordValid(p1, p2),
    consented: lift(consentValid)(consent)
  })
}
