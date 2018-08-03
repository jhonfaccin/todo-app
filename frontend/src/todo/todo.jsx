import React, {Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor (props){
        super (props)
        this.state = {description: '',list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(resp=>console.log('funcionou'));
    }

    handleChange(evento){
        this.setState({...this.state,description: evento.target.value})
    }

    render(){ 
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} description={this.description}
                handleChange={this.handleChange}></TodoForm>
                <TodoList/>
            </div>
        )
    }
} 