import app from "./app.js";
import "./models/associations.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  try {
    await sequelize.sync({ force: false });

    app.listen(process.env.PORT, () => {
      console.log(`Server on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

await main();
