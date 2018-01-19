function get(req, res){
    res.statusCode = 200;
    return res.json({
        "data": [
            {"id": 1, "name": "Grade 1"},
            {"id": 2, "name": "Grade 2"},
            {"id": 3, "name": "Grade 3"},
            {"id": 4, "name": "Grade 4"},
            {"id": 5, "name": "Grade 5"},
            {"id": 6, "name": "Grade 6"},
            {"id": 7, "name": "Grade 7"}
        ]
    });
}

function load(req, res, next, id){
    res.statusCode = 200;
    return res.json({
        "data": {"id": 1, "name": "Grade 1"}
    });
}

export default {get, load};