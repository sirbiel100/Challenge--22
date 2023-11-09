"use client"

import Image from 'next/image';
import styles from './page.module.scss';
import { EmailValidity } from './types/EmailValidation';
import { ChangeEvent, useState } from 'react';
import Illustration from '../public/illustration-dashboard.png';
import facebook from '../public/facebook-2-logo-svgrepo-com.svg';
import twitter from '../public/twitter-color-svgrepo-com.svg';
import instagram from '../public/instagram-svgrepo-com.svg';

export default function Home() {
  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
  }

  const handleLogin = () => {

    if (!emailValue) {
      setErrorMessage("Whoops! It looks like you forgot to add your email");
      setError(true);
    }

    if (emailValue) {
      const ValidEmail = EmailValidity(emailValue)

      if (ValidEmail) {
        setErrorMessage('')
        setError(false)

      } else {
        setErrorMessage('Please Provide a valid email address')
        setError(true)
      }
    }




  }

  return (
    <section className={styles.section}>

      <header>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="86" height="26">
            <g fill="none">
              <path fill="#15202A" d="M5.008 25c.555 0 .832-.245.832-.736v-8c0-.235.117-.352.352-.352h4.8c2.603 0 4.699-.635 6.288-1.904 1.59-1.27 2.384-3.056 2.384-5.36 0-1.621-.41-2.987-1.232-4.096-.821-1.11-1.93-1.936-3.328-2.48-1.397-.544-2.981-.816-4.752-.816h-9.6c-.341 0-.512.203-.512.608V24.36c0 .213.048.373.144.48.096.107.272.16.528.16h4.096zm5.216-13.088H6.288c-.17 0-.288-.048-.352-.144-.064-.096-.096-.25-.096-.464V5.832c0-.213.048-.363.144-.448.096-.085.25-.128.464-.128H10c1.195 0 2.144.277 2.848.832.704.555 1.056 1.376 1.056 2.464 0 1.045-.33 1.867-.992 2.464-.661.597-1.557.896-2.688.896zM27.856 25c.32 0 .544-.059.672-.176.128-.117.192-.315.192-.592v-22.4c0-.384-.17-.576-.512-.576h-4.576c-.341 0-.512.203-.512.608v22.464c0 .235.053.405.16.512.107.107.288.16.544.16h4.032zm9.312 0c.235 0 .4-.037.496-.112.096-.075.144-.197.144-.368V10.344c0-.107.037-.17.112-.192.075-.021.155.021.24.128l10.208 14.336c.128.17.245.277.352.32.107.043.256.064.448.064H52.4a.66.66 0 00.432-.144.455.455 0 00.176-.368V1.736c0-.32-.139-.48-.416-.48H49.04c-.384 0-.576.192-.576.576v13.216c0 .235-.053.352-.16.352-.085 0-.192-.085-.32-.256L38.576 1.736c-.15-.213-.277-.347-.384-.4-.107-.053-.288-.08-.544-.08h-3.872c-.384 0-.576.203-.576.608v22.592c0 .363.213.544.64.544h3.328zm30.176.32c1.664 0 3.013-.288 4.048-.864a9.158 9.158 0 002.672-2.24c.15-.17.256-.181.32-.032l.928 2.304c.192.341.47.512.832.512h1.024c.15 0 .267-.043.352-.128a.476.476 0 00.128-.352V13.736a.703.703 0 00-.24-.56c-.16-.139-.39-.208-.688-.208l-8.544-.032c-.341 0-.512.15-.512.448v2.4c0 .192.043.33.128.416.085.085.213.128.384.128h3.872c.235 0 .352.096.352.288 0 .085-.01.15-.032.192l-.064.928c-.235 1.045-.736 1.915-1.504 2.608-.768.693-1.792 1.04-3.072 1.04-1.685 0-2.976-.65-3.872-1.952-.896-1.301-1.344-3.435-1.344-6.4 0-2.837.427-4.907 1.28-6.208.853-1.301 2.101-1.952 3.744-1.952 1.259 0 2.283.363 3.072 1.088.79.725 1.29 1.643 1.504 2.752.043.192.096.325.16.4.064.075.181.112.352.112l4.224-.64c.277-.021.416-.15.416-.384 0-.192-.021-.352-.064-.48-.213-1.173-.752-2.277-1.616-3.312-.864-1.035-1.984-1.872-3.36-2.512-1.376-.64-2.896-.96-4.56-.96-2.176 0-4.096.501-5.76 1.504-1.664 1.003-2.955 2.432-3.872 4.288-.917 1.856-1.376 4.021-1.376 6.496 0 2.41.437 4.528 1.312 6.352.875 1.824 2.117 3.237 3.728 4.24 1.61 1.003 3.493 1.504 5.648 1.504z" />
              <path fill="#4C7BF3" d="M85.072 25c.32 0 .55-.059.688-.176.139-.117.208-.315.208-.592v-4c0-.363-.16-.544-.48-.544h-4.384a.498.498 0 00-.368.144c-.096.096-.144.24-.144.432v4.064c0 .448.235.672.704.672h3.776z" />
            </g>
          </svg>
          <h1>We are launching <em>soon!</em></h1>
          <p>Subscribe and get notified</p>
        </div>
        <form onSubmit={e => e.preventDefault}>
          <input type="text" value={emailValue} onChange={handleEmail} style={{ borderColor: error ? '#ff5263' : '#c2d3ff55' }} placeholder='Your email address...' />
          <span>{errorMessage}</span>
          <input type="button" onClick={handleLogin} value="Notify Me" />
        </form>
      </header>

      <main>
        <Image
          src={Illustration}
          alt=''

        />
      </main>

      <div className={styles.bottom}>

        <div>

          <section>
            <Image
              src={facebook}
              alt=''
            />
          </section>

          <section>
            <Image
              src={twitter}
              alt=''
            />
          </section>

          <section>
            <Image
              src={instagram}
              alt=''
            />
          </section>

        </div>

        <div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </div>

      </div>

    </section>
  )
}
