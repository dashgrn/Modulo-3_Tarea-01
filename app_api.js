//selectors from the DOM
const amount = document.getElementById('amount_input');
const currencyTypeFrom = document.getElementById('currencyTypeFrom');
const currencyValFrom = document.getElementById('currencyValFrom');
const currencyTypeTo = document.getElementById('currencyTypeTo');
const convertion = document.getElementById('convRender');
const btn = document.getElementById('sbmt');
const codeText = document.getElementById('code');

//disable default behavior
const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
})

//getting currency values FROM - TO
function calc() {
    const currSelectorFrom = currencyTypeFrom.value;
    const currSelectorTo = currencyTypeTo.value;

    //using fetch to get the actual rates
    fetch(`https://api.exchangerate-api.com/v4/latest/${currSelectorFrom}`)
        .then((res) => res.json())
        .then((data) => {
            //loggin the data response
            console.log(data.rates);
            const rates = data.rates[currSelectorTo];
            convertion.innerText = (currencyValFrom.value * rates);
            codeText.innerHTML = `${currencyTypeTo.value}`;
        });
}

btn.addEventListener('click', function (){
    calc();
})