export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(
            BASE_URL + "/clusters/",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        return obj;
    }
];
