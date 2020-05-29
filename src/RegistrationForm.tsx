import React, { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [consented, setConsented] = useState(false)

  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Form.Field>
          <label>Email:</label>
          <Input
            label='@'
            name='email'
            autoComplete='username'
            placeholder='Email address'
            value={email}
            onChange={(_, { value }) => setEmail(value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone:</label>
          <Input
            label='+31 (0)6'
            name='mobile'
            autoComplete='tel'
            placeholder='Mobile phone number (extension only)'
            value={phone}
            onChange={(_, { value }) => setPhone(value)}
          />
        </Form.Field>
        <Form.Input
          label='Password'
          type='password'
          autoComplete='new-password'
          placeholder='new password'
          value={password1}
          onChange={(_, { value }) => setPassword1(value)}
        />
        <Form.Input
          label='Password again'
          type='password'
          autoComplete='new-password'
          placeholder='same as above'
          value={password2}
          onChange={(_, { value }) => setPassword2(value)}
        />
        <Form.Checkbox
          label='I accept the terms and conditions'
          checked={consented}
          onChange={(_, { checked }) => setConsented(checked || false)}
        />
        <Button primary content='Register' />
      </Form>
    </div>
  )
}
