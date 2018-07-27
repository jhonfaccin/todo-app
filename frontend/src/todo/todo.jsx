import React, {Component } from 'react'
import PageHeader from '../template/pageHeader'
import pageHeader from '../template/pageHeader'


export default class Todo extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
} 