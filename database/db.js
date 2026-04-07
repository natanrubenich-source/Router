import pg from 'pg';
const {Pool} = pg;

const pool = new Pool ({
    host: 'localhost',
    port: 5433,
    user: 'natanRubenich',
    password: '123321',
    database: 'clinica'
});

export default pool;