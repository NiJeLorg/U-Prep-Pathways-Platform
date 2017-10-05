const TestData = ($firebaseArray) => {
    return {
        schools: ['UPSM ELEMENTARY', 'ELLEN THOMPSON ELEMENTARY', 'MARK MURRAY ELEMENTARY', 'UPA MIDDLE', 'UPSM MIDDLE', 'UPA HIGH', 'UPSM HIGH'],
        grades: ['Kindergarten', '1st grade', '2nd grade', '3rd grade', '4th grade', '5th grade'],
        teachers: ['Mr.Martin', 'Ms.Andrews', 'Ms.Ng', 'Mr.Schnider', 'Ms.Peterson', 'Mr.Underhill'],
        subjects: ['Math', 'Science', 'English', 'Gym', 'Art', 'Music'],
        observationKind: ['Crew', 'Lesson', 'Other type of observation'],
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
            growthPlans: false,
        }
    };
};


export default TestData;
