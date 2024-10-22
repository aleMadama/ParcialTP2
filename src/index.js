import express from "express"
import transaccionesRouter from "./routes/transaccion.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", transaccionesRouter)

app.listen(PORT, () => console.log("Server listening on: "+ PORT))
app.on("Error", (err) => console.log("Ha ocurrido un error en el servidor: ", err))