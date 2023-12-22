export default class Data {
    static ddmmy = {
        formatar(dt: Date, separador: string = "/"): string {
            const dia = dt.getDate().toString().padStart(2, '0')
            const mes = (dt.getMonth() + 1).toString().padStart(2, '0')
            const ano = dt.getFullYear()
            
            return `${dia}${separador}${mes}${separador}${ano}`
        }
    }
}