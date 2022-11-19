/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */


document.getElementById("submit-btn").addEventListener("click", clickCall);




function convert() {
    const kg = document.getElementById("search").value;
    const lbs = Math.round(kg * 2.2046 * 100) / 100; //Round to two decimal places
    const g = kg / 0.0010000
    const oz = Math.round(kg * 35.274 * 100) / 100;
    return '<p>' + kg + 'kg </p>' + '<p>' + lbs + ' lb </p > ' + '<p>' + g + ' g </p > ' + '<p>' + oz + ' oz</p > ';
}

function clickCall(event) {
    event.preventDefault();
    const output = document.getElementById("output");
    output.classList.add("headline");
    const a = document.getElementById("search").value;
    output.textContent = a;
    output.innerHTML = convert();

}
