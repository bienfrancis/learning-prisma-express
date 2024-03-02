import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const ShowTasks = async (req, res) => {
    try {
        const allTasks = await prisma.task.findMany({
            orderBy: {
                createdAt: 'desc',
              },
        })
        res.status(200).json(allTasks)
    } catch (error) {
        res.status(500).json({error: 'error boss'})
    }
}

export const StoreTasks = async (req, res) => {
    const { title } = req.body
    try {
        const inserTask = await prisma.task.create({
            data: {
                title : title
            }
        })
        res.status(200).json(inserTask)
    } catch (error) {
        res.status(500).json({error: 'error boss'})
    }
}

export const DeleteTask = async (req, res) => {
    const { id } = req.params
    try {
        const deleteTask = await prisma.task.delete({
            where:{
                id: Number(id)
            }
        })
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(500).json({error: 'error boss'})
    }
}