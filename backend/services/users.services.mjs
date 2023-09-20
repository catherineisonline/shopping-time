import sql from "../sql-config/sql.mjs";

export const getUsersService = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM shopping_time_users';
        sql.execute(query).then(result => resolve(result)).catch(err => reject(err));
    })
}

export const getSingleUserService = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM shopping_time_users WHERE id = ?';
        sql.execute(query, [id]).then(result => resolve(result)).catch(err => reject(err));
    })
}

export const updateUserService = (id, user) => {
    return new Promise((resolve, reject) => {
        const { email, password, fullname, address, number } = user;
        let query;
        let params;
        params = [email, password, fullname, address, number];
        query = 'UPDATE shopping_time_users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
        sql.execute(query, [...params, id])
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
}

export const deleteUserService = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM shopping_time_users WHERE id = ?';
        sql.execute(query, [id]).then(result => resolve(result)).catch(err => reject(err));
    })
}

export const createUserService = (user) => {
    return new Promise((resolve, reject) => {
        const { id, email, password, fullname, address, number
        } = user;
        let query;
        let params;

        if (address === undefined) {
            query = 'INSERT INTO shopping_time_users (id, email, password, fullname, number) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, number];
        }
        if (number === undefined) {
            query = 'INSERT INTO shopping_time_users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, address];
        }
        if (address === undefined && number === undefined) {
            query = 'INSERT INTO shopping_time_users (id, email, password, fullname) VALUES(?, ?, ?, ?)';
            params = [id, email, password, fullname,];
        }
        else {
            query = 'INSERT INTO shopping_time_users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)';
            params = [id, email, password, fullname, address];
        }
        sql.execute(query, [...params])
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}