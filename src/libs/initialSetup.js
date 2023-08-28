import role from '../models/role'

export const createRoles = async ( ) =>{

    try {
        const count = await role.estimatedDocumentCount()

    if (count > 0)return 
        
     const values = await Promise.all([
        new role({name: 'user'}).save(),
        new role({name: 'moderador'}).save(),
        new role({name: 'admin'}).save(),
     ])   

     console.log(values);

    } catch (err) {
        console.log(err);
    }
        
    
}
