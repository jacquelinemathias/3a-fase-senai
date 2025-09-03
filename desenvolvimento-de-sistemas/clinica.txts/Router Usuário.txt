import { Router } from "express";
import { usuarioController } from "../controller/Usuario/UsuarioController.js";
export const usuarioRouter = Router()

usuarioRouter.get('/usuarios', usuarioController.getTodosOsUsuarios);

usuarioRouter.get("/usuarios/:id", usuarioController.getUsuarioPorId)

usuarioRouter.post("/usuarios", usuarioController.criarUsuario)

usuarioRouter.put("/usuarios/:id", usuarioController.atualizarUsuario)

usuarioRouter.delete("/usuarios/:id", usuarioController.deletarUsuario)