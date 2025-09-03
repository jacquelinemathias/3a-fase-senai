import { prismaClient } from "../../../prisma/prisma.js";

class ProntuarioController {
    constructor() {}

    async getTodosOsProntuarios(_, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findMany({
                include: {
                    paciente: true,
                    usuario: true, // médico responsável
                }
            });
            return res.json(prontuarios);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar prontuários");
        }
    }

    async getProntuarioPorId(req, res) {
        try {
            const { id } = req.params;
            const prontuario = await prismaClient.prontuario.findUnique({
                where: { id: Number(id) },
                include: {
                    paciente: true,
                    usuario: true,
                }
            });

            if (!prontuario)
                return res.status(404).send("Prontuário não encontrado");

            return res.json(prontuario);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar prontuário");
        }
    }

    async criarProntuario(req, res) {
        try {
            const { descricao, data, paciente_id, medico_responsavel_id } = req.body;

            const novoProntuario = await prismaClient.prontuario.create({
                data: {
                    descricao,
                    data: new Date(data),
                    paciente_id,
                    medico_responsavel_id,
                }
            });

            return res.status(201).json(novoProntuario);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao criar prontuário");
        }
    }

    async atualizarProntuario(req, res) {
        try {
            const { id } = req.params;
            const { descricao, data, paciente_id, medico_responsavel_id } = req.body;

            await prismaClient.prontuario.update({
                where: { id: Number(id) },
                data: {
                    ...(descricao && { descricao }),
                    ...(data && { data: new Date(data) }),
                    ...(paciente_id && { paciente_id }),
                    ...(medico_responsavel_id && { medico_responsavel_id })
                }
            });

            const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                where: { id: Number(id) },
                include: {
                    paciente: true,
                    usuario: true
                }
            });

            return res.status(200).json({
                message: "Prontuário atualizado!",
                data: prontuarioAtualizado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Prontuário não encontrado");
            }
            console.error(e);
            res.status(500).send("Erro ao atualizar prontuário");
        }
    }

    async deletarProntuario(req, res) {
        try {
            const { id } = req.params;
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: { id: Number(id) }
            });

            return res.status(200).json({
                message: "Prontuário deletado!",
                data: prontuarioDeletado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Prontuário não encontrado");
            }
            console.error(e);
            res.status(500).send("Erro ao deletar prontuário");
        }
    }
}

export const prontuarioController = new ProntuarioController();
