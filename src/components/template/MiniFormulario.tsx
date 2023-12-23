interface MiniFormularioProps {
    titulo: string
    descricao: string
    msgRodape: string
    salvar: () => void
    podeSalvar: boolean
    children: any
}

export default function MiniFormulario({ children, descricao, titulo, msgRodape, salvar, podeSalvar }: MiniFormularioProps) {
    return (
        <div className="
            flex flex-col
            overflow-hidden
            border border-zinc-800 rounded-lg
        ">
            <div className="flex flex-col p-7">
                <div className="text-3xl font-black">{titulo}</div>
                <div className="mt-4 text-zinc-400">{descricao}</div>
                <div className="mt-3">{children}</div>
            </div>
            <div className="
                flex justify-end sm:justify-between items-center
                bg-black px-7 py-5
            ">
                <span className="hidden sm:inline text-zinc-400">{msgRodape}</span>
                <button
                    className={`${podeSalvar ? "bg-green-500 hover:bg-green-600" : "bg-gray-600"}
                        transition-colors duration-100 
                        px-4 py-1.5 rounded-md
                    `}
                    onClick={() => podeSalvar ? salvar() : null}
                >
                    Salvar
                </button>
            </div>
        </div>
    )
}