import { check } from "express-validator"
import { validationResult } from "express-validator"

export const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array()); // Para ver los errores
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


export const registerValidator = [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('surname', "El apellido es obligatorio").not().isEmpty(),
    check('email').not().isEmpty().withMessage("El correo electrónico es obligatorio")
    .isEmail().withMessage("El correo proporcionado no es valido"),
    check('password').not().isEmpty().withMessage("La password es obligatoria")
    .isLength({min: 6}).withMessage("La password debe ser mayor a 6 caracteres"),
    validateInput
]

export const addFieldValidator = [
    check('fieldName', 'El nombre es obligatorio').not().isEmpty(),
    validateInput
]

export const addReservation = [
    check("startTime", "La hora de inicio es obligatoria").not().isEmpty(),
    check("endTime", "La hora de finalización es obligatoria").not().isEmpty(),
    check("fieldId", "Es necesario que seleccione una cancha").not().isEmpty(),
    check("uid", "No se puede reservar una cancha si no está logueado").not().isEmpty(),
    validateInput
];
