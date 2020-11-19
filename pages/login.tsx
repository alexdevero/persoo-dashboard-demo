import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import sanitizeHtml from 'sanitize-html'
import md5 from 'blueimp-md5'
import axios from 'axios'

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

    axios
      .get('/api/offers')
      .then(res => console.log(res))

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

        axios
          .post('/api/login', {
            email: email,
            passwordHash: password
          })
          .then(res => {
            console.log(res.data.message)

            Router.push('/dashboard')
          })
          .catch(err => console.log('error: ', err))

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
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-sm">
              <div className="card-body py-4">
                <img
                  className="d-block mb-4 mx-auto"
                  width="100"
                  height="100"
                  src={require('./../public/persoo-logo-color.svg')}
                  alt="Persoo logo"
                />

                <h1 className="h4 text-center mb-4">Login to Persoo Admin</h1>

                <form>
                  <div className="form-group">
                    <label htmlFor="loginEmail" className="font-14 text-muted">Email:</label>

                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      value={email}
                      onChange={(event) => handleInput(event, 'email')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="loginPassword" className="font-14 text-muted">Password:</label>

                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      value={password}
                      autoComplete="on"
                      onChange={(event) => handleInput(event, 'password')}
                    />
                  </div>

                  <div className="form-group form-check">
                    <input style={{ marginTop: 6 }} type="checkbox" className="form-check-input" id="exampleCheck1" />

                    <label className="form-check-label font-14 text-muted" htmlFor="exampleCheck1">Remember me</label>
                  </div>

                  {isErrorMessageVisible && (
                    <div className="text-danger mb-3">
                      <small>Sorry dude. Try guessing again.</small>
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary w-100 font-14 font-weight-bold p-2" onClick={handleSubmit}>Login</button>
                </form>
              </div>
            </div>

            <div className="text-center mt-3">
              <Link href="/">
                <a className="text-underline" style={{ fontSize: 14, color: '#999' }}>&larr; Back home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
