export default [
    "BASE_URL",
    "$http",
    function(BASE_URL, $http) {
        return {
            fetchElements() {
                return $http.get(BASE_URL + "/elements");
            }
        };
    }
];
