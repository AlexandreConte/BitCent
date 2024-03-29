import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"
import { useRouter } from "next/router"
import { useContext } from "react"
import Carregando from "../template/Carregando"

interface ForcarAutenticacaoProps {
    children: any
}

export default function ForcarAutenticacao({ children }: ForcarAutenticacaoProps) {

    const router = useRouter()
    const { usuario, carregando } = useContext(AutenticacaoContext)

    if (carregando) {
        return <Carregando />
    } else if (usuario?.email) {
        return children
    } else {
        router.push("/")
        return <Carregando />
    }
}