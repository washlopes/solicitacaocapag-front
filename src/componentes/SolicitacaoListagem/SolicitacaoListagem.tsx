import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { RootState } from '../../redux';
import Tabela from '../../shared/Tabela';
import { TableHeader } from '../../shared/Tabela/Tabela';
import { Solicitacao } from '../../shared/Tabela/Tabela.mockdata';
import { obterSolicitacoes } from '../../redux/Solicitacoes/Solicitacoes.action';
import withPermission from '../../utils/HOC/withPermission';


// import { Container } from './styles';

const headers: TableHeader[] = [
    //{ key: 'id', value: '#' },
    { key: 'codigoCliente', value: 'MCI' },
    { key: 'nomeCliente', value: 'Cliente' },
    { key: 'prefixoAgencia', value: 'Prefixo Agência' },
    { key: 'valorProposto', value: 'Valor Proposto' },
    { key: 'valorFinanciado', value: 'valor Solicitado' },
    { key: 'prazoSolicitado', value: 'Prazo Solicitado' },
    { key: 'prazoCarencia', value: 'Prazo de Carência' },
    { key: 'margemLucroOperacional', value: 'Margem Lucro Operacional' },
    //{ key: 'dataSolicitacao', value: 'Data da Solicitação' }
]

declare interface SolicitacoCRUDProps {
    solicitacoes: Solicitacao[]
}

const SolicitacaoListagem: React.FC<SolicitacoCRUDProps> = (props) => {

    const showErrorAlert = (erro: Error) => Swal.fire('Ooops!', erro.message, 'error')

    //const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([])

    const disparar = useDispatch()


    // const [solicitacao, setSolicitacao] = useState<Solicitacao>()

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        //@ts-ignore
        await disparar(obterSolicitacoes()).catch(showErrorAlert)
    }

    return <>
        <Tabela
            headers={headers}
            data={props.solicitacoes}
        />
    </>;
}

const mapStateToProps = (state: RootState) => ({
    solicitacoes: state.solicitacoes
})

export default connect(mapStateToProps)(
    withPermission(['admin', 'customer'], '/login')(SolicitacaoListagem)
);