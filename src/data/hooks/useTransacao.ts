import Transacao from "@/logic/core/financas/Transacao"
import { useContext, useState } from "react"
import AutenticacaoContext from "../contexts/AutenticacaoContext"
import Id from "@/logic/core/comum/id"
import servicos from "@/logic/core"
import transacoesFalsas from "../constants/transacoesFalsas"

export default function useTransacao() {
    const { usuario } = useContext(AutenticacaoContext)
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    function salvar(transacao: Transacao) {
        if (!usuario) return
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes([...outrasTransacoes, {
            ...transacao,
            id: transacao.id ?? Id.novo()
        }])
        servicos.transacao.salvar(transacao, usuario)
        setTransacao(null)
    }

    function excluir(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes(outrasTransacoes)
        setTransacao(null)
    }

    return {
        transacoes,
        transacao,
        salvar,
        excluir,
        setTransacao
    }
}