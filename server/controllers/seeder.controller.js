import { teacher, subject, grade, school, grade_teacher, subject_teacher } from './../models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

const get = async (req, res) => {
    res.sendData(req.school);
};
const seedTeacher = async (req, res, next) => {
    console.log(req.body);
    const teacherName = req.body.name;
    const teacherGrade = req.body.grade;
    const teacherSchool = req.body.school;
    const teacherSubject = req.body.subject;
    let foundSchool = await getSchool(teacherSchool);
    let foundGrade = await getGrade(teacherGrade);
    let foundSubject = await getSubject(teacherSubject);
    let t = {};
    if(foundSchool !== undefined && foundGrade !== undefined && foundSubject !== undefined){
        t = await teacher.create({
            name: teacherName,
            school_id: foundSchool.id
        });
        console.log("one");
        await grade_teacher.create({
                grade_id: foundGrade.id,
                teacher_id: t.id
            });
        console.log("two");
        await  subject_teacher.create({
            grade_id: foundGrade.id,
            teacher_id: t.id,
            subject_id: foundSubject.id
        });
        console.log("three");
    }

    res.sendData(t);
};

const getSchool = async(schoolStr) =>{
    return await school.findOne({
        where: {name: {[Op.eq]:schoolStr}}
    });
};

const getGrade = async(gradeStr) =>{
    return await grade.findOne({
        where: {name: {[Op.eq]:gradeStr}}
    });
};

const getSubject = async(subjectStr) =>{
    return await subject.findOne({
        where: {name: {[Op.eq]:subjectStr}}
    });
};



export default {seedTeacher};