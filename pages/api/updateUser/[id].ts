import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async (req: any, res: any) => {
    const {
        query: { id },

    } = req
    const data = JSON.parse(req.body)
    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: data,
    })
    res.json(user)

}