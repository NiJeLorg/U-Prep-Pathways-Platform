'use strict';
const TestData = () => {
    return {
        schools: ['UPSM ELEMENTARY', 'ELLEN THOMPSON ELEMENTARY', 'MARK MURRAY ELEMENTARY', 'UPA MIDDLE', 'UPSM MIDDLE', 'UPA HIGH', 'UPSM HIGH'],
        grades: ['Kindergarten', '1st grade', '2nd grade', '3rd grade', '4th grade', '5th grade'],
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
            color: '#e49043'
        }, {
            name: 'Engaging Instruction',
            color: '#48818d'
        }, {
            name: 'Rigorous Assessments',
            color: '#6751a4'
        }, {
            name: 'Shared Leadership',
            color: '#6ca654'
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
