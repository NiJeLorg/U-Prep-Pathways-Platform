import {teacher, subject, grade, school, grade_teacher, subject_teacher, grade_school} from './../models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

const get = async (req, res) => {
  res.sendData(req.school);
};
const seedTeacher = async (req, res, next) => {
  const teacherGrades = req.body.grade;
  const teacherSubjects = req.body.subject;
  let schoolObj = await getSchool(req.body.school);
  let teacherObj = {};
  // STEP 1 create teacher object and their associated school
  if (schoolObj !== undefined) {
    teacherObj = await teacher.create({
      name: req.body.name,
      school_id: schoolObj.id
    });
    if (teacherGrades[0] !== 'all' && teacherGrades[0] !== 'self-contained' && teacherSubjects[0] !== 'self-contained' && teacherSubjects[0] !== 'all') {
      // STEP 2 if grade == all then get all grades from school and insert grade teacher association for all
      for (let teacherGrade of teacherGrades) {
        let gradeObj = await getGrade(teacherGrade);
        await teacherObj.addGrades(gradeObj);
        for (let teacherSubject of teacherSubjects) {
          let subjectObj = await getSubject(teacherSubject);
          await  subject_teacher.create({
            grade_id: gradeObj.id,
            teacher_id: teacherObj.id,
            subject_id: subjectObj.id
          });
        }

      }

    } else if ((teacherGrades[0] === 'all' || teacherGrades[0] === 'self-contained') && teacherSubjects[0] !== 'self-contained' && teacherSubjects[0] !== 'all') {
      for (let teacherSubject of teacherSubjects) {
        let subjectObj = await getSubject(teacherSubject);
        for (let gradeObj of schoolObj.grades) {
          await teacherObj.addGrades(gradeObj);
          await  subject_teacher.create({
            grade_id: gradeObj.id,
            teacher_id: teacherObj.id,
            subject_id: subjectObj.id
          });
        }
      }

    } else if (teacherGrades[0] !== 'all' && teacherGrades[0] !== 'self-contained' && (teacherSubjects[0] === 'all' || teacherSubjects[0] === 'self-contained')) {
      for (let teacherGrade of teacherGrades) {
        let gradeObj = await getGrade(teacherGrade);
        await teacherObj.addGrades(gradeObj);
        for (let subjectObj of schoolObj.subjects) {
          await  subject_teacher.create({
            grade_id: gradeObj.id,
            teacher_id: teacherObj.id,
            subject_id: subjectObj.id
          });
        }
      }
    } else if ((teacherGrades[0] === 'all' && teacherGrades[0] === 'self-contained') && (teacherSubjects[0] === 'all' || teacherSubjects[0] === 'self-contained')) {
      for (let gradeObj of schoolObj.grades) {
        await teacherObj.addGrades(gradeObj);
        for (let subjectObj of schoolObj.subjects) {
          await  subject_teacher.create({
            grade_id: gradeObj.id,
            teacher_id: teacherObj.id,
            subject_id: subjectObj.id
          });
        }
      }

    }
  }
  res.sendData("Successfully seeded teacher data");
};


const seedGrades = async (req, res, next) => {
  const schoolName = req.body.name;
  const schoolGrades = req.body.grades;
  let schoolObj = await getSchool(schoolName);
  if (schoolObj === undefined) {
    schoolObj = await school.create({
      name: schoolName
    })
  }
  for (let gradeName of schoolGrades) {
    if (gradeName !== 'all') {
      let gradeObj = await getGrade(gradeName);
      if (gradeObj === undefined || gradeObj === null) {
        gradeObj = await grade.create({name: gradeName});
      }
      await schoolObj.addGrades(gradeObj);
    }


  }
  res.sendData({msg: "Seeded school grade data successfully"});
};

const seedSubjects = async (req, res, next) => {
  const schoolName = req.body.name;
  const schoolSubjects = req.body.subjects;
  let schoolObj = await getSchool(schoolName);
  if (schoolObj === undefined) {
    schoolObj = await school.create({
      name: schoolName
    })
  }
  for (let subjectName of schoolSubjects) {
    if (subjectName !== 'all') {
      let subjectObj = await getSubject(subjectName);
      if (subjectObj === undefined || subjectObj === null) {
        subjectObj = await subject.create({name: subjectName});
      }
      await schoolObj.addSubjects(subjectObj);
    }


  }
  res.sendData({msg: "Seeded school subject data successfully " + schoolSubjects});
};
const getSchool = async (schoolStr) => {
  return school.findOne({
      include: [{model: grade, as: "grades", required: false}, {model: subject, as: "subjects", required: false}],
      where: {name: {[Op.eq]: schoolStr}}
    }
  );
};

const getGrade = async (gradeStr) => {
  return grade.findOne({
    where: {name: {[Op.eq]: gradeStr}}
  });
};

const getSubject = async (subjectStr) => {
  return subject.findOne({
    where: {name: {[Op.eq]: subjectStr}}
  });
};


export default {seedTeacher, seedGrades, seedSubjects};