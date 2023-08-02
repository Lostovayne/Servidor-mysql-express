// invocar Router desde express
import { Router } from "express";
import { Create, Delete, Update, getAll, All } from "../controllers/controllers.controller.js";

//funciona igual que el app
const router = Router();

router.get("/", getAll);

router.get("/All", All);

//acciones
router.post("/create", Create);
router.put("/update/:id", Update);
router.delete("/delete/:id", Delete);

export default router;

// localhost:3000 => index.ejs   => formulario  => cuado apreto submit =>  ejecutar una accion  => POST => localhost:3000/create  => req.body  => const { email , password  } = req.body  =>  creo conexion a la bd  = > const response = await pool.execute("sentencia sql")  =>  tomo la respuesta   y la retorno en js json =>  res.json({ message: "Usuario creado correctamente", data: response})
