let csv = require("fast-csv");
let fs = require('fs');
let csv2json = require('csvtojson');
const axios = require('axios');


function importSchoolCoreData(school, filename){
    let stream = fs.createReadStream(filename)
        .pipe(csv2json());
    stream.on('end_parsed', function (jsonArray) {
        let teachers = jsonArray.map(function(value) {
            return {name:value.Teacher.toLowerCase().trim(), grade:value.Crew.toLowerCase().trim(), subject:value.Content.toLowerCase().trim(), school: school};
        });
        for(let teacher of teachers){
            if(teacher.grade !== 'all' && teacher.subject !== 'all'){
                console.log(teacher);
                axios.post('http://localhost:3000/api/seed', teacher).then(function(result){
                    console.log(result);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }

    });

}

importSchoolCoreData('UPA Elementary', 'UPA-ET.csv');
importSchoolCoreData('UPSM Elementary', 'UPSM-Elementary.csv');