const regionSearchBar = document.querySelector('#region')
const countryDropDown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'

async function getCountries() {
    const url = `${regionBaseUrl}/${regionSearchBar.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const options = countries
        .map(country => convertCountryToOptions(country))
    countryDropDown.innerHTML = options.join(' ')
}

function convertCountryToOptions(country) {
    return `<option value="${country.name.common}">${country.name.common}</option>`
}

async function handleCountryChange() {
    const url = `${countryBaseUrl}/${countryDropDown.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const factsHTML = countries
        .map(country => convertCountryToFacts(country)).join(' ')
    factsArea.innerHTML = factsHTML
}

function convertCountryToFacts(country){
    return `
        <h1>${country.capital}</h1>
        ${Object.keys(country.currencies).map(key => country.currency[key]).join('')}
    `
}

Object.keys(countryDropDown).forEach(function)