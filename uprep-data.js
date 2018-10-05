let fs = require('fs');
let csv2json = require('csvtojson');
const axios = require('axios');
const BASE_URL = 'http://localhost:3000/api/';
const _ = require('lodash');

function seedSchoolGradeData(school, grades) {
  axios.post(BASE_URL + '/seed/grades', {name: school, grades: grades}).then(function (result) {
    console.log(result);
  }).catch(function (error) {
    console.log(error);
  });
}

function seedSubjectData(school, subjects) {
  axios.post(BASE_URL + '/seed/subjects', {name: school, subjects: subjects}).then(function (result) {
    console.log(result);
  }).catch(function (error) {
    console.log(error);
  });
}

function seedSchoolTeacherData(teachers) {
  for (let teacher of teachers) {
    axios.post(BASE_URL + '/seed/teachers', teacher).then(function (result) {
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
    let validatedGrades = [];
    for (let grade of grades) {
      validatedGrades = validatedGrades.concat(grade.split(','));
    }
    let subjects = jsonArray.map(function (value) {
      return value.Content.toLowerCase().trim();
    });
    let validatedSubjects = [];
    for (let subject of subjects) {
      validatedSubjects = validatedSubjects.concat(subject.split(','));
    }
    validatedSubjects = _.uniq(validatedSubjects).map(subj => subj.trim());
    seedSchoolGradeData(school, validatedGrades);
    seedSubjectData(school, validatedSubjects);
    let teachers = jsonArray.map(function (value) {
      return {
        name: value.Teacher.toLowerCase().trim(),
        grade: value.Crew.toLowerCase().split(',').map(crew => crew.trim()),
        subject: value.Content.toLowerCase().split(',').map(subj => subj.trim()),
        school: school
      };
    });
    seedSchoolTeacherData(teachers);

  });

}

importSchoolCoreData('UPA HS', 'UPA-HS.csv');
importSchoolCoreData('UPSM High School', 'UPSM-High-School.csv');
importSchoolCoreData('UPA Elementary', 'UPA-ET.csv');
importSchoolCoreData('UPSM Elementary', 'UPSM-Elementary.csv');
importSchoolCoreData('UPA MM', 'UPA-MM.csv');
importSchoolCoreData('UPA MS', 'UPA-MS.csv');