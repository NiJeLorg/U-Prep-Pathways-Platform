'use strict';
const components = [{
    name: 'College Bound',
    element_id: 1,
    id: 1,
    description: 'We ensure our students will be college ready through the development of strong work habits and a growth mindset.Our students understand the significance of a college degree and align their efforts in school with a college-bound trajectory.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Character',
    element_id: 1,
    id: 2,
    description: 'U Prep’s core values are developed and harnessed as a means of contributing to the community. Our students take pride in their community and demonstrate their pride through their actions and words. Our visible environment is a reflection of our values.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Student Ownership',
    element_id: 1,
    id: 3,
    description: 'Students internalize and value the culture of high expectations within U Prep schools. They reflect on how this culture manifests itself through their academic and character development. Key momentsserve as capstone projects for students.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Knowledge of Standards and Content',
    element_id: 2,
    id: 4,
    description: 'Teachers have a deep understanding of the standard and content expectations, and the ability to seamlessly blend the two',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Short-term and Long-term Planning',
    element_id: 2,
    id: 5,
    description: 'Intentional planning and reflection results in engaged learners and increased student achievement.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Student Ownership',
    element_id: 2,
    id: 6,
    description: 'Students have a voice in their own learning.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Intellectual Engagement - Fostering Curiosity',
    element_id: 3,
    id: 7,
    description: 'Teaching and learning are exciting. Students think deeply about the topics at hand.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Responding to Students Needs',
    element_id: 3,
    id: 8,
    description: 'The teaching and learning process is designed and modified to meet the needs of all students.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Student Ownership',
    element_id: 3,
    id: 9,
    description: 'Students become leaders of their own learning.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Formative & Summative Assessment',
    element_id: 4,
    id: 10,
    description: 'Our teachers design standards-aligned tasks and assessments that push our students’ learning. We reflect on student learning to improve our instructional practices.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Feedback',
    element_id: 4,
    id: 11,
    description: 'Feedback guides students to reflect and improve on their own work.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Student Ownership',
    element_id: 4,
    id: 12,
    description: 'Our students have a sense of agency around their learning. As a result, they reflect on their work, set goals, and strive to achieve them.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'School Development',
    element_id: 5,
    id: 13,
    description: 'Our school-based leadership teams work together within defined systems and structures to achieve their goals, and build and maintain the trust of their staff.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Team Development',
    element_id: 5,
    id: 14,
    description: 'We work in teams to help us accomplish our goals and grow our practice. Professional trust is foundational to all team work.',
    created_at: new Date(), updated_at: new Date()
}, {
    name: 'Individual Development',
    element_id: 5,
    id: 15,
    description: 'We work to intentionally grow every teacher. Our teachers understand the significance of professional trust and work to demonstrate and develop it in all facets of their work.',
    created_at: new Date(), updated_at: new Date()
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('components', components);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('components', null, {});
    }
};
