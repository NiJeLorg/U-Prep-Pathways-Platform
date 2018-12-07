export default [
    "$http",
    function($http) {
        let obj = {};

        obj.createIndicatorScoreEvidence = data =>
            $http.post("/api/attach-evidence", data);

        obj.deleteIndicatorScoreEvidence = data =>
            $http.delete("/api/attach-evidence", { params: data });

        return obj;
    }
];
