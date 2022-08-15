import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.png'


const Logo = () => {
  return (
    <Image width={100} height={60} src={logo}></Image>
  )
}

export default Logo