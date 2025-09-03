import { prismaClient } from "../../../prisma/prisma.js";

class ExameController {
    constructor() {}

    async getTodosOsExames(_, res) {
        try {
            const exames = await prismaClient.exame.findMany({
                include: {
                    paciente: true
                }
            });
            return res.json(exames);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar exames");
        }
    }

    async getExamePorId(req, res) {
        try {
            const { id } = req.params;
            const exame = await prismaClient.exame.findUnique({
                where: { id: Number(id) },
                include: {
                    paciente: true
                }
            });

            if (!exame) return res.status(404).send("Exame não encontrado");

            return res.json(exame);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar exame");
        }
    }

    async criarExame(req, res) {
        try {
            const {
                tipo_exame,
                resultado,
                data_exame,
                link_arquivo,
                observacoes,
                paciente_id
            } = req.body;

            const novoExame = await prismaClient.exame.create({
                data: {
                    tipo_exame,
                    resultado,
                    data_exame: new Date(data_exame),
                    link_arquivo,
                    observacoes,
                    paciente_id
                }
            });

            return res.status(201).json(novoExame);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao criar exame");
        }
    }

    async atualizarExame(req, res) {
        try {
            const { id } = req.params;
            const {
                tipo_exame,
                resultado,
                data_exame,
                link_arquivo,
                observacoes,
                paciente_id
            } = req.body;

            await prismaClient.exame.update({
                where: { id: Number(id) },
                data: {
                    ...(tipo_exame && { tipo_exame }),
                    ...(resultado && { resultado }),
                    ...(data_exame && { data_exame: new Date(data_exame) }),
                    ...(link_arquivo && { link_arquivo }),
                    ...(observacoes && { observacoes }),
                    ...(paciente_id && { paciente_id })
                }
            });

            const exameAtualizado = await prismaClient.exame.findUnique({
                where: { id: Number(id) },
                include: { paciente: true }
            });

            return res.status(200).json({
                message: "Exame atualizado!",
                data: exameAtualizado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Exame não encontrado");
            }
            console.error(e);
            res.status(500).send("Erro ao atualizar exame");
        }
    }

    async deletarExame(req, res) {
        try {
            const { id } = req.params;
            const exameDeletado = await prismaClient.exame.delete({
                where: { id: Number(id) }
            });

            return res.status(200).json({
                message: "Exame deletado!",
                data: exameDeletado
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Exame não encontrado");
            }
            console.error(e);
            res.status(500).send("Erro ao deletar exame");
        }
    }
}

export const exameController = new ExameController();
