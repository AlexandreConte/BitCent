import { useState } from "react";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import Id from "@/logic/core/comum/id";
import { IconPlus } from "@tabler/icons-react";


export default function Financas() {

    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    function salvar(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes([...outrasTransacoes, {
            ...transacao,
            id: transacao.id ?? Id.novo()
        }])
        setTransacao(null)
    }

    function excluir(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes(outrasTransacoes)
        setTransacao(null)
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <button className="bg-blue-500 px-2 py-1.5 rounded-md"
                    onClick={() => setTransacao(transacaoVazia)}
                >
                    <span className="flex justify-center items-center">
                        <IconPlus /> Nova Transação
                    </span>
                </button>
                {transacao ? (
                    <Formulario
                        transacao={transacao}
                        cancelar={() => setTransacao(null)}
                        salvar={salvar}
                        excluir={excluir}
                    />
                ) : transacoes.length > 0 ? (
                    <Lista transacoes={transacoes} selecionarTransacao={setTransacao} />
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada!
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    )
}