import user from '../models/user'; // Importa el modelo de usuario definido en '../models/user'
import jwt from 'jsonwebtoken'; // Importa el paquete 'jsonwebtoken' para manejar tokens
import config from '../config'; // Importa la configuración desde '../config'
import Roles from '../models/role'; // Importa el modelo de rol definido en '../models/role'

export const singup = async (req, res) => {
    const { username, email, password, roles } = req.body; // Obtiene datos del cuerpo de la solicitud

    const newuser = new user({
        username,
        email,
        password: await user.encryptPassword(password) // Encripta la contraseña usando el método 'encryptPassword' del modelo 'user'
    });

    if (roles) {
        const foundRoles = await Roles.find({ name: { $in: roles } }); // Busca los roles por nombre en la base de datos
        newuser.roles = foundRoles.map(role => role._id); // Asigna los ID de los roles encontrados al usuario
    } else {
        const role = await Roles.findOne({name: "user" }); // Busca el rol 'user' en la base de datos
        newuser.roles = [role._id]; // Asigna el ID del rol 'user' al usuario
    }

    const savedUser = await newuser.save() // Guarda el usuario en la base de datos
    console.log(savedUser);
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 // Crea un token firmado con una duración de 24 horas (86400 segundos)
    });

    res.json({ token }); // Devuelve el token en la respuesta
}

export const singin = async (req, res) => {

    const userfound = await user.findOne({ email: req.body.email }) // Busca el usuario por correo electrónico en la base de datos

    if (!userfound) return res.status(400).json({ message: "User not found" }); // Si no encuentra el usuario, devuelve un mensaje de error
    
    const machtpasword = await user.comparepassword(req.body.password, userfound.password) // Compara la contraseña enviada con la contraseña del usuario encontrado
   
   if (!machtpasword) return res.status(401).json({ token: null, message: "Invalid password" }); // Si las contraseñas no coinciden, devuelve un mensaje de error 

    console.log('userfound',userfound);
    
    const token = jwt.sign({ id: userfound._id }, config.SECRET, {
        expiresIn: 86400 // Crea un token firmado con una duración de 24 horas (86400 segundos)
    })
    res.json({token})
}

