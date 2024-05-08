// Sample 
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Tom Brown', email: 'tom@example.com' }
];

// display users 
function displayUsers() {
  const tableBody = document.querySelector('#userTable tbody');
  tableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML =  '<td>' + user.id + '</td>' + '<td>' + user.name + '</td>' + '<td>' + user.email + '</td>' + '<td>' +
    '<button class="actionButton" onclick="editUser(' + user.id + ')">Edit</button>' +
    '<button class="actionButton" onclick="deleteUser(' + user.id + ')">Delete</button>' +
    '</td>';

    tableBody.appendChild(row);
  });
}

//delete a user
function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    displayUsers();
  }
}

// add a user
function addUser(name,email) {  
  // Validate the name
  const namePattern = /^[A-Za-z\s]+$/;
  if (!name || !namePattern.test(name)) {
    alert("Invalid name. Please enter a name with letters only.");
    return;
  }
  
  // Validate the email
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!email || !emailPattern.test(email)) {
    alert("Invalid email. Please enter a valid email address.");
    return;
  }
  
  // Add the user if validation passes
  const id = users.length + 1;
  const newUser = { id, name, email };
  users.push(newUser);
  displayUsers();
}


//edit a user
function editUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    const newName = prompt("Enter new name:", users[index].name);
    const newEmail = prompt("Enter new email:", users[index].email);
    
    // Validate the new name
    const namePattern = /^[A-Za-z\s]+$/;
    if (!newName || !namePattern.test(newName)) {
      alert("Invalid name. Please enter a name with letters only.");
      return;
    }
    
    // Validate the new email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!newEmail || !emailPattern.test(newEmail)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }
    
    // Update user details if validation passes
    users[index].name = newName;
    users[index].email = newEmail;
    displayUsers();
  }
}


//submission 
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (name && email) {
    addUser(name, email);
  } else {
    alert("name and email cannot be empty.");
  }
});

// Display initial users
displayUsers();
