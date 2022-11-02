const db = require("../data/db");

const getUser = (req, res) => {
  const { Nombre, Apellido } = req.query;
  if (Nombre || Apellido) {
    let queryGet = db.find(
      (el) => el.Nombre === Nombre || el.Apellido === Apellido
    );
    if (queryGet) {
      return res.status(200).send({ queryGet });
    } else res.status(401).send({ message: "No se encontraron coincidencias" });
  } else res.status(200).send({ db }); //No logro que me devulva el arreglo completo si no le ingreso una query param
};

const getUserById = (req, res)=>{
  const { ID } = req.params;

  const idUser = db.find((el) => el.ID == ID);
  idUser ? 
  res.status(200).send(idUser)
  : res.status(404).send({ message: "ID de usuario inválido" })
}

const postUser = (req, res) => {
  const { ID, Nombre, Apellido, DNI } = req.body;

  if (!Nombre || !Apellido || !DNI) {
    return res.status(400).send({ message: "Dato obligatorio" });
  }
  //FIX ME
  // if(ID === db.map(el => el.ID)){
  //     res.status(401).send({mesagge:"El usuario ya existe en la base de datos"})
  // } //No estoy seguro si esta parte es necesaria
  else {
    const data = {
      ID: Date.now(),
      Nombre,
      Apellido,
      DNI,
    };
    db.push(data);
    return res.status(200).send(db);
  }
};

const putUser = (req, res) => {
  const { ID } = req.params;
  const { Nombre, Apellido, DNI } = req.body;

  let userById = db.find((el) => el.ID == ID);

  if (userById) {
    if (Nombre) userById.Nombre = Nombre; //Reemplaza el valor de la propiedad del objeto por el que entra por body params
    if (Apellido) userById.Apellido = Apellido;
    if (DNI) userById.DNI = DNI;
    res.status(200).send(db);
  } else
    res
      .status(404)
      .send({ message: "El ID ingresado no coincide con ningún usuario" });
};

const deleteUser = (req, res) => {
  const { ID } = req.params;

  const newData = db.find((el) => el.ID == ID);

  if (newData) {
    let deleteById = db.filter((el) => el.ID != ID);
    return res.status(200).send({ deleteById });
  } else
    res
      .status(404)
      .send({
        message:
          "El usuario que intenta eliminar no existe en la base de datos",
      });
};

module.exports = {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};
