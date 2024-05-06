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
