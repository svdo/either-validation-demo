import { getStructEq, eqString, eqBoolean } from "fp-ts/lib/Eq";

export interface RegistrationData {
  email: string
  phone: string
  password: string
  consented: boolean
}

export const registrationDataEq = getStructEq({
  email: eqString,
  phone: eqString,
  password: eqString,
  consented: eqBoolean
})

/* This is where I'd normally use redux toolkit createSlice, but for this demo
 * that's not needed.
 */
