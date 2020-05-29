import React from 'react'
import { RegistrationForm } from './RegistrationForm'

function App () {
  return (
    <div className='App'>
      <h1>Demo of form validation using Either</h1>
      <p>
        This demo belongs to my blog post{' '}
        <a href='https://040code.github.io/2020/05/25/getting-help-from-your-compiler'>
          Getting Help From Your Compiler
        </a>
        .
      </p>
      <RegistrationForm />
    </div>
  )
}

export default App
