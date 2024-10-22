import service from "../services/transaccion.service.js"

const getTransacciones = async (req, res) => {
    const transacciones = await service.getTransacciones()
    res.send(transacciones)
}

const getCantTransacciones = async (req, res) => {
    const cantTransacciones = await service.getCantTransacciones();
    res.send(cantTransacciones)
}

const deleteTransaccion = async (req, res) => {
    const {id} = req.params
    const transacciones = await service.deleteTransaccion(id)
    res.send(transacciones)
}

const postTransacciones = async (req, res) => {
    const {tipo, monto, destinatario} = req.body
    const transacciones = await service.postTransacciones({tipo, monto, destinatario})
    res.json(transacciones)
}

export default {
    getTransacciones,
    getCantTransacciones,
    deleteTransaccion,
    postTransacciones
}