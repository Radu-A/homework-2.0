const usersQueries = {
  getAllUsers: `SELECT * FROM users`,
  getUserById: `SELECT * FROM users WHERE user_id = $1`,
  createUser: `
    INSERT INTO users (
        user_id, 
        email,
        photo,
        firstname, 
        lastname,
        bootcamp,
        curse,
        github
    )
    VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8
    )`,
  updateUser: `
    UPDATE users
    SET email = $2,
        photo = $3,
        firstname = $4, 
        lastname = $5,
        bootcamp = $6,
        curse = $7,
        github = $8
    WHERE user_id = $1`,
  deleteUser: `
    DELETE FROM users
    WHERE user_id = $1`,
};

module.exports = usersQueries;
