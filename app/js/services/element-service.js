export default [
    "$http",
    function($http) {
        return {
            fetchElements: () => $http.get("/api/elements")
        };
    }
];
