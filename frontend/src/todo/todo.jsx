import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-creatAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh());

    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleChange(evento) {
        this.setState({ ...this.state, description: evento.target.value })
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(this.refresh(this.state.description));
    }

    handleMarkAsPeding(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(this.refresh(this.state.description));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}>
                </TodoForm>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPeding={this.handleMarkAsPeding}>
                </TodoList>
            </div>
        )
    }
} 