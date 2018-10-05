'use strict';
const elements = [{
    name: 'Culture of High Expectations',
    id: 1,
    tag: 'HIGH EXPECTATIONS PERMEATE EVERY FACET OF OUR WORK',
    description: 'We intentionally cultivate an environment that reflects our values. Ourtraditions, experiences and structures develop engaged,college-bound students.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Demanding Curriculum',
    id: 2,
    tag: 'STANDARDS-ALIGNED CURRICULUM THAT PREPARES STUDENTS FOR SUCCESS IN COLLEGE',
    description: 'Grade-level learning experiences are created through a structured teaching, learning, and planning process. Our curriculum is rooted in standards and pushes students to construct their own meaning through rigorous, authentic tasks.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Engaging Instruction',
    id: '3',
    tag: 'STUDENTS DO THE HEAVY LIFTING',
    description: 'Discussion-based lessons that foster critical thinking are framed in ways that push students to think deeply about topics of study and compel them to learn more. Instruction is modified to meet the needs of all students.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Rigorous Assessments',
    id: 4,
    tag: 'REFLECTIVE CONVERSATIONS THROUGHOUT THE LEARNING CYCLE',
    description: 'Our work pushes students to construct meaning and master learning targets. We regularly assess the effectiveness of instruction and its impact on student learning. This is done through self-assessment, reflection, and data analysis. Teachers and leaders adjust plans to guide students to mastery',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Shared Leadership',
    id: 5,
    tag: 'SETTING GOALS AND HOLDING EACH OTHER ACCOUNTABLE',
    description: 'Leadership teams use structured time to build, communicate, and implement work plans. Leaders and teachers collaboratively plan professional development to foster an inclusive learning community. Every individual is a leader whose voice contributes to the attainment of school goals. Foundational to our work as leaders is professional trust.',
    created_at: new Date(), updated_at: new Date()
}];
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('elements', elements);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('elements', null, {});
    }
};
