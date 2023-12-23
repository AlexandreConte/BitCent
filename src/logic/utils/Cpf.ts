export default class Cpf {
    private static _padrao = "???.???.???-??"

    static desformatar(valor: string): string {
        return valor.replace(/[^0-9]+/g, '')
    }

    static formatar(valor: string): string {
        const nums = valor.replace(/[^0-9]+/g, '').split('')
        return nums.reduce((formatado: string, num: string) => {
            return formatado.replace('?', num)
        }, Cpf._padrao).split('?')[0].replace(/[-.]$/, '')
    }
}