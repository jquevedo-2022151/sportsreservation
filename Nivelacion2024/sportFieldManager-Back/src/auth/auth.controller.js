import { generateJwt } from '../../utils/generate-jwt.js'
import User from '../users/user.model.js'
import bcryptjs from 'bcryptjs'


// Funcion declarativa
export const register = async(req, res)=>{
    try{
    const data = req.body
    data.profilePicture = req.file.filename ?? null
    let salt = await bcryptjs.genSalt()
    data.password = await bcryptjs.hash(data.password, salt)
    const user = new User(data)
    await user.save()
    return res.send(
        {
            message: `Usuario registro en la base de datos correctamente, inicia sesion con el correo ${user.email}`,
            userDetails: {
                user: user.username,
                email: user.email
            }
        }
    )
    }catch(err){
        console.error('Error al registrar al usuario', err)
        return res.status(500).send({message: 'No se pudo registrar al usuario, intenta de nuevo más tarde', err})
    }
}

export const login = async(req, res)=>{
    const { username, email, password } = req.body
    const lowerEmail = email ? email.toLowerCase() : null
    const lowerUsername = username ? username.toLowerCase() : null
    try{
    const userExist = await User.findOne(
        {
            $or: [
                {username: lowerUsername},
                {email: lowerEmail}
            ]
        }
    )
    if(!userExist){
        return res.status(404).json(
            {
                msg: 'Credenciales invalidas',
                error: 'Aún no tienes una cuenta con nosotros'
            }
        )
    }
    const checkPassword = await bcryptjs.compare(password, userExist.password)
    if(!checkPassword) return res.status(403).json(
        {
            msg: 'Credenciales inválidas',
            error: 'Contraseña incorrecta'
        }
    )

    const token = await generateJwt({uid: userExist._id, email: userExist.email})
    //Momentario
    return res.json(
        {
            msg: 'Inicio de sesión existoso',
            userDetails: {
                username: userExist.username,
                token, 
                profilePicture: userExist.profilePicture,
                uid: userExist._id
            }
        }
    )
    }catch(err){
        console.error('Error al iniciar sesion', err)
        return res.status(500).send({message: 'No se pudo iniciar sesion, intenta de nuevo más tarde', err})
    }
}

//Funcion expresiva
//function register2(params) {

//}