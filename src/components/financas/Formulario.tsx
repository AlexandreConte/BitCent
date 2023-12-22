import "dayjs/locale/pt-br"
import Transacao from "@/logic/core/financas/Transacao"
import Dinheiro from "@/logic/utils/Dinheiro"
import Data from "@/logic/utils/Data"
import useFormulario from "@/data/hooks/useFormulario"
import { DatePicker, DatePickerInput } from "@mantine/dates"

interface FormularioProps {
    transacao: Transacao
    salvar?: (transacao: Transacao) => void
    excluir?: (transacao: Transacao) => void
    cancelar?: () => void
}

export default function Formulario({ transacao, cancelar, excluir, salvar }: FormularioProps) {

    const { dados, setDados, alterarAtributo } = useFormulario(transacao)

    return (
        <div className="
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        ">
            <div className="bg-black py-3 px-7 text-zinc-400">
                <div className="flex flex-col gap-4 gap-y-6 p-4 sm:p-7 text-black">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="descricao" className="text-white">Descrição</label>
                        <input className="w-[185px] bg-zinc-100 rounded-md p-1"
                            type="text"
                            value={dados.descricao}
                            id="descricao"
                            onChange={alterarAtributo('descricao')}
                        />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="valor" className="text-white">Valor</label>
                        <input className="w-[185px] bg-zinc-100 rounded-md p-1"
                            type="text"
                            value={Dinheiro.formatar(dados.valor)}
                            id="valor"
                            onChange={alterarAtributo('valor', Dinheiro.desformatar)}
                        />
                    </div>
                    <div className="flex flex-col gap-y-8 border w-fit px-4 py-4">
                        <div className="text-white flex flex-col">
                            <span>Data</span>
                            <span className="bg-gray-500 rounded-lg text-black p-1 cursor-not-allowed">{Data.ddmmy.formatar(dados.data)}</span>
                        </div>

                        <DatePicker
                            nextIcon
                            previousIcon
                            value={dados.data}
                            className="text-white"
                            onChange={alterarAtributo('data')}
                        />
                    </div>
                    <div className="flex gap-x-4 gap-y-1">
                        <div className="flex gap-x-2">
                            <input
                                type="radio"
                                value="receita"
                                id="receita"
                                className="text-white"
                                name="tipo"
                            />
                            <label htmlFor="receita" className="text-white">Receita</label>
                        </div>
                        <div className="flex gap-x-2">
                            <input
                                type="radio"
                                value="despesa"
                                id="despesa"
                                className="text-white"
                                name="tipo"
                            />
                            <label htmlFor="despesa" className="text-white">Despesa</label>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <button
                            className="bg-green-500 px-4 py-1.5 rounded-md text-white"
                            onClick={() => salvar?.(dados)}
                        >
                            Salvar
                        </button>
                        <button
                            className="bg-zinc-500 px-4 py-1.5 rounded-md text-white"
                            onClick={cancelar}
                        >
                            Voltar
                        </button>
                        <div className="flex-1"></div>
                        {dados.id && (
                            <button className="bg-red-500 rounded-md px-4 py-1.5 text-white"
                                onClick={() => excluir?.(dados)}
                            >
                                Excluir
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}