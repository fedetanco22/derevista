import React from 'react'
import Image from 'next/image'

import LogoSVG from '@/public/icons/logo.svg'

const Logo = (): JSX.Element => {
  return (
    <div>
      <Image
        src={LogoSVG}
        placeholder="blur"
        blurDataURL={'/icons/logo.svg'}
        alt="NFPaisanos"
        width={89}
        height={46}
      />
    </div>
  )
}

export default Logo
