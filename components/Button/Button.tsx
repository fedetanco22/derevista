import React, { FC } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  children?: JSX.Element | string
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div className={`${styles.button} styles.${className}`} onClick={onClick}>
      <div className="read-more">{children}</div>
    </div>
  )
}

export default Button
