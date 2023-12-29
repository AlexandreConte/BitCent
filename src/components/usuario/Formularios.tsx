import useFormulario from "@/data/hooks/useFormulario";
import MiniFormulario from "../template/MiniFormulario";
import Usuario from "@/logic/core/usuario/Usuario";
import Texto from "@/logic/utils/Texto";
import Cpf from "@/logic/utils/Cpf";
import Telefone from "@/logic/utils/Telefone";
import { useContext, useEffect } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Formularios() {

    const { usuario, atualizarUsuario } = useContext(AutenticacaoContext)
    const { dados, setDados, alterarAtributo } = useFormulario<Usuario>()

    useEffect(() => {
        if (!usuario) { return }
        setDados(usuario)
    }, [usuario])

    async function salvar() {
        if (!usuario) { return }
        await atualizarUsuario(dados)
    }

    return (
        <div className="flex flex-col gap-y-6 mt-8">
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Como você é chamado?"
                msgRodape="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={salvar}
            >
                <input
                    className="bg-zinc-500 p-1 rounded-md w-full"
                    value={dados.nome}
                    onChange={alterarAtributo("nome")}
                    type="text"
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="CPF"
                descricao="Seu CPF é usado internamente pelo sistema."
                msgRodape="Pode ficar tranquilo, daqui ele não sai!"
                podeSalvar
                salvar={salvar}
            >
                <input
                    className="bg-zinc-500 p-1 rounded-md w-full"
                    value={Cpf.formatar(dados.cpf ?? "")}
                    onChange={alterarAtributo("cpf", Cpf.desformatar)}
                    type="text"
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="Telefone"
                descricao="Usamos apenas para notificações importantes sobre a sua conta."
                msgRodape="Se receber ligação a cobrar, não foi a gente!"
                podeSalvar
                salvar={salvar}
            >
                <input
                    className="bg-zinc-500 p-1 rounded-md w-full"
                    value={Telefone.formatar(dados.telefone ?? "")}
                    onChange={alterarAtributo("telefone", Telefone.desformatar)}
                    type="text"
                />
            </MiniFormulario>
        </div>
    )
}