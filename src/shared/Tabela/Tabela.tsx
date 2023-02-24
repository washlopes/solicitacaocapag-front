import React from 'react';


import organizeData from '../../utils/organizedDataForTable'
import './Tabela.scss'


// import { Container } from './styles';

export interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[]
    data: any[]
    children?: React.ReactNode

    enableActions?: boolean
    onDelete?: (item: any) => void
    onDetail?: (item: any) => void
    onEdit?: (item: any) => void
}

const Tabela: React.FC<TableProps> = (props) => {

    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)

    return <table className='AppTable'>
        <thead>
            <tr>
                {
                    props.headers.map(header => <th
                        key={header.key} className={header.right ? 'right' : ''}>{header.value}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {

                organizedData.map((row: any, i: any) => {
                    return <tr >
                        {
                            Object
                                .keys(row)
                                .map((item) =>
                                    item !== '$original'
                                        ? <td
                                            key={row.$original.id}
                                            className={indexedHeaders[item].right ? 'right' : ''}
                                        >
                                            {row[item]}
                                        </td>
                                        : null
                                )}
                    </tr>
                })
            }
        </tbody>
    </table>;
}

export default Tabela;