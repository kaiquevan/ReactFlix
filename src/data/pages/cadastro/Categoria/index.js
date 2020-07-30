import React from 'react';
import PageDefault from '../../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategotira() {
    return(
        <PageDefault>
            <h1>Cadastro de Categotira</h1>
                
            <Link to="/">
                Ir pra Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategotira;
