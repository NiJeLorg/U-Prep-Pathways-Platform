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

        ElementService.fetchElements((err, res) => {
            if (!err) {
                $scope.elements = res.data.data;
            } else {
                console.error(err, res.data);
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
            console.log("yoo");
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
            console.log(matched_indicator_score);
            return false;
        };

        $scope.storeIndicatorScore = (value, indicator) => {
            IndicatorScoreService.createIndicatorScore(
                {
                    value: value,
                    score_id: $scope.score.id,
                    indicator_id: indicator.id
                },
                (err, res) => {
                    // console.log(res, 'res');
                    // console.log(err, 'err');
                }
            );
        };
    }
];
