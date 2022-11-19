/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir
atvaizduos visus automobilių gamintojus bei pagamintus modelius.
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';

const fetchEndpoint = async () => {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const cars = await response.json();
            displayCars(cars);
        }
    } catch (error) {
        console.error(error);
    }
};


const displayCars = (cars) => {
    const output = document.getElementById('output');
    cars.forEach(car => {
        const brand = document.createElement('h4');
        brand.innerText = car.brand;

        let list = document.createElement('ul');
        car.models.forEach(model => {
            const modelElement = document.createElement('li');
            modelElement.innerText = model;
            list.append(modelElement);
        });


        const card = document.createElement('div');
        card.append(brand, list);
        output.append(card);
    })
}




fetchEndpoint();
