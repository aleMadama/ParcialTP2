import model from "../models/transaccion.model.js"

const getTransacciones = async () => {
    const transacciones = await model.getTransacciones()
    return transacciones
}

const getCantTransacciones = async () => {
    const cantTransacciones = await model.getCantTransacciones();
    return cantTransacciones
}

const deleteTransaccion = async (id) => {
    const transacciones = await model.deleteTransaccion(id)
    return transacciones
}

const postTransacciones = async (data) => {
    const transacciones = await model.postTransacciones(data)
    return transacciones
}

export default {
    getTransacciones,
    getCantTransacciones,
    deleteTransaccion,
    postTransacciones
}