import { Router } from "express";
import { ControllerPaciente } from "../controller/Paciente/ControllerPaciente.js";

export const pacienteRouter = Router();

pacienteRouter.get("/Paciente", ControllerPaciente.getTodosOsPacientes);

pacienteRouter.get("/Paciente/:id", ControllerPaciente.getPacientePorId);

pacienteRouter.post("/Paciente", ControllerPaciente.criarPaciente);

pacienteRouter.put("/Paciente/:id", ControllerPaciente.atualizarPaciente);

pacienteRouter.delete("/Paciente/:id", ControllerPaciente.deletarPaciente);
