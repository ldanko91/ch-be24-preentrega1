import express from "express";
import router from "./router/index.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

router(app)

app.listen(PORT,()=>console.log(`Servidor conectado al puerto: ${PORT}`))

export default app;