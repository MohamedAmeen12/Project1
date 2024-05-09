
function updateTable(brand) {
    const table = document.getElementById(brand + 'Cars').getElementsByTagName('table')[0];
    const tbody = table.getElementsByTagName('tbody')[0] || table.createTBody();

    
    tbody.innerHTML = '';

   
    carData[brand].forEach(car => {
        const row = tbody.insertRow();
        row.innerHTML = `<td>${car.name}</td><td>${car.model}</td><td>$${car.price}</td><td>${car.year}</td>
            <td><button onclick="editCar('${brand}', '${car.name}')">Edit</button>
                <button onclick="deleteCar('${brand}', '${car.name}')">Delete</button></td>`;
    });
}


function editCar(brand, name) {
    const car = carData[brand].find(car => car.name === name);
    if (car) {
        document.getElementById('brandSelect').value = brand;
        document.getElementById('carName').value = car.name;
        document.getElementById('carModel').value = car.model;
        document.getElementById('carPrice').value = car.price;
        document.getElementById('carYear').value = car.year;

       
        document.getElementById('carName').focus();
        document.getElementById('carForm').scrollIntoView({behavior: 'smooth'});
    }
}


function deleteCar(brand, name) {
    const index = carData[brand].findIndex(car => car.name === name);
    if (index > -1) {
        carData[brand].splice(index, 1);
    }
    updateTable(brand);
}



const carData = {
    'Porsche': [{name: 'Porsche 911', model: '911 Turbo', price: '190,000', year: '2022'}],
    'Honda': [{name: 'Honda Civic', model: 'Civic LX', price: '21,000', year: '2023'}],
    'MG': [{name: 'MG ZS', model: 'ZS EV', price: '28,000', year: '2022'}]
};



function submitCar() {
    const brand = document.getElementById('brandSelect').value;
    const name = document.getElementById('carName').value;
    const model = document.getElementById('carModel').value;
    const price = document.getElementById('carPrice').value;
    const year = document.getElementById('carYear').value;
    let valid = true;

    
    document.getElementById('nameError').textContent = '';
    document.getElementById('modelError').textContent = '';
    document.getElementById('priceError').textContent = '';
    document.getElementById('yearError').textContent = '';

    
    if (!name) {
        document.getElementById('nameError').textContent = 'Car name is required.';
        valid = false;
    }
    if (!model) {
        document.getElementById('modelError').textContent = 'Model is required.';
        valid = false;
    }
    if (!price) {
        document.getElementById('priceError').textContent = 'Price is required.';
        valid = false;
    }
    if (!year) {
        document.getElementById('yearError').textContent = 'Year is required.';
        valid = false;
    } else if (!/^\d{4}$/.test(year)) {
        document.getElementById('yearError').textContent = 'The year must be exactly four digits.';
        valid = false;
    }

    if (!valid) {
        return; 
    }

    
    const existingIndex = carData[brand].findIndex(car => car.name === name);
    if (existingIndex !== -1) {
        carData[brand][existingIndex] = { name, model, price, year };
    } else {
        carData[brand].push({ name, model, price, year });
    }

    
    document.getElementById('carForm').reset();
    updateTable(brand);
}

function scrollToForm() {
    document.getElementById('carForm').scrollIntoView({behavior: 'smooth'});
}



