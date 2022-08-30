import type { NextApiRequest, NextApiResponse } from 'next'
import {getSession} from 'next-auth/react'
import prisma from '../../../lib/prisma'

type Coffee = {
  id: number,
  title: string,
  content: string,
  published: boolean,
  userId: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Coffee>){
  const session= await getSession({req})
  if(session){
    const {title, content} = req.body
    const coffee = await prisma.coffee.findMany()
    if(req.method === 'GET'){
        res.status(200).json(coffee)
    }
    if(req.method === 'POST'){
      const result = await prisma.coffee.create({
        data:{
          title: title,
          content: content,
          userId: session.userId
        }  
        })
        res.status(200).json(result)
      }
    }else{
      res.status(401).send({ message: 'Unauthorized' })
    }
}
