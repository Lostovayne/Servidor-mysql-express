import pool from "../db.js";

export const getAll = (req, res) => {
    res.render("index");
};

export const Create = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const response = await pool.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);

    res.status(201).json({
        message: "Usuario creado correctamente",
        data: response,
    });
};

export const Update = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const response = await pool.execute("UPDATE users SET email = ?, password = ? WHERE id = ?", [email, password, id]);
    pool.releaseConnection();
    res.status(200).json({
        message: "Usuario actualizado correctamente",
        data: response,
    });
};

export const Delete = async (req, res) => {
    const { id } = req.params;
    const response = await pool.execute("DELETE FROM users WHERE id = ?", [id]);

    res.status(200).json({
        message: "Usuario eliminado correctamente",
        data: response,
    });
};

export const All = async (req, res) => {
    const [response] = await pool.execute("SELECT * FROM users");
    res.json({
        data: response,
    });
};
