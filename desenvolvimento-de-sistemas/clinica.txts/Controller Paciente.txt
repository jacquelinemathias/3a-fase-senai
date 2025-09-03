import { prismaClient } from "../../../prisma/prisma.js";

class PacienteController {
    constructor() {}

    async getTodosOsPacientes(_, res) {
        try {
            const pacientes = await prismaClient.paciente.findMany({
                include: {
                    Prontuario: true,
                    Consulta: true,
                    Exame: true,
                }
            });
            return res.json(pacientes);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar pacientes");
        }
    }

    async getPacientePorId(req, res) {
        try {
            const { id } = req.params;
            const paciente = await prismaClient.paciente.findUnique({
                where: { id: Number(id) },
                include: {
                    Prontuario: true,
                    Consulta: true,
                    Exame: true,
                }
            });

            if (!paciente)
                return res.status(404).send("Paciente não encontrado");

            return res.json(paciente);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar paciente");
        }
    }

    async criarPaciente(req, res) {
        try {
            const {
                nome,
                cpf,
                telefone,
                email,
                data_nascimento,
                sexo,
                responsavel
            } = req.body;

            const novoPaciente = await prismaClient.paciente.create({
                data: {
                    nome,
                    cpf,
                    telefone: BigInt(telefone),
                    email,
                    data_nascimento: new Date(data_nascimento),
                    sexo,
                    responsavel,
                }
            });

            return res.status(201).json(novoPaciente);
        } catch (e) {
            console.error(e);
            if (e.code === "P2002") {
                return res.status(409).send("Paciente com CPF ou email já cadastrado!");
            }
            res.status(500).send("Erro ao criar paciente");
        }
    }

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const {
                nome,
                cpf,
                telefone,
                email,
                data_nascimento,
                sexo,
                responsavel
            } = req.body;

            await prismaClient.paciente.update({
                where: { id: Number(id) },
                data: {
                    ...(nome && { nome }),
                    ...(cpf && { cpf }),
                    ...(telefone && { telefone: BigInt(telefone) }),
                    ...(email && { email }),
                    ...(data_nascimento && { data_nascimento: new Date(data_nascimento) }),
                    ...(sexo && { sexo }),
                    ...(responsavel !== undefined && { responsavel }),
                }
            });

            const pacienteAtualizado = await prismaClient.paciente.findUnique({
                where: { id: Number(id) }
            });

            return res.status(200).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Paciente não encontrado");
            }
            if (e.code === "P2002") {
                return res.status(409).send("CPF ou email já cadastrado");
            }
            console.error(e);
            res.status(500).send("Erro ao atualizar paciente");
        }
    }

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteDeletado = await prismaClient.paciente.delete({
                where: { id: Number(id) }
            });

            return res.status(200).json({
                message: "Paciente deletado!",
                data: pacienteDeletado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Paciente não encontrado");
            }
            console.error(e);
            res.status(500).send("Erro ao deletar paciente");
        }
    }
}

export const pacienteController = new PacienteController();
