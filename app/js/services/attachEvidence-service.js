export default [
    "$http",
    function($http) {
        let obj = {};

        obj.createIndicatorScoreEvidence = data =>
            $http.post("/api/attach-evidence", data);

        obj.deleteIndicatorScoreEvidence = data =>
            $http.delete("/api/attach-evidence", { params: data });

        obj.createIndicatorScoreObservationEvidence = data =>
            $http.post("/api/attach-evidence-observations", data);

        obj.deleteIndicatorScoreObservationEvidence = data =>
            $http.delete("/api/attach-evidence-observations", { params: data });

        return obj;
    }
];
