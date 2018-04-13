import {teacher, subject, grade, school, grade_teacher, subject_teacher, grade_school} from './../models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

const get = async (req, res) => {
    res.sendData(req.school);
};
const seedTeacher = async (req, res, next) => {
    console.log(req.body);
    const teacherGrade = req.body.grade;
    const teacherSubject = req.body.subject;
    let schoolObj = await getSchool(req.body.school);
    let teacherObj = {};
    // STEP 1 create teacher object and their associated school
    if (schoolObj !== undefined) {
        teacherObj = await teacher.create({
            name: req.body.name,
            school_id: schoolObj.id
        });
        if (teacherGrade !== 'all'&& teacherGrade !== 'self-contained' && teacherSubject !== 'self-contained' && teacherSubject !== 'all') {
            // STEP 2 if grade == all then get all grades from school and insert grade teacher association for all
            let gradeObj = await getGrade(teacherGrade);
            await teacherObj.addGrades(gradeObj);
            let subjectObj = await getSubject(teacherSubject);
            await  subject_teacher.create({
                grade_id: gradeObj.id,
                teacher_id: teacherObj.id,
                subject_id: subjectObj.id
            });
        }else if ((teacherGrade === 'all' || teacherGrade === 'self-contained') && teacherSubject !== 'self-contained' && teacherSubject !== 'all') {
            let subjectObj = await getSubject(teacherSubject);
            for(let gradeObj of schoolObj.grades){
                await teacherObj.addGrades(gradeObj);
                await  subject_teacher.create({
                    grade_id: gradeObj.id,
                    teacher_id: teacherObj.id,
                    subject_id: subjectObj.id
                });
            }
        }else if (teacherGrade !== 'all' && teacherGrade !== 'self-contained' && (teacherSubject === 'all'  || teacherSubject === 'self-contained')) {
            let gradeObj = await getGrade(teacherGrade);
            await teacherObj.addGrades(gradeObj);
            for(let subjectObj of schoolObj.subjects){
                await  subject_teacher.create({
                    grade_id: gradeObj.id,
                    teacher_id: teacherObj.id,
                    subject_id: subjectObj.id
                });
            }
        }else if ((teacherGrade === 'all' && teacherGrade === 'self-contained') && (teacherSubject === 'all'  || teacherSubject === 'self-contained')) {
            for(let gradeObj of schoolObj.grades){
                await teacherObj.addGrades(gradeObj);
                for(let subjectObj of schoolObj.subjects){
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
        let gradeObj = await getGrade(gradeName);
        if (gradeObj === undefined) {
            gradeObj = await grade.create({name: gradeName});
        }
        await schoolObj.addGrades(gradeObj);

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
        let subjectObj = await getSubject(subjectName);
        if (subjectObj === undefined) {
            subjectObj = await subject.create({name: subjectName});
        }
        await schoolObj.addSubjects(subjectObj);

    }
    res.sendData({msg: "Seeded school subject data successfully"});
};
const getSchool = async (schoolStr) => {
    return school.findOne({
            include: [{model: grade, as: "grades", required: false},{model: subject, as: "subjects", required: false} ],
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