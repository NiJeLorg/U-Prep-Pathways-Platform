"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("observations", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER //TODO Consider changing to using UUID
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            status: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            observation_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "observation_types",
                    key: "id"
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            grade_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            school_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("observations");
    }
};
