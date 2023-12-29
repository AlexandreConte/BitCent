import Data from "@/logic/utils/Data"
import { Button, NumberInput, Popover } from "@mantine/core"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { useState } from "react"

export interface CampoMesAnoProps {
    data?: Date
    dataMudou?: (data: Date) => void
}

export default function CampoMesAno({ data, dataMudou }: CampoMesAnoProps) {

    const hoje = new Date()

    const [dataState, setDataState] = useState<Date>(new Date(
        data?.getFullYear() ?? hoje.getFullYear(),
        data?.getMonth() ?? hoje.getMonth(),
        1
    ))

    function alterarAno(ano: string | number): void {
        if (!ano) { return }
        const novaData = new Date(dataState)
        novaData.setFullYear(Number(ano))
        setDataState(novaData)
        dataMudou?.(novaData)
    }

    function alterarMes(mes: number) {
        if (!mes) { return }
        const novaData = new Date(dataState)
        novaData.setMonth(mes)
        setDataState(novaData)
        dataMudou?.(novaData)
    }

    function incrementar() {
        const novaData = new Date(dataState)
        novaData.setMonth(novaData.getMonth() + 1)
        setDataState(novaData)
        dataMudou?.(novaData)
    }

    function decrementar() {
        const novaData = new Date(dataState)
        novaData.setMonth(novaData.getMonth() - 1)
        setDataState(novaData)
        dataMudou?.(novaData)
    }

    return (
        <div className="flex items-center gap-2">
            <Button className="
                flex justify-center items-center 
                bg-red-500 text-white 
                cursor-pointer p-1 rounded-sm py-2
            " color="red" onClick={decrementar}>
                <IconChevronLeft size={14} />
            </Button>
            <Popover withArrow
                classNames={{ dropdown: "fixed z-50 rounded-md" }}
            >
                <Popover.Target>
                    <Button className="
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none
                        w-full sm:w-44 px-3 rounded-sm p-1
                    ">
                        {Data.mmyy.formatar(dataState)}
                    </Button>
                </Popover.Target>
                <Popover.Dropdown
                    className="bg-zinc-700 p-3"
                >
                    <NumberInput
                        className="text-white"
                        classNames={{
                            label: "text-white",
                            input: "bg-zinc-700 border border-zinc-600 p-1 rounded-sm",
                        }}
                        value={dataState.getFullYear()}
                        onChange={alterarAno}
                        label={"Ano"}
                    />
                    <div className="grid grid-cols-3 gap-3">
                        {Data.meses().map((mes, i) => {
                            let selecionada = dataState?.getMonth() === i
                            return (
                                <Button key={i}
                                    className={`${selecionada ? "bg-red-500" : "bg-blue-500"} rounded-sm hover:bg-blue-600`}
                                    onClick={() => alterarMes(i)}
                                >
                                    {mes}
                                </Button>
                            )
                        })}
                    </div>
                </Popover.Dropdown>
            </Popover>
            <Button className="
                flex justify-center items-center 
                bg-red-500 text-white 
                cursor-pointer p-1 rounded-sm py-2
            " color="red" onClick={incrementar}>
                <IconChevronRight size={14} />
            </Button>
        </div>
    )
}