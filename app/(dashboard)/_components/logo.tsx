import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <Image
        width={130}
        height={130}
        alt="logo"
        src="/logo.svg"
    />
  )
}

export default Logo;
