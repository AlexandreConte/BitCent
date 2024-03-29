import Usuario from "@/logic/core/usuario/Usuario";
import { Auth, GoogleAuthProvider, User, getAuth, onIdTokenChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../config/app";

export type MonitorarUsuario = (usuario: Usuario | null) => void
export type CancelarMonitoramento = () => void

export default class Autenticacao {
    private _auth: Auth

    constructor() {
        this._auth = getAuth(app)
    }

    logout(): Promise<void> {
        return signOut(this._auth)
    }

    monitorar(notificar: MonitorarUsuario): CancelarMonitoramento {
        return onIdTokenChanged(this._auth, async (usuarioFirebase) => {
            const usuario = this.converterParaUsuario(usuarioFirebase)
            notificar(usuario)
        })
    }

    async loginGoogle(): Promise<Usuario | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())
        return this.converterParaUsuario(resp.user)
    }

    private converterParaUsuario(usuarioFirebase: User | null): Usuario | null {
        if (!usuarioFirebase?.email) return null
        const nomeAlternativo = usuarioFirebase.email!.split("@")[0]

        return {
            id: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName ?? nomeAlternativo,
            email: usuarioFirebase.email,
            imagemUrl: usuarioFirebase.photoURL
        }
    }
}