import { TipoTransacao } from "@/logic/core/financas/TipoTransacao"
import Transacao from "@/logic/core/financas/Transacao"
import Data from "@/logic/utils/Data"
import Dinheiro from "@/logic/utils/Dinheiro"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface ListaProps {
    transacoes: Transacao[]
}

export default function Lista({ transacoes }: ListaProps) {

    function renderizarTipo(tipo: TipoTransacao) {
        return (
            <span className={`
                flex justify-center items-center
                h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
                ${tipo === TipoTransacao.RECEITA ? 'bg-green-500' : 'bg-red-500'}
            `}>
                {tipo === TipoTransacao.RECEITA
                    ? <IconTrendingUp />
                    : <IconTrendingDown />}
            </span>
        )
    }

    function renderizarLinha(transacao: Transacao, indice: number) {
        return (
            <div key={transacao.id} className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${indice % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}
            `}>
                {renderizarTipo(transacao.tipo)}
                <span className="w-full md:w-1/2">
                    {transacao.descricao}
                </span>
                <span className="hidden md:inline flex-1">
                    {Data.ddmmy.formatar(transacao.data)}
                </span>
                <span className="">
                    {Dinheiro.formatar(transacao.valor)}
                </span>
            </div>
        )
    }

    return (
        <div className="
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        ">
            {transacoes.map(renderizarLinha)}
        </div>
    )
}