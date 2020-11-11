import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import sanitizeHtml from 'sanitize-html'
import md5 from 'blueimp-md5'
// import axios from 'axios'

import { cookieToken } from './../credentials/credentials'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false)

  const setCookie = () => {
    document.cookie = cookieToken
  }

  useEffect(() => {
    setCookie()
  }, [])

  const handleInput = (event: React.FormEvent<HTMLInputElement>, inputType: 'email' | 'password') => {
    const newValue = sanitizeHtml(event.currentTarget.value)

    if (inputType === 'email') {
      setEmail(newValue)
    } else {
      setPassword(newValue)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // TODO: Move this on the server
    // TODO: Add sanitization for inputs
    console.log(email, md5(password))
    if (email.length > 1 && password.length > 1) {
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        // Login POST request
        // URL: https://adminapi.persoo.cz/login
        // {
        //   "email":"",
        //   "passwordHash":""
        // }
        setIsErrorMessageVisible(false)

        Router.push('/dashboard')
        // axios
        //   .post('https://adminapi.persoo.cz/login', {
        //     email: email,
        //     passwordHash: password
        //   }, {
        //     headers: {Authorization: `Bearer ${cookieToken}`},
        //     withCredentials: true
        //   })
        //   .then(res => console.log(res))
        //   .catch(err => console.log('error: ', err))
      } else {
        console.log('Email is not valid')
      }
    } else {
      setIsErrorMessageVisible(true)
    }
  }

  return (
    <div className="d-flex align-items-center">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="loginEmail">Email:</label>

                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      value={email}
                      onChange={(event) => handleInput(event, 'email')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="loginPassword">Password:</label>

                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      value={password}
                      onChange={(event) => handleInput(event, 'password')}
                    />
                  </div>

                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  </div>

                  {isErrorMessageVisible && <div className="text-danger mb-3">
                    <small>Sorry dude. Try guessing again.</small>
                  </div>}

                  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>

            <div className="text-center mt-3">
              <Link href="/"><a className="text-underline">&larr; Back home</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
