import express from "express"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", animalRoutes)

app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})