var app_id = "d844456b080641219066aa386c5144f5"

document.addEventListener("DOMContentLoaded", () => setInterval(main, 3000))

function main () {
    let url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`
    fetch(url).then(response => response.json()).then(data => {
        let usd = Math.round((data.rates.KGS) * 100) / 100
        const elemUSD = document.getElementById("usd_value")
        elemUSD.innerText = usd

        let eur = Math.round((usd / data.rates.EUR) *100) / 100
        const elemEUR = document.getElementById("eur_value")
        elemEUR.innerText = eur

        let rub = Math.round((usd / data.rates.RUB) *100) / 100
        const elemRUB = document.getElementById("rub_value")
        elemRUB.innerText = rub
    })
}