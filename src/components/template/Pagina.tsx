import ForcarAutenticacao from "../autenticacao/ForcarAutenticacao"

interface PaginaProps {
    externa?: boolean
    className?: string
    children: any
}

export default function Pagina({ externa, className, children }: PaginaProps) {

    function renderizar() {
        return (
            <div
                className={`
                    flex flex-col min-h-screen
                    bg-gradient-to-r from-zinc-900 via-black to-zinc-900
                    ${className ?? ""}
                `}
            >
                {children}
            </div>
        )
    }

    return externa ? renderizar() : (
        <ForcarAutenticacao>
            {renderizar()}
        </ForcarAutenticacao>
    )
}