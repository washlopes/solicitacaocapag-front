import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { RootState, ThunkDispatch } from '../../redux';
import { atualizarSolicitacao, inserirNovaSolicitacao, obterSolicitacoes } from '../../redux/Solicitacoes/Solicitacoes.action';
import { Solicitacao } from '../../shared/Tabela/Tabela.mockdata';
import SolicitacaoForm, { SolicitacaoCreator } from './SolicitacaoForm';


// import { Container } from './styles';

declare interface SolicitacoCRUDProps {
    solicitacoes: Solicitacao[]
}

const SolicitacaoCRUD: React.FC<SolicitacoCRUDProps> = (props) => {

    const showErrorAlert = (erro: Error) => Swal.fire('Ooops!', erro.message, 'error')

    //const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([])

    const disparar = useDispatch()


    const [solicitacao, setSolicitacao] = useState<Solicitacao>()

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        //@ts-ignore
        await disparar(obterSolicitacoes()).catch(showErrorAlert)
    }



    const handleSolicitacaoSubmit = async (solicitacao: SolicitacaoCreator) => {
        try {
            //@ts-ignore
            disparar(inserirNovaSolicitacao(solicitacao))
            await Swal.fire('Solicitação inserida com sucesso!', 'Inserção de Solicitação de Capag', 'success')


        } catch (erro: any) {
            Swal.fire('Oops!', erro.message, 'error')
        }
        /* setSolicitacoes([
          ...solicitacoes, {
            _id: solicitacoes.length + 1,
            ...solicitacao
          }
        ]) */
    }

    const handleSolicitacaoUpdate = async (novaSolicitacao: Solicitacao) => {
        try {
            //@ts-ignore
            disparar(atualizarSolicitacao(novaSolicitacao))
            //await atualizaSolicitacao(novaSolicitacao)
            //fetchData()
        } catch (erro) {
            if (erro instanceof Error) {
                alert('Não foi possível atualizar os dados da solicitação!')
            }
        }
        /* setSolicitacoes(solicitacoes.map(solicitacao => 
          solicitacao._id === novaSolicitacao._id
          ? novaSolicitacao
          : solicitacao)) */
    }

    /* const deletarSolicitacao = async (id: string) => {
      try {
        await excluirSolicitacao(id)
        fetchData()
      } catch(erro) {
        if (erro instanceof Error) {
          alert('Não foi possível excluir a solicitação!')
        }
      }
    }
  
    const handleSolicitacaoDelete = (solicitacao: Solicitacao) => {
      deletarSolicitacao(solicitacao._id)
    } */

    return <>
        <SolicitacaoForm
            form={solicitacao}
            onSubmit={handleSolicitacaoSubmit}
            onUpdate={handleSolicitacaoUpdate}

        />
    </>;
}

const mapStateToProps = (state: RootState) => ({
    solicitacoes: state.solicitacoes
})

export default connect(mapStateToProps)(SolicitacaoCRUD);