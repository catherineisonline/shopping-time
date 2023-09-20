import sql from "../sql-config/sql.mjs";

export const getUsersService = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM shopping_time_users';
        sql.execute(query).then(result => resolve(result)).catch(err => reject(err));
    })
}