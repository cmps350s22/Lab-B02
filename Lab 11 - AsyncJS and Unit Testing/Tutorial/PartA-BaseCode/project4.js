/*
1.Rewrite the you created in Part-2 using promises.
*/

import fs from 'fs-extra';

fs.readJson('data/course.json')
    .then(courses => {
        return fs.readJson('data/staff.json')
            .then(staffs => {
                for (const course of courses) {
                    const {firstname, lastname} = staffs
                        .find(staff => staff.staffNo == course.instructorId)
                    course.instructor = `${firstname} ${lastname}`
                }
                return courses
            })
    })
    .then(coursesWithStaffNames => {
        return fs.readJson('data/student.json')
            .then(students => {
                for (const course of coursesWithStaffNames) {
                    course.students = students
                        .filter(student => student.courseIds.includes(course.crn))
                        .map(s => s.firstname)
                }
                return coursesWithStaffNames
            })
    })
    .then(coursesWithStaffNamesAndStudentNames => {
        console.log(coursesWithStaffNamesAndStudentNames)
    }).catch(err => console.error(err))



