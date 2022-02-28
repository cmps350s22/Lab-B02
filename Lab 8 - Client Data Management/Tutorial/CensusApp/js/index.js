import {CensusRepo} from './repository/census-repo.js'

const repo = new CensusRepo()

const countriesTable = document.querySelector('#countries')
const noOfRowsDD = document.querySelector('#noOfRows')
const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

window.onload = async ()=>{
    await showCensusList();
}

async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)
    const response = await repo.addCensus(census)
    await showCensusList()
}

async function showCensusList() {
    const noOfRows = parseInt(noOfRowsDD.value)
    const allCensus = await repo.getAllCensus(noOfRows)

    const censusHTMLRows = allCensus.map(census => censusToHTMLRow(census)).join(' ')

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
        <tr>
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit">Edit</i>
                <i class="fa fa-trash">Delete</i>
                
            </td>
        </tr>
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
