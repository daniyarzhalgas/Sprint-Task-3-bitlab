function myFunction(){
    const value = document.querySelector("#currency").value;
    const volute = document.querySelector("#volute").value;
    const buy = document.querySelector("#buy-or-sell").value === 'buy';

    if(buy){
        // buy
        if (volute === 'KZT') {
            document.querySelector("#kzt-input").value = '---';
            document.querySelector("#usd-input").value = (value / 429).toFixed(2); // KZT → USD
            document.querySelector("#eur-input").value = (value / 507).toFixed(2); // KZT → EUR
        } else if (volute === 'USD') {
            document.querySelector("#usd-input").value = '---';
            document.querySelector("#kzt-input").value = (value * 429).toFixed(2); // USD → KZT
            document.querySelector("#eur-input").value = (value * (429 / 507)).toFixed(2); // USD → EUR
        } else if (volute === 'EUR') {
            document.querySelector("#eur-input").value = '---';
            document.querySelector("#usd-input").value = (value * (507 / 429)).toFixed(2); // EUR → USD
            document.querySelector("#kzt-input").value = (value * 507).toFixed(2); // EUR → KZT
        }
    }else{
        // selling
        if (volute === 'KZT') {
            document.querySelector("#kzt-input").value = '---';
            document.querySelector("#usd-input").value = (value / 431).toFixed(2); // KZT → USD
            document.querySelector("#eur-input").value = (value / 509).toFixed(2); // KZT → EUR
        } else if (volute === 'USD') {
            document.querySelector("#usd-input").value = '---';
            document.querySelector("#kzt-input").value = (value * 431).toFixed(2); // USD → KZT
            document.querySelector("#eur-input").value = (value * (431 / 509)).toFixed(2); // USD → EUR
        } else if (volute === 'EUR') {
            document.querySelector("#eur-input").value = '---';
            document.querySelector("#usd-input").value = (value * (509 / 431)).toFixed(2); // EUR → USD
            document.querySelector("#kzt-input").value = (value * 509).toFixed(2); // EUR → KZT
        }
    }
} 