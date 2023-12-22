import Id from "@/logic/core/comum/id";
import Usuario from "@/logic/core/usuario/Usuario";

const usuarioFalso = {
    id: Id.novo(),
    nome: "Alexandre Conte",
    email: "alexandreconte.dev@gmail.com",
    imagemUrl: null,
} as Usuario;

export default usuarioFalso;
