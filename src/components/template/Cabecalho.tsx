import Area from "../landing/comum/Area";
import BoasVindas from "./BoasVindas";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
    return (
        <Area>
            <div className="
                flex justify-between items-center
                p-7 border-b border-zinc-900
            ">
                <BoasVindas />
                <MenuUsuario />
            </div>
        </Area>
    )
}