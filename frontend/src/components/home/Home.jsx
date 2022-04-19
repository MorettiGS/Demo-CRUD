import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Aplicação usando React/Springboot.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Esse sistema foi feito para exemplificar a construção
            de um cadastro (CRUD) de clientes!</p>
        <br/>
        <p className="mb-0">Foi utilizado, para o frontend, o React, e
            para o seu backend, Java Springboot.</p>
        <br/>
        <p className="mb-0">Para acessar o cadastro, clique na aba
             de navegação "Clientes".</p>
    </Main>