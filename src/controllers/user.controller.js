import {User} from "../models/user.model.js";
import { UserFactory } from "../factories/user.factory.js";

//get an user by ID
export const getUserById = async (req, res) => {
    try {
        const {idUser} = req.params;
        const user = await User.findByPk(idUser);

        const userFront = {
            PK_user: user.PK_user,
            var_nombre : user.var_nombre,
            var_email: user.var_email,
            var_password : user.var_password,
            var_role : user.var_role,
            bool_email_confirmed: user.bool_email_confirmed
        }

        return res.status(200).json(userFront);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error al intentar obtener usuario"})
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


//register a new user
export const createUser = async (req, res) => {
    try {
      const userFactory = new UserFactory();
      const newUser = userFactory.createUser(req.body);
  
      await newUser.save();

      return res.status(200).json({
        ok: true,
        user: newUser,
      });

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        duplicate: true,
        message: "Error al crear nuevo usuario",
      });
    }
  };