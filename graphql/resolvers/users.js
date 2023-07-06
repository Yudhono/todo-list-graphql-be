const pool = require("../../db");

module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await pool.query("SELECT * FROM users");
        return users.rows;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async addUser(_, { name, email }) {
      try {
        const query = {
          text: "INSERT INTO users(id, name, email) VALUES(uuid_generate_v4(), $1, $2) RETURNING *",
          values: [name, email],
        };
        const user = await pool.query(query);
        return user.rows[0];
      } catch (error) {
        throw new Error(error);
      }
    },
    async editUser(_, { id, name, email }) {
      try {
        const query = {
          text: "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
          values: [name, email, id],
        };
        const user = await pool.query(query);
        return user.rows[0];
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteUser(_, { id }) {
      try {
        const query = {
          text: "DELETE FROM users WHERE id=$1",
          values: [id],
        };
        await pool.query(query);
        return "User deleted";
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
