const db = require('../data/db')

const getUser = (req, res)=>{
    const {Nombre, Apellido} = req.query;

    //FIX ME
    // if (req.query !== Nombre && req.query !== Apellido) {
    //     res.status(200).send({db})
    // } No logro que me devulva el arreglo completo si no le ingreso una query param
   
    if(Nombre || Apellido){
        let queryGet = db.find( el => el.Nombre === Nombre || el.Apellido === Apellido);
        return res.status(200).send({queryGet})
    } else res.status(401).send({message: 'No se encontraron coincidencias'});
}

const postUser = (req, res)=>{
    const { ID, Nombre, Apellido, DNI } = req.body;

    if (!Nombre || !Apellido || !DNI ){
    return res.status(400).send({message: "Dato obligatorio"})
    }
    //FIX ME
    // if(ID === db.map(el => el.ID)){
    //     res.status(401).send({mesagge:"El usuario ya existe en la base de datos"})
    // } //No estoy seguro si esta parte es necesaria
    else{
        const data = {
            ID: Date.now(),
            Nombre,
            Apellido,
            DNI
          };
          db.push(data);
        return res.status(200).send(db)
    }
}

const putUser = (req, res)=>{
    res.status(200).send('Peticion PUT')
}

const deleteUser = (req, res)=>{
    res.status(200).send('Peticion DELETE')
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}