import Colecao from "@/logic/firebase/db/Colecao";
import Transacao from "./Transacao";
import Usuario from "../usuario/Usuario";

export default class ServicosTransacao {
    private _colecao = new Colecao()

    async salvar(transacao: Transacao, usuario: Usuario) {
        return this._colecao.salvar(
            `financas/${usuario.email}/transacoes`,
            transacao
        )
    }
}