//react/adminExample.tsx
import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'
import helloworld from './graphql/helloworld.gql'

const AdminExample: FC = () => {
    const { data } = useQuery(helloworld)

    return (
        <Layout>
            <PageBlock
                title="Titulo das Informações"
                subtitle="Existe Alguma explicação sobre as Informações."
                variation="full">
                <h1>Aplicação Informações RBCiambarella!

                    Desculpe, nenhuma informação configurada
                    Nós não encontramos políticas de envio com a capacidade de entrega ativada.
                    Por favor, ative a capacidade de entrega na política INFORMAÇÕES desejada.

                    VER POLÍTICAS DE INFORMAÇÕES</h1>
                <p>{data?.helloworld}</p>
            </PageBlock>
        </Layout>
    )
}

export default AdminExample