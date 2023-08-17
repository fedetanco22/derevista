import React from 'react'

import styles from './Button.module.scss'

interface Props {
  className?: string
  text: string
}

const Button = ({ className, text = 'Read More &gt;' }: Props): JSX.Element => {
  return (
    <div className={`${styles.button} styles.${className}`}>
      <div className="read-more">{text}</div>
    </div>
  )
}

export default Button
