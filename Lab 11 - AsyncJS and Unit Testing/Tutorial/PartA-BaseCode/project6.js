/*
1.In project6.js :  Rewrite the code you created in project4.js using Async/await.
 */
import fs from 'fs-extra'

async function getCourses() {
    const courses = await fs.readJson('data/course.json')
    const staffs = await fs.readJson('data/staff.json')
    const students = await fs.readJson('data/student.json')

    for (const course of courses) {
        course.students = students
            .filter(student => student.courseIds.includes(course.crn))
            .map(s => s.firstname)

        const {firstname, lastname} = staffs
            .find(staff => staff.staffNo == course.instructorId)
        course.instructor = `${firstname} ${lastname}`
    }

    return courses
}

getCourses().then(courses => console.log(courses))
