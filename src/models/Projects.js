import { DataTypes } from "sequelize";
import { sequelize } from "../DB/DB.js";

export const Project = sequelize.define("Projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  priority: {
    type: DataTypes.INTEGER,
  },

  description: {
    type: DataTypes.STRING,
  },
});
