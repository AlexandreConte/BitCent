import Area from "../landing/comum/Area"

interface ConteudoProps {
    children: any
    className?: string
}

export default function Conteudo({ children, className }: ConteudoProps) {
    return (
        <Area>
            <div className={`
                flex flex-col p-7
                ${className ?? ""}
            `}>
                {children}
            </div>
        </Area>
    )
}