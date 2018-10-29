export default [
    "$scope",
    "$state",
    "score",
    "ElementService",
    "IndicatorScoreService",
    "UtilService",
    "ScoreService",
    function(
        $scope,
        $state,
        score,
        ElementService,
        IndicatorScoreService,
        UtilService,
        ScoreService
    ) {
        $scope.score = score.data;
        $scope.indicatorValue = [null, 1, 2, 3, 4];
        $scope.isAccordionOpen = false;
        let uniqueComponentIds;

        ElementService.fetchElements((err, res) => {
            if (!err) {
                $scope.elements = res.data.data;
                uniqueComponentIds = getComponentsThatShouldBeOpen(
                    res.data.data
                );
            } else {
                console.error(err);
            }
        });

        // event listeners
        $scope.displayIndicatorLevelsModal = indicator => {
            $scope.selectedIndicator = indicator.name;
            UtilService.openModal("indicator-levels-modal");
        };

        $scope.closeIndicatorLevelsModal = () => {
            UtilService.closeModal("indicator-levels-modal");
        };

        $scope.openSubmitScoreModal = () => {
            UtilService.openModal("sumbit-score-modal");
        };

        $scope.closeSubmitScoreModal = () => {
            UtilService.closeModal("submitted-score-popup");
        };

        $scope.submitScore = () => {
            UtilService.closeModal("sumbit-score-modal");
            UtilService.openModal("submitted-score-popup");
            setTimeout(function() {
                $state.go("home");
            }, 3000);
        };

        $scope.showDeleteScoreModal = () => {
            UtilService.openModal("delete-score-modal");
        };

        $scope.deleteScore = () => {
            ScoreService.remove(
                {
                    id: $scope.score.id
                },
                res => {
                    $state.go("home");
                }
            );
        };

        $scope.getAddSelectedIndicators = indicators => {
            let indicators_mapped = indicators.map(indicator => {
                let matched_indicator = $scope.score.indicator_scores.filter(
                    indicator_score =>
                        indicator_score.indicator_id === indicator.id
                );
                if (matched_indicator.length > 0) {
                    indicator.value = "" + matched_indicator[0].value;
                }
                return indicator;
            });
            return indicators_mapped;
        };
        $scope.checkIndicatorScore = (indicator, value) => {
            let matched_indicator_score = $scope.score.indicator_scores.filter(
                indicator_score => indicator_score.indicator_id === indicator.id
            );
            return false;
        };

        $scope.storeIndicatorScore = (value, indicator) => {
            IndicatorScoreService.createIndicatorScore(
                {
                    value: value,
                    score_id: $scope.score.id,
                    indicator_id: indicator.id
                },
                (err, res) => {}
            );
        };

        function getComponentsThatShouldBeOpen(elements) {
            let componentIds = [];
            elements.forEach(element => {
                element.components.forEach(component => {
                    component.indicators.forEach(indicator => {
                        score.data.indicator_scores.forEach(indicator_score => {
                            if (indicator_score.indicator_id === indicator.id) {
                                componentIds.push(indicator.component_id);
                            }
                        });
                    });
                });
            });
            return [...new Set(componentIds)];
        }

        $scope.toggleAccordion = function(component) {
            let result;
            if (!status) {
                uniqueComponentIds.map(id => {
                    if (id === component.id) {
                        result = true;
                    }
                });
            } else {
                result = !status;
            }
            return result;
        };
    }
];
