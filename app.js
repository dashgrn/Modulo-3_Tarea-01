//selectors from the DOM
const amount = document.getElementById('amount_input');
const currencyTypeFrom = document.getElementById('currencyTypeFrom');
const currencyValFrom = document.getElementById('currencyValFrom');
const currencyTypeTo = document.getElementById('currencyTypeTo');
const convertion = document.getElementById('convRender');
const btn = document.getElementById('sbmt');
const currencyCodeText = document.getElementById('code');
const selectFrom = document.getElementById('currencyTypeFrom');
const selectTo = document.getElementById('currencyTypeTo');
const docFragmentFrom = document.createDocumentFragment();
const docFragmentTo = document.createDocumentFragment();

//disable default form submit behavior
const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
})

const currencyOptionFrom = ['USD', 'MXN', 'COP', 'EUR', 'GBP'];
const currencyOptionTo = ['COP', 'MXN', 'USD', 'EUR', 'GBP'];

//populating the selects with the array values
currencyOptionFrom.forEach(function (curr) {
    let createOption = document.createElement('option');
    createOption.textContent = curr;
    createOption.setAttribute = ("value", curr);
    docFragmentFrom.appendChild(createOption);
})
selectFrom.appendChild(docFragmentFrom);

currencyOptionTo.forEach(function (curr) {
    let createOption = document.createElement('option');
    createOption.textContent = curr;
    createOption.setAttribute = ("value", curr);
    docFragmentTo.appendChild(createOption);
})
selectTo.appendChild(docFragmentTo);

// providing exchange rates 22/08/21
let usd = [{ name: "USD", value: 1 }, { name: "MXN", value: 20.36 }, { name: "COP", value: 3865 }, { name: "EUR", value: 0.85 }, { name: "GBP", value: 0.73 }];
let mxn = [{ name: "USD", value: 0.49 }, { name: "MXN", value: 1 }, { name: "COP", value: 189.99 }, { name: "EUR", value: 0.42 }, { name: "GBP", value: 0.36 }];
let cop = [{ name: "USD", value: 0.00026 }, { name: "MXN", value: 0.0053 }, { name: "COP", value: 1 }, { name: "EUR", value: 0.00022 }, { name: "GBP", value: 0.00019 }];
let eur = [{ name: "USD", value: 1.17 }, { name: "MXN", value: 23.81 }, { name: "COP", value: 4520 }, { name: "EUR", value: 1 }, { name: "GBP", value: 0.86 }];
let gbp = [{ name: "USD", value: 1.36 }, { name: "MXN", value: 27.7 }, { name: "COP", value: 5265 }, { name: "EUR", value: 1.16 }, { name: "GBP", value: 1 }];




function calc() {
    //getting currency values FROM - TO
    const currSelectorFrom = currencyTypeFrom.value;
    const currSelectorTo = currencyTypeTo.value;
    // checking for input numbers only
    if (isNaN(amount.value)) {
        convertion.innerHTML = (`<i><strong> ${amount.value}</strong></i> no es un valor correcto, sólo se aceptan números`);
    } else {
        // checking for inputs greater than 0
        if (amount.value <= 0) {
            convertion.innerText = 'El valor a convertir debe ser mayor a cero (0).'
        } else {
            //checking if currencyFrom and currencyTo are the same or not
            if (currSelectorFrom === currSelectorTo) {
                convertion.innerText = 'Las divisas son la misma, seleccione un origen o destino diferente.'
            } else {
                //convertion formula and rendering
                if (currSelectorFrom == 'USD') {
                    convertion.innerText = ` ${((usd.find(curr => curr.name === currSelectorTo).value) * amount.value).toFixed(2)} `;
                    currencyCodeText.innerText = ` ${currencyTypeTo.value}`;
                } else if (currSelectorFrom == 'MXN') {
                    convertion.innerText = ((mxn.find(curr => curr.name === currSelectorTo).value) * amount.value).toFixed(2);
                    currencyCodeText.innerText = ` ${currencyTypeTo.value}`;
                } else if (currSelectorFrom == 'COP') {
                    convertion.innerText = ((cop.find(curr => curr.name === currSelectorTo).value) * amount.value).toFixed(2);
                    currencyCodeText.innerText = ` ${currencyTypeTo.value}`;
                } else if (currSelectorFrom == 'EUR') {
                    convertion.innerText = ((eur.find(curr => curr.name === currSelectorTo).value) * amount.value).toFixed(2);
                    currencyCodeText.innerText = ` ${currencyTypeTo.value}`;
                } else if (currSelectorFrom == 'GBP') {
                    convertion.innerText = ((gbp.find(curr => curr.name === currSelectorTo).value) * amount.value).toFixed(2);
                    currencyCodeText.innerText = ` ${currencyTypeTo.value}`;
                }

            }
        }
    }
}


btn.addEventListener('click', function () {
    //cleaning the currency code value before rendering again (just in case there are not valid numbers in input)
    currencyCodeText.innerHTML = '';
    calc();
});

// Realizado por Jose Fernández