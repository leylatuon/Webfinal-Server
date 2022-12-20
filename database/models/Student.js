/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      customValidator(value) {
        if (value < 0.0 || value > 4.0) {
          throw new Error("gpa must be between 0.0 and 4.0");
        }
      }
    }
  }
});

// Export the student model
module.exports = Student;