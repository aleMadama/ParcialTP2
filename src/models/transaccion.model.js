const transacciones = [
    {
        id: "1",
        tipo: "retiro",
        monto: 1000,
        destinatario: "Juan perez"
    },
    {
        id: "2",
        tipo: "ingreso",
        monto: 5000,
        destinatario: "Alejo Madama"
    }
]

const getTransacciones = async () => {
    return transacciones
}

const getCantTransacciones = async () => {
    const cantTransacciones = transacciones.length
    return "Cantidad de transacciones en cuenta: "+ cantTransacciones
}

const deleteTransaccion = async (id) => {
    const indexTransaccion = transacciones.findIndex((e) => e.id == id)
    if(indexTransaccion == -1) throw new Error("La transaccion no existe.")
    transacciones.splice(indexTransaccion, 1)
    return "La transaccion fue borrada exitosamente."
}

const postTransacciones = async (data) => {
    console.log('DATA: ', data)
    data.id = transacciones.length + 1;
    await transacciones.push(data)
    return data
}

export default {
    getTransacciones,
    getCantTransacciones,
    deleteTransaccion,
    postTransacciones
}