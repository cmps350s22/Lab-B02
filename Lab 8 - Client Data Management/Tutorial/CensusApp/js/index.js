import {CensusRepo} from './repository/census-repo.js'

const repo = new CensusRepo()

const countriesTable = document.querySelector('#countries')
const noOfRowsDD = document.querySelector('#noOfRows')
const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)
    const response = await repo.addCensus(census)
    console.log(response)
}

async function showCensusList() {
    const noOfRows = parseInt(noOfRowsDD.value)
    const allCensus = await repo.getAllCensus(noOfRows)
    const censusHTMLRows = allCensus.map(census => censusToHTMLRow(census))

    countriesTable.innerHTML = `
        <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Action</th>
        </tr>
        ${censusHTMLRows} 
    `
}

function censusToHTMLRow(census){
    return `
        
    `
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
