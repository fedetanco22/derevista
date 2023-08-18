import Link from 'next/link'
import React from 'react'

import Logo from '../Logo/Logo'

import styles from './Navbar.module.scss'

const Navbar = (): JSX.Element => {
  return (
    <div className={`${styles.navbar} flex flex-center flex-start`}>
      <div className={`${styles.navbar__width} container`}>
        <Link href={'/'} className={styles.logo} data-testid="logo-link">
          <Logo />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
