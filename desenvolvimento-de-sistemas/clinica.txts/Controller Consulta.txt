import { prismaClient } from "../../../prisma/prisma.js";

class ConsultaController {
    constructor() {}

    async getTodasConsultas(_, res) {
        try {
            const consultas = await prismaClient.consulta.findMany({
                include: {
                    paciente: true,
                },
            });
            return res.json(consultas);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar consultas");
        }
    }

    async getConsultaPorId(req, res) {
        try {
            const { id } = req.params;
            const consulta = await prismaClient.consulta.findUnique({
                where: { id: Number(id) },
                include: { paciente: true },
            });

            if (!consulta) return res.status(404).send("Consulta não encontrada");

            return res.json(consulta);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao buscar consulta");
        }
    }

    async criarConsulta(req, res) {
        try {
            const {
                motivo,
                data_consulta,
                observacoes,
                medico_responsavel_id,
                paciente_id,
            } = req.body;

            const novaConsulta = await prismaClient.consulta.create({
                data: {
                    motivo,
                    data_consulta: new Date(data_consulta),
                    observacoes,
                    medico_responsavel_id,
                    paciente_id,
                },
            });

            return res.status(201).json(novaConsulta);
        } catch (e) {
            console.error(e);
            res.status(500).send("Erro ao criar consulta");
        }
    }

    async atualizarConsulta(req, res) {
        try {
            const { id } = req.params;
            const {
                motivo,
                data_consulta,
                observacoes,
                medico_responsavel_id,
                paciente_id,
            } = req.body;

            await prismaClient.consulta.update({
                where: { id: Number(id) },
                data: {
                    ...(motivo && { motivo }),
                    ...(data_consulta && { data_consulta: new Date(data_consulta) }),
                    ...(observacoes && { observacoes }),
                    ...(medico_responsavel_id && { medico_responsavel_id }),
                    ...(paciente_id && { paciente_id }),
                },
            });

            const consultaAtualizada = await prismaClient.consulta.findUnique({
                where: { id: Number(id) },
                include: { paciente: true },
            });

            return res.status(200).json({
                message: "Consulta atualizada!",
                data: consultaAtualizada,
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Consulta não encontrada");
            }
            console.error(e);
            res.status(500).send("Erro ao atualizar consulta");
        }
    }

    async deletarConsulta(req, res) {
        try {
            const { id } = req.params;
            const consultaDeletada = await prismaClient.consulta.delete({
                where: { id: Number(id) },
            });

            return res.status(200).json({
                message: "Consulta deletada!",
                data: consultaDeletada,
            });
        } catch (e) {
            if (e.code === "P2025") {
                return res.status(404).send("Consulta não encontrada");
            }
            console.error(e);
            res.status(500).send("Erro ao deletar consulta");
        }
    }
}

export const consultaController = new ConsultaController();