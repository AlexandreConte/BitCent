import Image from "next/image";
import Pagina from "./Pagina";
import carregando from "../../../public/loading.gif";

export default function Carregando() {
    return (
        <Pagina externa className="justify-center items-center">
            <Image
                priority
                src={carregando}
                alt="Carregando"
                width={40}
                height={40}
            />
        </Pagina>
    )
}