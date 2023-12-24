import "dayjs/locale/pt-br"
import Transacao from "@/logic/core/financas/Transacao"
import Dinheiro from "@/logic/utils/Dinheiro"
import Data from "@/logic/utils/Data"
import useFormulario from "@/data/hooks/useFormulario"
import { DatePicker, DatePickerInput } from "@mantine/dates"
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react"
import { Group, Radio } from "@mantine/core"
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao"
import '@mantine/dates/styles.css';

interface FormularioProps {
    transacao: Transacao
    salvar?: (transacao: Transacao) => void
    excluir?: (transacao: Transacao) => void
    cancelar?: () => void
}

export default function Formulario({ transacao, cancelar, excluir, salvar }: FormularioProps) {

    const { dados, alterarAtributo } = useFormulario<Transacao>(transacao)

    return (
        <div className="
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        ">
            <div className="bg-black py-3 sm:px-7 w-full flex flex-col justify-center items-center">
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
                    <div className="flex flex-col gap-y-8 py-4">
                        <div className="text-white flex flex-col">
                            <span>Data</span>
                            <span className="bg-gray-500 rounded-lg text-black p-1 cursor-not-allowed" >
                                {Data.ddmmy.formatar(dados.data)}
                            </span>
                        </div>
                        <DatePicker
                            nextIcon={<IconArrowDown className="text-white" size={18} />}
                            previousIcon={<IconArrowUp className="text-white" size={18} />}
                            classNames={{
                                calendarHeader: "bg-blue-500 text-white p-1 rounded-md",
                                day: "px-1 sm:px-2 hover:bg-blue-500 active:bg-white active:text-black",
                                monthsListControl: "px-4 hover:bg-blue-500 active:bg-white active:text-black",
                                yearsListControl: "px-4 hover:bg-blue-500 active:bg-white active:text-black"
                            }}
                            monthLabelFormat={"MMMM/YY"}
                            value={dados.data}
                            className="text-white"
                            onChange={alterarAtributo('data')}
                        />
                    </div>
                    <div className="flex gap-x-4 text-white">
                        <Radio.Group
                            value={dados.tipo}
                            onChange={alterarAtributo('tipo')}
                        >
                            <Group className="flex items-center justify-center gap-x-6">
                                <Radio classNames={{ body: "flex gap-2", icon: "hidden" }}
                                    value={TipoTransacao.RECEITA}
                                    label="Receita"
                                />
                                <Radio classNames={{ body: "flex gap-2", icon: "hidden" }}
                                    value={TipoTransacao.DESPESA}
                                    label="Despesa"
                                />
                            </Group>
                        </Radio.Group>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center">
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
                        <div className="sm:flex-1"></div>
                        <div className="flex justify-center items-center">
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
        </div>
    )
}