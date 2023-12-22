import ImagemResponsiva from "../comum/ImagemResponsiva"

interface VantagemProps {
    imagem: any
    titulo: string
    subtitulo?: string
    inverter?: boolean
}

export default function Vantagem({imagem, titulo, inverter, subtitulo}: VantagemProps) {
    return (
        <div className={`
            flex flex-col justify-around items-center w-full gap-6
            ${inverter ? "sm:flex-row-reverse" : "sm:flex-row"}
        `}>
            <ImagemResponsiva 
                imagem={imagem}
                className={inverter ? "sm:rotate-6" : "sm:-rotate-6"}
            />
            <div className="
                flex flex-col gap-y-6 sm:w-[350px]
                text-center sm:text-left
            ">
                <div className="
                    flex flex-col text-white
                    font-black text-2xl sm:text-4xl
                ">
                    {titulo}
                </div>
                {subtitulo && (
                    <span className="font-light text-base sm:text-lg text-zinc-300">
                        {subtitulo}
                    </span>
                )}
            </div>
        </div>
    )
}