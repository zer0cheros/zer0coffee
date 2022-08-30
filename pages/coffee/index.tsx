import React, { FC } from 'react'
import PostForm from '../../component/PostForm'
import styles from '../../styles/Coffee.module.css'
import type { GetServerSideProps } from 'next'
import Logo from '../../component/Logo'
import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'
import Coffee from '../../component/intefaces'


interface Data {
  results: Coffee[]
}

export const getServerSideProps:GetServerSideProps = async ({req, res})=>{
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { results: [] } };
  }
  const results = await prisma.coffee.findMany()
  return {
    props: {results}
  }
}
const index = ({results}:Data) => {
  return (
    <div className={styles.flex}>
      <div className={styles.left}>
      <PostForm/>
      </div>
      <div className={styles.right}>
      <div className={styles.grid}>
      {results.map(post => (
        <div className={styles.card} key={post.id}>
          <div className={styles.logo}><Logo/></div>
          <h1>{post.title}</h1>
          <h3>{post.content}</h3>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default index