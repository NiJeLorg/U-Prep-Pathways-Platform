'use strict';
const Grades = ['k', '1', '2', '3', '4', '5' ];

const GradeEntries = Grades.map(grade => {
   return {name: grade, created_at: new Date(), updated_at: new Date()};
});
module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('grades', GradeEntries, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('grades', null, {});
  }
};
