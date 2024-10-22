import express from "express"
import controller from "../controllers/transaccion.controller.js"

const router = express.Router()

router.get("/transacciones", controller.getTransacciones)
router.get("/transacciones/cant", controller.getCantTransacciones)
router.delete("/transacciones/:id", controller.deleteTransaccion)
router.post("/transacciones", controller.postTransacciones)

export default router