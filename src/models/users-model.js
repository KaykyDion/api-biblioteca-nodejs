const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");

const users = [
  { id: "1", name: "Kayky", email: "kayky@gmail.com", password: "123456" },
  { id: "2", name: "John Doe", email: "johndoe@gmail.com", password: "0000" },
];

module.exports = {
  getallUsers: () => users,

  getUserById: (id) => users.find((user) => user.id === id),

  getUserByEmail: (email) => users.find((user) => user.email === email),

  createUser: (name, email, password) => {
    const newUser = {
      id: uuid(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    };

    users.push(newUser);
    return newUser;
  },
};
