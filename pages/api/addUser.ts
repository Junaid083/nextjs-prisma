import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export default async(req:any, res:any) => {
    const data = JSON.parse(req.body)
    const createdMovie = await prisma.user.create({
        data
    })

    res.json(createdMovie)
}