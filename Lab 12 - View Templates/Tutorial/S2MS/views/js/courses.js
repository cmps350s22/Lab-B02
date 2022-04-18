async function getCourses(programCode){
    const data = await fetch(`/api/courses/${programCode}`)
    const courses = await data.json()
    console.log(courses)
}
