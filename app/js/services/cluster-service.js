export default [
    "$resource",
    function($resource) {
        let obj = $resource(
            "/api/clusters/",
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
