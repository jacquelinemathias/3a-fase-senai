import { Router } from "express";
import { ControllerExame } from "../controller/Exame/ControllerExame.js";

export const exameRouter = Router();

exameRouter.get("/Exames", ControllerExame.getTodosOsExames);

exameRouter.get("/Exames/:id", ControllerExame.getExamePorId);

exameRouter.post("/Exames", ControllerExame.criarExame);

exameRouter.put("/Exames/:id", ControllerExame.atualizarExame);

exameRouter.delete("/Exames/:id", ControllerExame.deletarExame);
