const template = `
    <table class="table">
        <theah>
            <tr>
                <th>Program</th>
                <th>Code</th>
                <th>Name</th>
            </tr>
        </theah>
        <tbody>
            {{#each courses as |c|}}
                <tr>
                    <td>{{c.program}}</td>
                    <td>{{c.code}}</td>
                    <td>{{c.name}}</td>
                </tr>
            {{/each}}
        </tbody>
    </table>
`
async function getCourses(programCode){
    const data = await fetch(`/api/courses/${programCode}`)
    const courses = await data.json()
    const compiledTemplate = Handlebars.compile(template)
    const courseTableHTMLCode = compiledTemplate({courses})
    document.querySelector("#course-container").innerHTML = courseTableHTMLCode
}
