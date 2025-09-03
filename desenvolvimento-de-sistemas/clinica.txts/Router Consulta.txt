import { Router } from "express";
import { ControllerConsulta } from "../controller/Consulta/ControllerConsulta.js";

export const consultaRouter = Router();

consultaRouter.get("/Consulta", ControllerConsulta.getTodasConsultas);

consultaRouter.get("/Consulta/:id", ControllerConsulta.getConsultaPorId);

consultaRouter.post("/Consulta", ControllerConsulta.criarConsulta);

consultaRouter.put("/Consulta/:id", ControllerConsulta.atualizarConsulta);

consultaRouter.delete("/Consulta/:id", ControllerConsulta.deletarConsulta);
