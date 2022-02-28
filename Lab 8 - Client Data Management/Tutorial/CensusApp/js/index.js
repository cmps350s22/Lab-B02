import {CensusRepo} from './repository/census-repo.js'
const repo = new CensusRepo()

const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)
    const response = await repo.addCensus(census)
    console.log(response)
}

function formToObject(form) {
    const formData = new FormData(form)
    console.log(formData)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}
