import { Either, left, right, map, getValidation } from 'fp-ts/lib/Either'
import { lift, lift2 } from './lift'
import { sequenceT, sequenceS } from 'fp-ts/lib/Apply'
import { pipe } from 'fp-ts/lib/pipeable'
import { NonEmptyArray, getSemigroup } from 'fp-ts/lib/NonEmptyArray'
import emailAddress from 'email-addresses'
import { RegistrationData } from './registerSlice'
import { constant } from 'fp-ts/lib/function'

export const emailValid = (email: string): Either<string, string> =>
  // tslint:disable-next-line: strict-type-predicates
  emailAddress.parseOneAddress(email) !== null
    ? right(email)
    : left(tInvalidEmail)

export const phoneValid = (phone: string): Either<string, string> =>
  /[0-9]{8}/.test(phone) ? right(phone) : left(tInvalidPhone)

export const consentValid = (c: boolean): Either<string, boolean> =>
  c ? right(true) : left(tConsentRequired)

export const equalPasswords = (
  p1: string,
  p2: string
): Either<string, string> => (p1 === p2 ? right(p1) : left(tPasswordsDiffer))

export const minLength = (s: string): Either<string, string> =>
  s.length >= 8 ? right(s) : left(tPasswordLength)

export const oneCapital = (s: string): Either<string, string> =>
  /[A-Z]/g.test(s) ? right(s) : left(tPasswordOneCapital)

  export const oneNumber = (s: string): Either<string, string> =>
  /[0-9]/g.test(s) ? right(s) : left(tPasswordOneNumber)

const applicativeValidation = () => getValidation(getSemigroup<string>())

export function passwordValid (
  p1: string,
  p2: string
): Either<NonEmptyArray<string>, string> {
  return pipe(
    sequenceT(applicativeValidation())(
      lift(minLength)(p1),
      lift(oneCapital)(p1),
      lift(oneNumber)(p1),
      lift2(equalPasswords)(p1, p2)
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
    email: lift(emailValid)(email),
    phone: lift(phoneValid)(phone),
    password: passwordValid(p1, p2),
    consented: lift(consentValid)(consent)
  })
}

export const tInvalidEmail = 'Email address is invalid'
export const tInvalidPhone = 'Phone number should have 8 digits'
export const tPasswordsDiffer = 'Passwords are different'
export const tPasswordLength = 'Password should have at least 8 characters'
export const tPasswordOneCapital = 'Password should have at least one capital'
export const tPasswordOneNumber = 'Password should have at least one number'
export const tConsentRequired = 'You must accept the terms and conditions'
