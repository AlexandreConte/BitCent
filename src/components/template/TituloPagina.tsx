import { cloneElement } from "react"

interface TituloPaginaProps {
    icone: any
    principal: string
    secundario: string
    className?: string
}

export default function TituloPagina({ icone, principal, secundario, className }: TituloPaginaProps) {
    return (
        <div className={`flex items-center gap-2 ${className ?? ""}`}>
            {icone && (
                <div className="text-zinc-500">
                    {cloneElement(icone, {
                        stroke: 1,
                        size: secundario ? 50 : 24
                    })}
                </div>
            )}
            <div className="flex flex-col text-zinc-500">
                <h1 className="text-2xl font-black">
                    {principal}
                </h1>
                <h2 className="text-sm font-thin -mt-1">
                    {secundario}
                </h2>
            </div>
        </div>
    )
}