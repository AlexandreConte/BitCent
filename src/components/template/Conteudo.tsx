interface ConteudoProps {
    children: any
    className?: string
}

export default function Conteudo({ children, className }: ConteudoProps) {
    return (
        <div className={`
                flex flex-col p-7
                ${className ?? ""}
            `}>
            {children}
        </div>
    )
}