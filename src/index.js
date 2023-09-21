import { sequelize } from "./DB/DB.js";
import app from "./app.js";
import "./models/Projects.js";
import "./models/Tasks.js";

const PORT = 3000;

(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(`${PORT}`);
    console.log(`Server rise in port ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
