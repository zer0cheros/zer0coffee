import React from 'react'
import style from '../styles/Layout.module.css'
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Logo from './Logo';


const Header:React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
    const {data: session, status} = useSession();
    if (status === 'loading'){
        return <p>Validating session ...</p>
    }  
  return (
    <div className={style.header}>
        <div className={style.top}>
            <Logo/>
            <div className={style.nav_btn}>
            {!session? <button className={style.signin} onClick={()=>{}}><Link href="/api/auth/signin"><a className="bold" data-active={isActive("/signup")}>Sign In</a></Link></button> :
             <div className={style.signendin}><button className={style.logout} onClick={()=>{signOut()}}>Log Out</button> <div className={style.user}><h3>{session.user?.name}</h3><img src={session.user?.image} alt="" /></div></div>}
            </div>
        </div> 
        <div className={style.down}></div>
    </div>
  )
}

export default Header