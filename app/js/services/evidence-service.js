export default [
    "$http",
    function($http) {
        return {
            fetchEvidence: () => $http.get("/api/evidence")
        };
    }
];
