import mysql from 'mysql';
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'we4gwe4g',
    database: 'explore',
    insecureAuth: true,
    port: 3306
})


connection.connect((err) => {
    if (err) {
        console.log('Database connection error :' + err)
        return
    }
    console.log('Connected to database')
})