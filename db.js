import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "nemos5123",
    database: "plantilla2",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
