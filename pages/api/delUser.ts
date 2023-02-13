import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export default async(req:any, res:any) => {
    const id = JSON.parse(req.body)
  
    const result = await prisma.user.delete({
        where: {
            id: id,
        }
    });
    res.json(result);
}