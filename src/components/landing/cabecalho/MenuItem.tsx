import Link from "next/link"

interface MenuItemProps {
    children: any
    url?: string
    onClick?: () => void
    className?: string
}

export default function MenuItem({ children, className, onClick, url }: MenuItemProps) {
    function renderizarBotao() {
        return (
            <div className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 h-9 
                border-b border-transparent hover:border-zinc-300
                transition-colors duration-150
                ${className}
            `}
                onClick={onClick}
            >
                {children}
            </div>
        )
    }

    return url ? (
        <Link href={url ?? ""}>{renderizarBotao()}</Link>
    ) : renderizarBotao()
}