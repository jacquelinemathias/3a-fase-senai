import { Router } from "express";
import { ControllerProntuario } from "../controller/Prontuário/ControllerProntuario.js";
export const prontuarioRouter = Router();

prontuarioRouter.get("/Prontuário", ControllerProntuario.getTodosOsProntuarios);

prontuarioRouter.get("/Prontuário/:id", ControllerProntuario.getProntuarioPorId);

prontuarioRouter.post("/Prontuário", ControllerProntuario.criarProntuario);

prontuarioRouter.put("/Prontuário/:id", ControllerProntuario.atualizarProntuario);

prontuarioRouter.delete("/Prontuário/:id", ControllerProntuario.deletarProntuario);
