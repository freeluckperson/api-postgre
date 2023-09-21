// import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize("myapi", "postgres", "postgree", {
//   host: "localhost",
//   dialect: "postgres",
// });

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:postgree@localhost/myapi"
);
