'use strict';
const TestData = () => {
    return {
        schools: ['UPSM ELEMENTARY', 'ELLEN THOMPSON ELEMENTARY', 'MARK MURRAY ELEMENTARY', 'UPA MIDDLE', 'UPSM MIDDLE', 'UPA HIGH', 'UPSM HIGH'],
        grades: [{
            grade: 'Kindergarten',
            level: 'Elementary'
        }, {
            grade: '1st grade',
            level: 'Elementary'
        }, {
            grade: '2nd grade',
            level: 'Elementary'
        }, {
            grade: '3rd grade',
            level: 'Elementary'
        }, {
            grade: '4th grade',
            level: 'Elementary'
        }, {
            grade: '5th grade',
            level: 'Elementary'
        }, {
            grade: '6th Grade',
            level: 'Middle'
        }, {
            grade: '7th Grade',
            level: 'Middle'
        }, {
            grade: '8th Grade',
            level: 'Middle'
        }, {
            grade: '9th Grade',
            level: 'High'
        }, {
            grade: '10th Grade',
            level: 'High'
        }, {
            grade: '11th Grade',
            level: 'High'
        }, {
            grade: '12th Grade',
            level: 'High'
        }],
        teachers: ['Mr.Martin', 'Ms.Andrews', 'Ms.Ng', 'Mr.Schnider', 'Ms.Peterson', 'Mr.Underhill'],
        subjects: ['Math', 'Science', 'English', 'Gym', 'Art', 'Music'],
        scoreBase: ['Score based on clusters observed', 'Score by elements'],
        observationKind: ['Crew', 'Lesson', 'Other type of observation'],
        elements: [{
            name: 'Culture of High Expectations',
            color: '#f0c143',
            components: [{
                name: 'College Bound',
                indicators: ['Grading', 'College-Going Culture', 'High Quality Work', 'Timeliness and Preparation']
            }, {
                name: 'Character',
                indicators: ['Citizenship', 'Visible Environment', 'Internalizing Routines and Procedures', 'Crew', 'Leveraging Crew']
            }, {
                name: 'Student Ownership',
                indicators: ['Self-Evaluation', 'Student-Led Conferences', 'Portfolio Passages']
            }]
        }, {
            name: 'Demanding Curriculum',
            color: '#e49043',
            components: [{
                name: 'Knowledge of Standards and Content',
                indicators: ['Interconnectedness of Standards']
            }, {
                name: 'Short-term and Long-term Planning',
                indicators: ['Unit Planning', 'Learning Targets', 'Lesson Design', 'Use of Protocols', 'Reflection']
            }, {
                name: 'Student Ownership',
                indicators: ['Task Selection']
            }]
        }, {
            name: 'Engaging Instruction',
            color: '#48818d',
            components: [{
                name: 'Intellectual Engagement - Fostering Curiosity',
                indicators: ['Leveraging Learning Targets', 'Teacher as Facilitator', 'Peer Critique and Critical Thinking']
            }, {
                name: 'Responding to Students Needs',
                indicators: ['Modification in the Moment', 'Differentiation']
            }, {
                name: 'Student Ownership',
                indicators: ['Asking Questions', 'Perseverance']
            }]
        }, {
            name: 'Rigorous Assessments',
            color: '#6751a4',
            components: [{
                name: 'Formative & Summative Assessment',
                indicators: ['Formative Assessments', 'Summative Assessments', 'Assessment Design', 'Tasks']
            }, {
                name: 'Feedback',
                indicators: ['Feedback']
            }, {
                name: 'Student Ownership',
                indicators: ['Learning Target Reflection', 'Task Reflection']
            }]
        }, {
            name: 'Shared Leadership',
            color: '#6ca654',
            components: [{
                name: 'School Development',
                indicators: ['Progress Monitoring', 'Data-Driven Decision Making', 'Work Plan Development', 'Professional Trust (Leaders)']
            }, {
                name: 'Team Development',
                indicators: ['Work Plan Alignment', 'Collaborative Best Practices', 'Professional Trust (Teams)']
            }, {
                name: 'Individual Development',
                indicators: ['Professional Growth', 'Professional Trust (Individual)']
            }]
        }],
        clustersObserved: {
            learningTargets: false,
            standards: false,
            planning: false,
            instruction: false,
            tasks: false,
            interactionsAndBehaviors: false,
            crew: false,
            reflectivePractices: false,
            professionalCollaboration: false,
            useOfData: false,
            policiesAndProcedures: false,
            trust: false,
            growthPlans: false
        }
    };
};

export default TestData;
