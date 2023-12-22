import Id from "@/logic/core/comum/id";
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao";
import Transacao from "@/logic/core/financas/Transacao";

const transacoesFalsas: Transacao[] = [
    {
        id: Id.novo(),
        descricao: 'Salário',
        data: new Date(2023, 4, 1),
        valor: 7654.32,
        tipo: TipoTransacao.RECEITA
    },
    {
        id: Id.novo(),
        descricao: 'Conta de Luz',
        data: new Date(2023, 3, 4),
        valor: 430.00,
        tipo: TipoTransacao.DESPESA
    }
]

export default transacoesFalsas