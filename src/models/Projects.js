import { DataTypes } from "sequelize";
import { sequelize } from "../DB/DB.js";
import { Tasks } from "./Tasks.js";

export const Project = sequelize.define(
  "Project",
  {
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
  },
  { timestamps: true }
);

Project.hasMany(Tasks, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Tasks.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});
