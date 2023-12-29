import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";

export default function Financas() {

    const {
        data,
        transacoes,
        transacao,
        salvar,
        excluir,
        setTransacao,
        setData
    } = useTransacao()

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <div className="flex justify-between flex-wrap">
                    <CampoMesAno
                        data={data}
                        dataMudou={setData}
                    />
                    <button className="bg-blue-500 px-2 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
                        onClick={() => setTransacao(transacaoVazia)}
                    >
                        <span className="flex justify-center items-center">
                            <IconPlus /> Nova Transação
                        </span>
                    </button>
                </div>
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