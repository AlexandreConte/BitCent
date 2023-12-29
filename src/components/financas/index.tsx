import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";
import { SegmentedControl } from "@mantine/core";

export default function Financas() {

    const {
        data,
        transacoes,
        transacao,
        salvar,
        excluir,
        setTransacao,
        setData,
        setTipoExibicao,
    } = useTransacao()

    function renderizarControles() {
        return (
            <div className="flex justify-between flex-wrap">
                <CampoMesAno
                    data={data}
                    dataMudou={setData}
                />
                <div className="flex gap-2">
                    <button className="bg-blue-500 px-2 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
                        onClick={() => setTransacao(transacaoVazia)}
                    >
                        <span className="flex justify-center items-center">
                            <IconPlus /> Nova Transação
                        </span>
                    </button>
                    <SegmentedControl
                        data={[
                            { label: <IconList className="cursor-pointer" />, value: "lista" },
                            { label: <IconLayoutGrid className="cursor-pointer" />, value: "grade" },
                        ]}
                        onChange={tipo => setTipoExibicao(tipo as TipoExibicao)}
                        className="flex items-center justify-center"
                        classNames={
                            {
                                input: "flex w-0 h-0",
                                control: "hover:bg-zinc-500 p-1 rounded-md cursor-pointer",
                            }
                        }
                    />
                </div>
            </div>
        )
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                {renderizarControles()}
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