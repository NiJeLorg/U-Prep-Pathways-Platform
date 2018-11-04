export default [
    "$resource",
    function($resource) {
        let obj = $resource(
            "/api/observation_evidences/:id",
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
