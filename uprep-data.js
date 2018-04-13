let csv = require("fast-csv");
let fs = require('fs');
let csv2json = require('csvtojson');
const axios = require('axios');
const BASE_URL = 'http://localhost:3000/api/';

function seedSchoolGradeData(school, grades) {
    axios.post(BASE_URL+'/seed/grades', {name: school, grades: grades}).then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });
}

function seedSubjectData(school, subjects) {
    axios.post(BASE_URL+'/seed/subjects', {name: school, subjects: subjects}).then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });
}

function seedSchoolTeacherData(teachers) {
    for(let teacher of teachers){
        axios.post(BASE_URL+'/seed/teachers', teacher).then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    }

}

function importSchoolCoreData(school, filename) {
    let stream = fs.createReadStream(filename)
        .pipe(csv2json());
    stream.on('end_parsed', function (jsonArray) {
        let grades = jsonArray.map(function (value) {
            return value.Crew.toLowerCase().trim();
        });
        grades = grades.filter(function (grade) {
            return grade !== 'all' && grade !== 'self-contained';
        });
        console.log(grades);

        let subjects = jsonArray.map(function (value) {
            return value.Content.toLowerCase().trim();
        });
        subjects = subjects.filter(function (subject) {
            return subjects !== 'all' && subjects !== 'self-contained';
        });
        seedSchoolGradeData(school, grades);
        seedSubjectData(school, subjects);
        let teachers = jsonArray.map(function (value) {
            return {
                name: value.Teacher.toLowerCase().trim(),
                grade: value.Crew.toLowerCase().trim(),
                subject: value.Content.toLowerCase().trim(),
                school: school
            };
        });
        seedSchoolTeacherData(teachers);

    });

}

importSchoolCoreData('UPA Elementary', 'UPA-ET.csv');
// importSchoolCoreData('UPSM Elementary', 'UPSM-Elementary.csv');