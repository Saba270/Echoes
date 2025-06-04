import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { User } from "./mongooseSchemas.js"


const MONGODB_URL = "mongodb://127.0.0.1:27017/Memory-Website"

const app = express()
const port = 3000

app.use(express.json())
app.use(     //cors
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        await User.create(req.body)
        res.sendStatus(200);
    } catch (error) {
        res.send(error);
    }
})

try {
    await mongoose.connect(MONGODB_URL)
    console.log("Connected to the database: Memory-Website")
} catch (error) {
    console.log(error)
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})