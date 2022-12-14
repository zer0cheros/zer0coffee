import React, {ReactNode} from 'react'
import Header from './Header'
import Head from 'next/head';
import style from '../styles/Layout.module.css'


type Props = {
    children: ReactNode;
};

const Layout:React.FC<Props> = (props) => {
  return (
    <div className={style.container}>
     <Head>
        <title>Zer0Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div>
        {props.children}
    </div>
    </div>
  )
}

export default Layout