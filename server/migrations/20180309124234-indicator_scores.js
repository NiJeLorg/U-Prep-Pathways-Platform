"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("indicator_scores", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            indicator_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            score_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            note: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("indicator_scores");
    }
};
