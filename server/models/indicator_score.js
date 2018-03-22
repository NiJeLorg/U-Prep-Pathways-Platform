'use strict';
module.exports = (sequelize, DataTypes) => {
	let IndicatorScore = sequelize.define('indicator_score', {
		value: DataTypes.INTEGER
	}, {
		underscored: true
	});
	IndicatorScore.associate = function (models) {
		// associations can be defined here
		IndicatorScore.belongsTo(
			models.score, {
				foreignKey: 'score_id'
			})

		IndicatorScore.belongsTo(models.indicator, {
			foreignKey: 'indicator_id'
		})
	};
	return IndicatorScore;
};