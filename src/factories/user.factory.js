import { User } from "../models/user.model.js";

export class UserFactory {
  createUser(userData) {
    const { var_name, var_lastname, var_email, var_password, var_role } = userData;

    // Aquí puedes agregar lógica adicional para validar los datos de entrada, aplicar transformaciones, etc.

    const newUser = new User({
      var_name,
      var_lastname,
      var_email,
      var_password,
      var_role,
      bool_email_confirmed: false,
    });

    return newUser;
  }
}
