
import Reservation from "./reservation.model.js"
import Field from "../fields/field.model.js"

export const reserveField = async(req, res)=>{
    const { fieldId, uid, startTime, endTime } = req.body
    let payment = req?.file?.filename ?? null
    try{
        const reservation = new Reservation(
            {
                fieldId,
                uid,
                startTime,
                endTime,
                payment
            }
        )
        await reservation.save()
        res.json(
            {
                msg: 'Reserva creada existosamente',
                reservation
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({msg: 'Error al procesar la reservación, intente nuevamente más tarde', err})
    }
}