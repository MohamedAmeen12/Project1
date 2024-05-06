let tableCounter = 1;

function addNewTable() {
    const tableName = prompt("Enter the table name:");
    if (tableName) {
        const productName = prompt("Enter the product name:");
        const productPrice = prompt("Enter the product price:");
        if (productName && productPrice) {
            createTableWithProducts(tableName, [{ name: productName, price: productPrice }]);
        }
    }
}

function addProduct(tableId) {
    const table = document.getElementById(tableId);
    const productName = prompt("Enter the product name:");
    const productPrice = prompt("Enter the product price:");
    if (productName && productPrice) {
        const tbody = table.querySelector("tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>$${productPrice}</td>
            <td>
                <a href="#" class="edit-button" onclick="editProduct(this)">Edit</a>
                <a href="#" class="delete-button" onclick="deleteProduct(this)">Delete</a>
            </td>
        `;
        tbody.appendChild(newRow);
    }
}

function editProduct(element) {
    const newName = prompt("Enter the new product name:");
    const newPrice = prompt("Enter the new product price:");
    if (newName && newPrice) {
        const row = element.parentNode.parentNode;
        row.cells[0].textContent = newName;
        row.cells[1].textContent = "$" + newPrice;
    }
}

function deleteProduct(element) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (confirmation) {
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

function deleteTable(tableId) {
    const confirmation = confirm("Are you sure you want to delete this table?");
    if (confirmation) {
        const table = document.getElementById(tableId);
        table.parentNode.removeChild(table);
        
        // Remove the corresponding buttons
        const addButton = document.getElementById(add-button-${tableId});
        const deleteButton = document.getElementById(delete-button-${tableId});
        if (addButton) {
            addButton.parentNode.removeChild(addButton);
        }
        if (deleteButton) {
            deleteButton.parentNode.removeChild(deleteButton);
        }
    }
}
function createTableWithProducts(tableName, products) {
    const container = document.getElementById("tables-container");
    const tableId = `table${tableCounter}`;
    const table = document.createElement("table");
    table.id = tableId;
    table.innerHTML = `
        <caption>${tableName}</caption>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${products.map(product => `
                <tr>
                    <td>${product.name}</td>
                    <td>$${product.price}</td>
                    <td>
                        <a href="#" class="edit-button" onclick="editProduct(this)">Edit</a>
                        <a href="#" class="delete-button" onclick="deleteProduct(this)">Delete</a>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    const addButton = document.createElement("button");
    addButton.textContent = "Add Product";
    addButton.id = `add-button-${tableId}`;
    addButton.onclick = function() {
        addProduct(tableId);
    };
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Table";
    deleteButton.id = `delete-button-${tableId}`;
    deleteButton.onclick = function() {
        deleteTable(tableId);
    };
    container.appendChild(table);
    container.appendChild(addButton);
    container.appendChild(deleteButton);
    tableCounter++;
}
    const addButton = document.createElement("button");
    addButton.textContent = "Add Product";
    addButton.onclick = function() {
        addProduct(tableId);
    };
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Table";
    deleteButton.onclick = function() {
        deleteTable(tableId);
    };
    container.appendChild(table);
    container.appendChild(addButton);
    container.appendChild(deleteButton);
    tableCounter++;

    window.onload = function() {
        createTableWithProducts("Porsche", [
            { name: "Porsche 911 GT3", price: "250,000" },
            { name: "Porsche 992 Turbo S", price: "259,855" },
            { name: "Porsche Carrera GT", price: "600,000" },
            { name: "Porsche Cayenne", price: "80,000" }
        ]);
        
        createTableWithProducts("Honda", [
            { name: "Civic", price: "36,786" },
            { name: "Accord", price: "48,795" },
            { name: "Honda C-rv", price: "33,350" },
            { name: "City", price: "22,330" }
        ]);
    
        createTableWithProducts("MG", [
            { name: "MG5", price: "30,995" },
            { name: "MG6", price: "34,283" },
            { name: "MG GT", price: "32,350" },
            { name: "MG HS", price: "27,000" }
        ]);
    };
