import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

import { StoreTasks, ShowTasks, DeleteTask, UpdateTask } from './controllers/tasksControllers.js'
app.use(express.json())
app.use(cors())

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

app.get('/', ShowTasks)
app.post('/create', StoreTasks)
app.delete('/delete/:id', DeleteTask)
app.put('/:id', UpdateTask)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})