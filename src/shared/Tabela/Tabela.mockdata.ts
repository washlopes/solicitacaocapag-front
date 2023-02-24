export interface Solicitacao {
    _id: number
    codigoCliente: number
    nomeCliente: string
    prefixoAgencia: number
    valorProposto: number
    valorFinanciado: number
    prazoSolicitado: number
    prazoCarencia: number
    margemLucroOperacional: number
    dataSolicitacao: string
}

const Solicitacoes: Solicitacao[] = [

]

export default Solicitacoes