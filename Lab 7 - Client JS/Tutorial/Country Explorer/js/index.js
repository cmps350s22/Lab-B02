const regionSearchBar = document.querySelector('#region')
const countryDropDown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'

function getCountries() {
    alert(`it is connected ${regionSearchBar.value}`)
}