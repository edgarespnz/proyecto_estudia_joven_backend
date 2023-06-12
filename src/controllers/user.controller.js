import { User } from "../models/user.model.js";

//get an user by ID
export const getUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await User.findByPk(idUser);

    const userFront = {
      PK_user: user.PK_user,
      var_nombre: user.var_nombre,
      var_email: user.var_email,
      var_password: user.var_password,
      var_role: user.var_role,
      bool_email_confirmed: user.bool_email_confirmed
    }

    return res.status(200).json(userFront);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al intentar obtener usuario" })
  }
}


//login an user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ var_email: email });

    if (user && user.password === password) {
      // Si las credenciales son válidas, envía los datos relevantes del usuario en la respuesta
      const userFront = {
        PK_user: user.PK_user,
        var_nombre: user.var_nombre,
        var_email: user.var_email,
        var_role: user.var_role,
        bool_email_confirmed: user.bool_email_confirmed
      };

      return res.status(200).json(userFront);
    } else {
      // Si las credenciales no son válidas, envía un mensaje de error en la respuesta
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al intentar iniciar sesión" });
  }
};


export const createUser = async (req, res) => {
  try {
    //defino lo que se pide según el modelo para la petición
    const {
      var_name,
      var_lastname,
      var_email,
      var_password,
      var_role,
      bool_email_confirmed } = req.body;

    // Crea el nuevo usuario en la base de datos
    const newUser = await User.create({
      var_name,
      var_lastname,
      var_email,
      var_password,
      var_role,
      bool_email_confirmed,
    });

    //si todo sale bien devuelve ok
    return res.status(200).json({
      ok: true,
      user: newUser,
    });
s
    //control de errores
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      duplicate: true,
      message: "Error al crear nuevo usuario",
    });
  }
};


export const getUserIfProfesor = async (req,res)=>{
  try {
    const teachers = await User.findAll({
      where: {
        var_role: 'profesor'
      }
    });

    return res.status(200).json({
      ok: true,
      teacher_list: teachers
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "error en el servidor"
    })
  }
}