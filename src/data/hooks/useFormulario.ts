import { useState } from "react";

export default function useFormulario<T>(dadosIniciais?: T) {
    
    const [dados, setDados] = useState<T>(dadosIniciais ?? {} as T)

    function alterarAtributo(atributo: string, fn?: Function) {
        return (valorOuEvento: any) => {
            const v = valorOuEvento?.target?.value ?? valorOuEvento
            setDados({ ...dados, [atributo]: fn?.(v) ??  v })
        }
    }

    return {
        dados,
        setDados,
        alterarAtributo
    }
}