import Area from "../comum/Area";
import Depoimento from "./Depoimento";
import rafaela from "../../../../public/rafaela.avif"
import juliana from "../../../../public/juliana.avif"
import gabriel from "../../../../public/gabriel.avif"

export default function Depoimentos() {
    return (
        <Area id="depoimentos" className="
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20
        ">
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl">
                    As pessoas estão dizendo...
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Depoimento
                        avatar={gabriel}
                        nome="Gabriel Junior"
                        titulo="Desenvolvedor de Software"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                    <Depoimento
                        avatar={juliana}
                        nome="Juliana Moraes"
                        titulo="Diretora Comercial"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                        destaque
                    />
                    <Depoimento
                        avatar={rafaela}
                        nome="Rafaela Vieira"
                        titulo="Servidora Pública"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                </div>
            </div>
        </Area>
    )
}