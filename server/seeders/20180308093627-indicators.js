'use strict';
const indicator_data = [{
    id: 1,
    component_id: '1',
    name: 'Grading',
    levels: {
        '1': 'Students’ grades accurately reflect their mastery of grade-level standards',
        '2': 'Students receive grades based on both their habits of work and mastery of standards.',
        '3': 'Students receive grades based on their habits of work, habits of mind, and mastery of standards. There is a clear process for determining a student’s grade in a given course.',
        '4': 'Grades reflect habits of work, habits of mind, and mastery of content. A clear, network-approved grading policy is in place and is being used across the entire school. The policy reflects a clear philosophy on grading.'
    }
}, {
    id: 2,
    component_id: '1',
    name: 'College-Going Culture',
    levels: {
        '1': 'School environment contains college materials. Students have an age-appropriate understanding of the concept and importance of college.',
        '2': 'School environment contains college materials. Students have an age-appropriate understanding of the concept and importance of college. Students at all grade levels are appropriately exposed to colleges. Staff communicate that all students are on a path to a four-year college/university.',
        '3': 'School staff clearly communicate that all students are on a path to a four year college. School environment contains college materials, providing exposure to a plethora of colleges and universities to students. Students at all grade levels are appropriately exposed to college. Grade-span appropriate reflection around academic performance and its implications happens inconsistently.',
        '4': 'Staff clearly communicate that all students are on a path to a four year college. School environment contains college materials, providing exposure to a plethora of colleges and universities to students. Students at all grade levels are appropriately exposed to college. Grade-span appropriate reflection around academic performance and its implications happens consistently. Students demonstrate an age-appropriate level of agency around school.'
    }
}, {
    id: 3,
    component_id: '1',
    name: 'High-Quality Work',
    levels: {
        '1': 'Students revise major assessments using teacher and/or peer feedback.',
        '2': 'Students use teacher and/or peer feedback to revise major assignments. Non-major assignments display attention to detail and format.',
        '3': 'Students create authentic work that displays a high level of craftsmanship. Students complete multiple drafts and use models of excellence to guide their work.',
        '4': 'Students create complex, authentic work that displays a high level of craftsmanship. Students complete multiple drafts and use models of excellence to guide their work. All submitted work reflects a high level of craftsmanship.'
    }
}, {
    id: 4,
    component_id: '1',
    name: 'Timeliness and Preparation',
    levels: {
        '1': 'Students arrive to class on time and transitioning from one activity to the next without delay',
        '2': 'Students arrive to class on time and meet deadlines for assignments. With reminders, students know and have the materials they need to be prepared for class.',
        '3': 'Students are in class on time and prepared for learning. Work is submitted in a timely manner. ',
        '4': 'Students arrive early and are prepared for learning at the start of class. Work is submitted in a timely manner.'
    }
}, {
    id: 5,
    component_id: '2',
    name: 'Citizenship',
    levels: {
        '1': 'A school code of conduct exists, and students abide by it with minimal redirection. ',
        '2': 'With guidance, students begin to demonstrate respect for all, integrity, and compassion. Students see how the code of conduct is a demonstration of these traits.',
        '3': 'Without prompting, students demonstrate respect for all, integrity, and compassion.',
        '4': 'Students demonstrate respect for all, integrity, and compassion. These are the pillars of the school community. Service and service learning are built into the culture of the school as a mean to better the community.'
    }
}, {
    id: 6,
    component_id: '2',
    name: 'Visible Environment',
    levels: {
        '1': 'The school and classrooms are clean and well maintained. U Prep’s core values are clearly posted throughout the school. ',
        '2': 'The school and classrooms are clean and well maintained. Student work is visible throughout the building. U Prep’s core values are clearly posted throughout the school, and they are consistently addressed during crew.',
        '3': 'The school and classrooms are clean and well maintained. High-quality student work is visible in classrooms and public spaces. U Prep’s core values are demonstrated in student and staff actions.',
        '4': 'The school and classrooms are clean and well maintained. They are rich with high-quality student work and materials to facilitate student learning. Students take responsibility for caring for their environment. U Prep’s core values are clearly visible both through signage and student and staff actions.'
    }
}, {
    id: 7,
    component_id: '2',
    name: 'Internalizing Routines and Procedures',
    levels: {
        '1': 'School has developed clear routines, procedures, staff and student expectations.',
        '2': 'Students and staff can explain the routines, procedures, and expectations. When prompted, staff and students can reflect on their behavior.',
        '3': 'Students and staff have internalized routines, procedures and expectations as ways of interacting inside the school. When prompted, staff and students can reflect and monitor their behavior, adjusting accordingly.',
        '4': 'Students and staff have internalized routines, procedures and expectations as ways of interacting with the world inside and outside of school. Staff and students routinely reflect, monitor and adjust on their own.'
    }
}, {
    id: 8,
    component_id: '2',
    name: 'Crew',
    levels: {
        '1': 'Crew meets consistently, although the structures and purpose of crew vary from crew to crew. ',
        '2': 'Crew meets consistently. A clear purpose for crew has been communicated and internalized by staff. ',
        '3': 'Crew meets consistently. Staff and students have internalized the purpose of crew. Staff and students receive support and training to develop themselves as crew leaders.',
        '4': 'Crew serves a clear purpose in the school and is used to foster relationships amongst crew members and leaders. Crew meets consistently and crew leaders receive training and support to be strong crew leaders. Crew leaders structure and plan crew to meet a set of identified goals.'
    }
}, {
    id: 9,
    component_id: '2',
    name: 'Leveraging Crew',
    levels: {
        '1': 'Staff understand the purpose and structures of crew',
        '2': 'Staff and students understand the purpose and structures of crew.',
        '3': 'Staff and students understand the purpose and structures of crew and can explicitly describe crew’s effects on student achievement.',
        '4': 'Staff and students leverage crew structures to drive student achievement.',
    }
}, {
    id: 10,
    component_id: '3',
    name: 'Self-Evaluation',
    levels: {
        '1': 'Students use self-evaluation to set character goals',
        '2': 'Students regularly use self-evaluation to set character goals and reflect on their progress. ',
        '3': 'Students regularly and accurately use self-evaluation to set character goals and reflect on their progress.',
        '4': 'Students regularly and accurately use self-evaluation to set goals, monitor their growth, and reflect on their character development. They can communicate with others about their progress',
    }
}, {
    id: 11,
    component_id: '3',
    name: 'Student-Led Conferences',
    levels: {
        '1': 'During a student-led conference, students present evidence of character growth they’ve collected over the course of the semester. ',
        '2': 'During a student-led conference, students present evidence of character and academic growth they’ve collected over the course of the semester.',
        '3': 'During a student-led conference, students present evidence of character and academic growth, and they refer to complex work to show their mastery',
        '4': 'During a student-led conference, students present evidence of character and academic growth, and they communicate the process they used to master long-term learning targets.',
    }
}, {
    id: 12,
    component_id: '3',
    name: 'Portfolio Passages',
    levels: {
        '1': 'Crew leaders facilitate the selection of portfolio pieces to present during portfolio passages.',
        '2': 'Crew leaders provide guidelines that students follow when selecting pieces to present during portfolio passages.',
        '3': 'Students select pieces and meet specific benchmarks that are determined by the crew leaders.',
        '4': 'Students internalize the process of portfolio passages and design a presentation in line with expectations.',
    }
}, {
    id: 13,
    component_id: '4',
    name: 'Interconnectedness of Standards',
    levels: {
        '1': 'Teachers understand the skills that are called for by their grade-level expectations or content standards.',
        '2': 'Teachers attempt to connect appropriate content with the skills required by the standards.',
        '3': 'Teachers connect the most appropriate content to standards-based instruction.',
        '4': 'Teachers can articulate the interconnectedness of standards/skills across multiple grade levels and connect the most appropriate content to standards-based instruction.',
    }
}, {
    id: 14,
    component_id: '5',
    name: 'Unit Planning',
    levels: {
        '1': 'Units of study are written in isolation',
        '2': 'Curricula are written to connect multiple units of study around a compelling topic. Portfolio pieces are identified as units are developed. ',
        '3': 'Curricula are written to connect multiple units of study into culminating tasks that highlight content from all units. Tasks become portfolio pieces',
        '4': 'Curricula are written to connect multiple units of study into complex culminating tasks that demonstrate student expertise. Tasks become portfolio pieces.',
    }
}, {
    id: 15,
    component_id: '5',
    name: 'Learning Targets',
    levels: {
        '1': 'Teachers plan lessons with quality short-term learning targets',
        '2': 'Teachers plan lessons that connect short-term learning targets from one lesson to the next.',
        '3': 'Teachers plan lessons that connect short-term learning targets from one day to the next and that connect the daily learning target to the long-term learning targets in the unit of study.',
    }
}, {
    id: 16,
    component_id: '5',
    name: 'Lesson Design',
    levels: {
        '1': 'Teachers use the Workshop 1.0 and 2.0 lesson designs.',
        '2': 'Teachers use a variety of lesson designs that may meet the specified outcomes,',
        '3': 'Teachers employ the appropriate lesson design to meet the specified outcomes.',
        '4': 'Teachers employ the appropriate lesson design to meet the specified outcomes and create exemplars to know when students have produced masterful work.',
    }
}, {
    id: 17,
    component_id: '5',
    name: 'Use of Protocols',
    levels: {
        '1': 'Teachers use protocols without intentionality. ',
        '2': 'Teachers select/employ the appropriate protocols to engage students in the learning.',
        '3': 'Teachers select/employ the appropriate protocols and intentionally plan components of the protocol to step into a facilitator’s role at times, but miss some key opportunities.',
        '4': 'Teachers select/employ the appropriate protocols to transform learning experiences to ones in which the teacher serves as a facilitator (at strategic moments) while engaging students in rich, substantive learning.',
    }
}, {
    id: 18,
    component_id: '5',
    name: 'Reflection',
    levels: {
        '1': 'Teachers use a reflection process after a performance task to improve students’ products in the future.',
        '2': 'Teachers use a reflection process to improve their practice, students’ products, and the student experience around the performance tasks.',
        '3': 'Teachers use a structured reflection process to improve their practice, the students’ products, and the student experience around the performance task.',
        '4': 'Teachers use a structured reflection process to improve their practice, the students’ products, and the student experience around performance tasks. Reflection leads teachers to institutionalize best practices and identify/resolve challenges.',
    }
}, {
    id: 19,
    component_id: '6',
    name: 'Task Selection',
    levels: {
        '1': 'Teachers select tasks to address authentic and challenging topics, and students demonstrate interest in completing the task.',
        '2': 'Students, when presented with authentic and challenging topics, provide input about the task to complete. Teachers select tasks based on student input.',
        '3': 'Students, when presented with authentic and challenging topics, select a task from a set of choices to convey their knowledge to an appropriate audience.',
        '4': 'Students, when presented with authentic and challenging topics, determine the best task to convey their knowledge to an appropriate audience.',
    }
}, {
    id: 20,
    component_id: '7',
    name: 'Leveraging Learning Targets',
    levels: {
        '1': 'Teachers unpack short-term learning targets as a means to help students understand the day’s learning goals',
        '2': 'Teachers unpack short-term learning targets as a means to help students understand the day’s learning and use activities and tasks throughout the lesson to faciltate mastery of the learning targets. Teachers connect learning targets from previous days to the current learning target in a way that allows students to deepen their understanding of previously learned content/skills.',
        '3': 'Teachers use short-term and long-term learning targets to frame daily learning and connect information across multiple lessons to build toward mastery of standards. Teachers use tasks throughout the lesson to faciliate mastery of the learning targets. ',
        '4': 'Teachers use short-term and long-term learning targets to frame daily learning and connect information across multiple lessons to build toward mastery of standards. Teachers uses tasks throughout the lesson to faciliate mastery of the learning targets. They use their knowledge of content, standards, and students’ interests to compel students to want to learn more about the topic.',
    }
}, {
    id: 21,
    component_id: '7',
    name: 'Teacher as Facilitator',
    levels: {
        '1': 'Teachers facilitate discussions using questions that require students to demonstrate conceptual understanding.',
        '2': 'Teachers facilitate discussions using questions that require students to justify their positions.',
        '3': 'Teachers facilitate effective discussions that include multiple perspectives and/or pathways and push students towardmastery.',
        '4': 'Teachers facilitate effective discussions that include multiple perspectives and/or pathways and reveal student mastery',
    }
}, {
    id: 22,
    component_id: '7',
    name: 'Peer Critique and Critical Thinking',
    levels: {
        '1': 'Teachers model the skills and practices they would like to see demonstrated when analyzing and critiquing work.',
        '2': 'Teachers develop skills and practices amongst students so that they can critique the work of their peers.',
        '3': 'Teachers develop skills and practices amongst students so that they can think critically and critique the work of their peers.',
        '4': 'Teachers develop skills and practices amongst students so that they can think critically, analyze their work and critique the work of their peers.',
    }
}, {
    id: 23,
    component_id: '8',
    levels: {
        '1': 'Teachers recognize that lesson modifications were needed but were unclear how to implement strategies in the moment.',
        '2': 'Teachers attempt to modify instructional strategies in the moment.',
        '3': 'Teachers modify instructional strategies in the moment to address student needs.',
        '4': 'Teachers modify instructional strategies in the moment to address student needs while maintaining a consistent learning experience.',
    },
    name: 'Modification in the Moment'
}, {
    id: 24,
    component_id: '8',
    levels: {
        '1': 'Teachers employ the best instructional strategies to meet the needs of most students.',
        '2': 'Teachers differentiate instruction to meet the needs of students within individual lessons. Differentiation doesn’t lead toward mastery of long-term learning targets',
        '3': 'Teachers frequently differentiate instruction for students who are working toward the same long-term learning target, providing extra support for struggling students or more challenging tasks for proficient students.',
        '4': 'Teachers frequently differentiate instruction for students who are working toward the same long-term learning target, providing extra support for struggling students and more challenging tasks for proficient students.',
    },
    name: 'Differentiation'
}, {
    id: 25,
    component_id: '9',
    levels: {
        '1': 'When asked directly, students respond to teachers’ questions. ',
        '2': 'Students use scripted question stems or discussion prompts to ask questions of texts and/or each other.',
        '3': 'Students independently ask questions of texts and/or each other and generate high-quality oral responses',
        '4': 'Students independently ask questions of texts and/or each other and generate high-quality responses orally and in writing.',
    },
    name: 'Asking Questions'
}, {
    id: 26,
    component_id: '9',
    name: 'Perseverance',
    levels: {
        '1': 'Students rely on support to identify and persist through challenging learning experiences.',
        '2': 'Students independently identify challenges that prevent them from learning and rely on teacher assistance to work through those challenges.',
        '3': 'Students independently identify challenges that prevent them from learning and persist through them with minimal guidance.',
        '4': 'Students independently identify challenges that prevent them from learning, persist through them and advocate for their needs.',
    }
}, {
    id: 27,
    component_id: '10',
    name: 'Formative Assessments',
    levels: {
        '1': 'Teachers use 1-2 types of formative assessment within a lesson.',
        '2': 'Teachers use 1-2 types of formative assessment to monitor student progress toward mastery of standards and adjust plans accordingly. ',
        '3': 'Teachers regularly use a variety of formative assessments during the lesson to monitor student progress toward mastery of standards and adjust plans accordingly.',
        '4': 'Teachers regularly use a variety of formative assessments throughout the lesson to monitor student progress toward mastery of standards and adjust plans accordingly.',
    }
}, {
    id: 28,
    component_id: '10',
    name: 'Summative Assessments',
    levels: {
        '1': 'Teachers analyze summative assessment results to identify levels of mastery and gaps in learning.',
        '2': 'Teachers analyze summative assessment results to determine the level of mastery, identify gaps in learning, and develop short-term reteaching plans.',
        '3': 'Teachers analyze results from multiple summative assessments to determine students’ level of mastery and identify gaps in learning. When developing short-term reteaching plans, teachers identify the impact of those plans on long-term planning.',
        '4': 'Teachers analyze results from multiple summative assessments to determine students’ level of mastery and identify gaps in learning. When developing short-term reteaching plans, teachers also leverage long-term plans for closing gaps.',
    }
}, {
    id: 29,
    component_id: '10',
    name: 'Assessment Design',
    levels: {
        '1': 'Teachers design and use 1-2 formats of assessment to meaure mastery of either content or standards.',
        '2': 'Teachers use/design 1-2 formats of assessment to measure mastery of standards and content.',
        '3': 'Teachers design assessments using a variety of formats to measure the mastery of standards and content.',
        '4': 'Teachers design assessments using the format that best measures the mastery of standards and content.',
    }
}, {
    id: 30,
    component_id: '10',
    name: 'Tasks',
    levels: {
        '1': 'Tasks are connected to the standards. They require students to engage with appropriate grade level materials and construct a physical product.',
        '2': 'Standards-based tasks require students to analyze information presented in the lesson and apply their learning. Students engage with appropriate grade-level materials. Tasks are designed to demonstrate mastery of the learning targets.',
        '3': 'Authentic, standards-based tasks require students to analyze new information from the lesson and incorporate the previous learning. Students engage with appropriate grade-level materials. Tasks are designed to demonstrate mastery of the learning targets.',
        '4': 'Tasks lead students to constructing meaning of the major concepts found in the lesson’s targeted standard(s). Ideas build from one task to the next. Tasks are designed to lead to mastery of the learning targets.',
    }
}, {
    id: 31,
    component_id: '11',
    name: 'Feedback',
    levels: {
        '1': 'Teachers provide prescriptive, actionable feedback to students.',
        '2': 'Teachers provide prescriptive, actionable feedback in a regular and timely fashion.',
        '3': 'Teachers provide regular and timely prescriptive feedback to students to show students where they are on the trajectory of mastery.',
        '4': 'Teachers provide probing and descriptive feedback to help students discover their own mistakes and progress toward mastery.',
    }
}, {
    id: 32,
    component_id: '12',
    name: 'Learning Target Reflection',
    levels: {
        '1': 'Students reflect on mastery of the learning targets when prompted by the teacher. ',
        '2': 'Students self-assess progress toward short-term learning targets and articulate what they need to work on to master the targets',
        '3': 'Students self-assess progress toward short and long-term learning targets, articulate what they need to work on to master the targets, and make revisions as necessary.',
        '4': 'Students self-assess progress toward short and long-term learning targets, articulate what they need to work on to master the targets, set goals accordingly, and demonstrate self-motivation in making the necessary revisions.',
    }
}, {
    id: 33,
    component_id: '12',
    name: 'Task Reflection',
    levels: {
        '1': 'Upon completion of a task, students reflect on the quality of the finalproduct.',
        '2': '',
        '3': 'Upon completion of a task, students reflect on the quality of the finalproduct as well as the process they used to complete their work.',
        '4': '',
    }
}, {
    id: 34,
    component_id: '13',
    name: 'Progress Monitoring',
    levels: {
        '1': 'The administrative team spearheads the development of the work plan and reflects on progress on a quarterly basis.',
        '2': 'The leadership team spearheads the development of the work plan and uses some structures and protocols to get feedback from staff on a quarterly basis.',
        '3': 'The leadership team spearheads the development of the work plan and uses varied structures and protocols to engage staff on a monthly basis. The leadership team makes decisions based on feedback.',
        '4': 'The leadership team spearheads the development of the work plan. When developing and implementing the plan, the team uses a variety of structures and protocols to maintain two-way communication between themselves and the whole staff to monitor progress and solidify action steps. ',
    }
}, {
    id: 35,
    component_id: '13',
    name: 'Data-Driven Decision Making',
    levels: {
        '1': 'Leaders collect 1-2 sources of data for culture, instruction, and leadership actions to make decisions.',
        '2': 'Leaders analyze information from 1-2 sources of data for culture, instruction, and leadership actions to make decisions.',
        '3': 'Leaders analyze information from multiple sources of data for culture, instruction, and leadership actions to make decisions.',
        '4': 'Leaders communicate the rationale for decisions based on analysis of multiple sources of data for culture, instruction, and leadership actions.',
    }
}, {
    id: 36,
    component_id: '13',
    name: 'Work Plan Development',
    levels: {
        '1': 'Schools develop a workplan and a PD plan.',
        '2': 'Schools develop comprehensive and coherent work plans.',
        '3': 'Comprehensive and coherent work plans push the school toward demonstrating highly implemented qualities of the Five Elements.',
        '4': 'Comprehensive and coherent work plans align to network priorities and push the school toward demonstrating highly implemented qualities of the Five Elements.',
    }
}, {
    id: 37,
    component_id: '13',
    name: 'Professional Trust (Leaders)',
    levels: {
        '1': 'Leaders attempt to develop professional trust.',
        '2': 'Leaders demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Leaders demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Leaders demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    }
}, {
    id: 38,
    component_id: '14',
    name: 'Work Plan Alignment',
    levels: {
        '1': 'Teams use meeting structures to accomplish goals.',
        '2': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and follow a structure for their meetings to accomplish goals.',
        '3': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and use efficient meeting structures to accomplish goals.',
        '4': 'Teams demonstrate a shared understanding of how their work aligns to the work plan and use efficient meeting structures that ensure equity of voice and accomplish goals.',
    }
}, {
    id: 39,
    component_id: '14',
    name: 'Collaborative Best Practices',
    levels: {
        '1': 'Teachers collaborate to discuss common challenges.',
        '2': 'Teams collaborate to observe each others’ practice and provide feedback around common challenges.',
        '3': 'Teams collaborate to observe each others’ practice, provide feedback to one another, and develop solutions to common challenges.',
        '4': 'Teams collaborate to observe each others’ practice, provide feedback, and develop evidence-based solutions to common challenges.',
    }
}, {
    id: 40,
    component_id: '14',
    name: 'Professional Trust (Teams)',
    levels: {
        '1': 'Teams attempt to developprofessional trust.',
        '2': 'Teams demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Teams demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Teams demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    }
}, {
    id: 41,
    component_id: '15',
    name: 'Professional Growth',
    levels: {
        '1': 'Professional development is addressed primarily through whole-staff workshops that focus on topics relevant to the majority of staff members.',
        '2': 'Individualized professional development structures are used to drive professional growth.',
        '3': 'Individualized professional development structures are used to drive professional growth aligned to the Charlotte Danielson rubric.',
        '4': 'Individualized professional development structures are used to drive professional growth aligned to the Charlotte Danielson rubric. Teachers and leaders track individual progress.',
    }
}, {
    id: 42,
    component_id: '15',
    name: 'Professional Trust (Individual)',
    levels: {
        '1': 'Individuals attempt to develop professional trust.',
        '2': 'Individuals demonstrate and develop professional trust through two of the following: consistency, transparency, follow-through, communicating intent',
        '3': 'Individuals demonstrate and develop professional trust through three of the following: consistency, transparency, follow-through, communicating intent',
        '4': 'Individuals demonstrate and develop professional trust through all of the following: consistency, transparency, follow-through, communicating intent',
    }
}, ];

module.exports = {
  up: (queryInterface, Sequelize) => {
      const indicators = indicator_data.map((indicator)=>{
         return {
             id: indicator.id,
             name: indicator.name,
             component_id: indicator.component_id,
             created_at: new Date(),
             updated_at: new Date()
         }
      });
      return queryInterface.bulkInsert('indicators', indicators);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('indicators', null, {});
  }
};
