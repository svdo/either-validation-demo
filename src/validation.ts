import * as O from 'fp-ts/lib/Option'
import emailAddress from 'email-addresses'

export const oneCapital = O.fromPredicate((s: string) => /[A-Z]/g.test(s))
export const oneNumber = O.fromPredicate((s: string) => /[0-9]/g.test(s))

export const eightDigits = O.fromPredicate((s: string) => /[0-9]{8}/.test(s))

const minLengthPred = (minLength: number) => (s: string) =>
  s.length >= minLength

const maxLengthPred = (maxLength: number) => (s: string) =>
  s.length <= maxLength

export const minLength = (n: number) => O.fromPredicate(minLengthPred(n))
export const maxLength = (n: number) => O.fromPredicate(maxLengthPred(n))

type Email = ReturnType<typeof emailAddress.parseOneAddress>

export const parseEmail = (email: string): O.Option<Email> =>
  O.fromNullable(emailAddress.parseOneAddress(email))
