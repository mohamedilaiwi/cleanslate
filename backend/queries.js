    /*
    * Code for the following information: 
    * REQ: ROUTE | OPERATION
    *   GET: /users | getUsers()
    *   GET: /users/:id | getUserByID();
    *   POST: /users | createUser()
    *   PUT: /users/:id | updateUser();
    *   DELETE: /users/:id | deleteUser();
    *
    *
    *
    *  When user fills out sign up form, React will make a POST request to /users
    */
    const Pool = require('pg').Pool;

    // Connect pool to postgresql database -> will swap to process.env in future
    const pool = new Pool({
        user: 'milaiwi',
        host: 'localhost',
        database: 'users',
        password: 'Aa421999765!',
        port: 5432,
    });


    const getUsers = (req, res) => {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) 
                throw error;
            else 
                res.status(200).json(results.rows);
        })
    };

    const getUserById = (req, res) => {
        const id = parseInt(req.params.id);
        pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
            if (error)
                throw error
            else
                res.sendStatus(200).json(results.rows);
        });
    };

    const createUser = (req, res) => {
        const {username, email, password } = req.body;

        pool.query('INSERT INTO VALUES (username, email, password) \
            VALUES ($1, $2, $3) RETURNING *', [username], [email], [password], (error, results) => {
                if (error)
                    throw error
                res.status(201).send(`User added with IDS: ${res.rows[0].id}`);
            });
    };

    const updateUser = (req, res) => {
        const id = parseInt(req.params.id);
        const { username, email, password } = req.body;

        pool.query(`UPDATE users SET username = $1, email = $2, password = $3
            WHERE id = $4`,
            [username], [email], [password], [id], (error, results) => {
                if (error) 
                    throw error;
                res.status(200).send(`Modified user with id: ${id}`);
            });
    };

    const deleteUser = (req, res) => {
        const id = parseInt(req.params.id);

        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error)
                throw error
            res.send(200).send(`Deleted user with id: ${id}`);
        });
    };

    module.exports = {
        getUsers,
        getUserById,
        createUser, 
        updateUser,
        deleteUser
    }

