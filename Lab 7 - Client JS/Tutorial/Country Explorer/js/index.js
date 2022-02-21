const regionSearchBar = document.querySelector('#region')
const countryDropDown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'

async function getCountries() {
    const url = `${regionBaseUrl}/${regionSearchBar.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const options = countries.map(country => convertCountryToOptions(country))
    countryDropDown.innerHTML = options.join(' ')
}

function convertCountryToOptions(country) {
    return `<option value="${country.name.common}">${country.name.common}</option>`
}


function handleCountryChange(country){
    alert(`${country}`)
}

