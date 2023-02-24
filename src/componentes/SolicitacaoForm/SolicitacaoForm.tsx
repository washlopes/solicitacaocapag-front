import React, { useEffect, useState } from 'react';


import Input from '../../shared/Input';
import Form from '../../shared/Form';
import { Solicitacao } from '../../shared/Tabela/Tabela.mockdata'
import ButtonApp from '../../shared/ButtonApp';
import apidb2 from '../../apidb2';
import withPermission from '../../utils/HOC/withPermission';


// import { Container } from './styles';

declare interface EstadoInicialForm {
    _id?: number,
    codigoCliente: string,
    nomeCliente: string,
    prefixoAgencia: string,
    valorProposto: string,
    valorFinanciado: string,
    prazoSolicitado: string,
    prazoCarencia: string,
    margemLucroOperacional: string
    dataSolicitacao: string
}

declare interface Cliente {
    id?: number,
    codigoTipo: number,
    cpfCnpj: number,
    nome: string,
    codigoInformacaoCpfCnpj: number,
    dataCadastro: string,
    prefixoAgencia: number,
    dataUltimaAtualizacao: string,
    dataNascimentoConstituicao: string,
    codigoTipoDocumento: number,
    codigoDocumento: string,
    orgaoEmissor: string,
    codigoSituacao: number,
    dataEmissaoDocumento: string,
    indicativoDichProv: string,
    dataRevisao: string,
    codigoMatriculaFunciRevisao: number,
    codigoTTDCpf: number,
    indicadorIrregularidade1: string,
    indicadorIrregularidade2: string,
    dataInicioCorrentista: string,
    codigoPaisOrigem: string,
    indicadorExtrativismo: string,
    codigoMercado: number,
    codigoCategoria: number,
    codigoEstadoCadastro: number,
    codigoOrigemCadastro: number,
    numeroIdentificadorOrigemCadastro: number,
    indicadorBemNaoCadastrado: string

}

export interface SolicitacaoCreator {
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

declare interface SolicitacaoFormProps {
    form?: Solicitacao
    onSubmit?: (solicitacao: SolicitacaoCreator) => void
    onUpdate?: (solicitacao: Solicitacao) => void
}

const SolicitacaoForm: React.FC<SolicitacaoFormProps> = (props) => {

    const estadoInicialForm: EstadoInicialForm = props.form
        ? {
            _id: props.form._id,
            codigoCliente: String(props.form.codigoCliente),
            nomeCliente: props.form.nomeCliente,
            prefixoAgencia: String(props.form.prefixoAgencia),
            valorProposto: String(props.form.valorProposto),
            valorFinanciado: String(props.form.valorFinanciado),
            prazoSolicitado: String(props.form.prazoSolicitado),
            prazoCarencia: String(props.form.prazoCarencia),
            margemLucroOperacional: String(props.form.margemLucroOperacional),
            dataSolicitacao: props.form.dataSolicitacao
        }
        : {
            codigoCliente: '',
            nomeCliente: '',
            prefixoAgencia: '',
            valorProposto: '',
            valorFinanciado: '',
            prazoSolicitado: '',
            prazoCarencia: '',
            margemLucroOperacional: '',
            dataSolicitacao: ''
        }

    const [form, setForm] = useState(estadoInicialForm)
    const [cliente, setCliente] = useState<Cliente | any>()

    async function delay(ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }

    async function buscaCliente(cd_cli: string) {
        const _cliente = await apidb2.get<Cliente>(`/clientes/${cd_cli}`).then(res => res.data)
        setCliente(_cliente)
    }

    useEffect(() => {
        setForm(estadoInicialForm)

    }, [props.form])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })


    }

    const handleInputOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        if (name === 'codigoCliente') {
            buscaCliente(value)

            delay(2000)
            setForm({
                ...form,
                ['nomeCliente']: cliente.nome
            })
        }

    }

    const handleInputOnFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        console.log(cliente)
        if (name === 'prefixoAgencia') {
            setForm({
                ...form,
                ['nomeCliente']: cliente.nome
            })
        }
    }


    const updateSolicitacao = (solicitacao: EstadoInicialForm) => {
        const solicitacaoDto = {
            _id: Number(solicitacao._id),
            codigoCliente: Number(solicitacao.codigoCliente),
            nomeCliente: String(solicitacao.nomeCliente),
            prefixoAgencia: Number(solicitacao.prefixoAgencia),
            valorProposto: Number(solicitacao.valorProposto),
            valorFinanciado: Number(solicitacao.valorFinanciado),
            prazoSolicitado: Number(solicitacao.prazoSolicitado),
            prazoCarencia: Number(solicitacao.prazoCarencia),
            margemLucroOperacional: parseFloat(solicitacao.margemLucroOperacional),
            dataSolicitacao: String(solicitacao.dataSolicitacao)

        }

        props.onUpdate &&
            props.onUpdate(solicitacaoDto)
    }

    const createSolicitacao = (solicitacao: EstadoInicialForm) => {
        const solicitacaoDto = {
            codigoCliente: Number(solicitacao.codigoCliente),
            nomeCliente: String(solicitacao.nomeCliente),
            prefixoAgencia: Number(solicitacao.prefixoAgencia),
            valorProposto: Number(solicitacao.valorProposto),
            valorFinanciado: Number(solicitacao.valorFinanciado),
            prazoSolicitado: Number(solicitacao.prazoSolicitado),
            prazoCarencia: Number(solicitacao.prazoCarencia),
            margemLucroOperacional: parseFloat(solicitacao.margemLucroOperacional),
            dataSolicitacao: String(solicitacao.dataSolicitacao)

        }

        props.onSubmit &&
            props.onSubmit(solicitacaoDto)
    }

    const handleFormSubmit = () => {

        form._id
            ? updateSolicitacao(form)
            : createSolicitacao(form)

        setForm(estadoInicialForm)

    }

    return <Form titulo='Cadastro de Solicitação Capag' onSubmit={handleFormSubmit}>
        <Input
            onChange={handleInputChange}
            onBlur={handleInputOnBlur}
            value={form.codigoCliente}
            name='codigoCliente'
            rotulo='MCI'
            type='number'
            placeholder='Informe o MCI do cliente'
            inputMode='numeric'
            required
        />
        <Input
            onChange={handleInputChange}
            value={form.prefixoAgencia}
            name="prefixoAgencia"
            rotulo='Prefixo da Agência'
            type='number'
            inputMode='numeric'
            placeholder='Informe o prefixo da agência solicitante'
        />
        <Input
            onChange={handleInputChange}
            value={form.nomeCliente}
            name='nomeCliente'
            rotulo='Nome do Cliente'
            placeholder='Informe o nome do cliente'
            width='150'
        />

        <Input
            onChange={handleInputChange}
            value={form.valorProposto}
            name="valorProposto"
            rotulo='Valor Proposto'
            type="number"
            inputMode='decimal'
            step="0.01"
            placeholder='Informe o valor proposto'
        />
        <Input
            onChange={handleInputChange}
            value={form.valorFinanciado}
            name="valorFinanciado"
            rotulo='Valor Financiado'
            type="number"
            inputMode='decimal'
            step="0.01"
            placeholder='Informe o valor financiado'
        />
        <Input
            onChange={handleInputChange}
            value={form.prazoSolicitado}
            name="prazoSolicitado"
            rotulo='Prazo Solicitado'
            type="number"
            inputMode='decimal'
            placeholder='Informe o prazo solicitado (em meses)'
        />
        <Input
            onChange={handleInputChange}
            value={form.prazoCarencia}
            name="prazoCarencia"
            rotulo='Prazo de Carência'
            type="number"
            inputMode='numeric'
            placeholder='Informe o prazo da carência (em meses)'
        />
        <Input
            onChange={handleInputChange}
            value={form.margemLucroOperacional}
            name="margemLucroOperacional"
            rotulo='Margem de Lucro Operacional'
            type="number"
            inputMode='decimal'
            step="0.01"
            placeholder='Informe o a margem do lucro operacional'
        />
        <ButtonApp>
            {form._id ? 'Atualizar' : 'Incluir'}
        </ButtonApp>

    </Form>;

}

export default withPermission(['admin', 'customer'], '/login')(SolicitacaoForm);