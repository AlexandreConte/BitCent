import Usuario from "@/logic/core/usuario/Usuario"
import Autenticacao from "@/logic/firebase/auth/auth"
import { createContext, useEffect, useState } from "react"

interface AutenticacaoContextProps {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
}

const AutenticacaoContext = createContext<AutenticacaoContextProps>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    logout: async () => { }
})

interface AutenticacaoProviderProps {
    children: any
}

export function AutenticacaoProvider({ children }: AutenticacaoProviderProps) {

    const [carregando, setCarregando] = useState<boolean>(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    const autenticacao = new Autenticacao()

    useEffect(() => {
        const cancelar = autenticacao.monitorar((usuario) => {
            setUsuario(usuario)
            setCarregando(false)
        })
        return () => cancelar()
    }, [])

    async function loginGoogle() {
        const usuario = await autenticacao.loginGoogle()
        setUsuario(usuario)
        return usuario
    }

    async function logout() {
        await autenticacao.logout()
        setUsuario(null)
    }

    return (
        <AutenticacaoContext.Provider value={{
            carregando,
            usuario,
            loginGoogle,
            logout
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

export default AutenticacaoContext