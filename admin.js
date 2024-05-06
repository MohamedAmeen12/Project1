
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
