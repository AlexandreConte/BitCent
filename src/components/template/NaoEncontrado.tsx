import { IconCircleX } from "@tabler/icons-react"

interface NaoEncontradoProps {
    children: any
}

export default function NaoEncontrado({ children }: NaoEncontradoProps) {
    return (
        <div
            className="flex flex-col items-center rounded-lg text-zinc-700 py-7"
        >
            <IconCircleX size={80} stroke={1} />
            <span className="text-lg">{children}</span>
        </div>
    )
}