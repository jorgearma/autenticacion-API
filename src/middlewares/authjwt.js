import jwt from "jsonwebtoken"; // Importar el paquete 'jsonwebtoken' para manejar tokens
import config from "../config"; // Importar la configuración desde '../config'
import User from "../models/user"; // Importar el modelo de usuario definido en '../models/user'

export const verifytoken = async (req, res, next) => {
    const token = req.headers["x-acess-token"]; // Obtener el token del encabezado de la solicitud

    console.log(token); // Imprimir el token en la consola (solo para propósitos de depuración)

    if (!token) {
        return res.status(403).json({ message: "No token provided" }); // Si no hay token, devolver un error 403
    }

    try {
        const decoded = jwt.verify(token, config.SECRET); // Verificar y decodificar el token usando la clave secreta
        req.id = decoded.id; // Extraer el ID del usuario del token y agregarlo a la solicitud
        console.log(decoded); // Imprimir el contenido decodificado del token (solo para propósitos de depuración)

        const user = await User.findById(req.id, { password: 0 }); // Buscar al usuario en la base de datos usando el ID del token
        console.log(user); // Imprimir el objeto de usuario obtenido de la base de datos (solo para propósitos de depuración)

        if (!user) {
            return res.status(404).json({ message: "No user found" }); // Si no se encuentra el usuario, devolver un error 404
        }

        next(); // Si todo está bien, pasar al siguiente middleware o ruta
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" }); // Si ocurre un error al verificar el token, devolver un error 401
    }
};
