// Sample
let users = [
  { id: 1, name: 'Abduallah', email: 'Abduallah@hotmail.com' },
  { id: 2, name: 'Khaled', email: 'Khaled@hotmail.com' },
  { id: 3, name: 'Kady', email: 'kady@hotmail.com' },
  { id: 4, name: 'Ameen', email: 'Ameen@hotmail.com' }
];

// Function to display users 
function displayUsers() {
  const tableBody = document.querySelector('#userTable tbody');
  tableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
   row.innerHTML = '<td>' + user.id + '</td><td>' + user.name + '</td><td>' + user.email + '</td><td>' +
    '<button class="actionButton" onclick="editUser(' + user.id + ')">Edit</button>' +
    '<button class="actionButton" onclick="deleteUser(' + user.id + ')">Delete</button>' +
  '</td>';
    tableBody.appendChild(row);
  });
}

// Function to delete a user
function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    displayUsers();
  }
}


// Function to add a user
function addUser() {
  const name = prompt("Enter user's name:");
  const email = prompt("Enter user's email:");
  const id = users.length + 1;
  const newUser = { id, name, email };
  users.push(newUser);
  displayUsers();
}

// Function to edit a user
function editUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const newName = prompt("Enter new name:", users[index].name);
    const newEmail = prompt("Enter new email:", users[index].email);
    users[index].name = newName;
    users[index].email = newEmail;
    displayUsers();
  }
}

// Display initial users
displayUsers();
