import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import axios from 'axios'

const URL = 'http://localhost:3003/api/phonebook'


export default class Phonebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contacts: [],
        };
        this.addContact = this.addContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.refresh();
    }

    refresh() {
        const name = '';
        const search = name ? `&name__regex=/${name}/` : ''
        axios.get(`${URL}?sort=-creatAt${search}`)
            .then(resp => this.setState({ ...this.state, name, contacts: resp.data }))
    }

    addContact() {
        console.log(this);
        const name = this.state.name;
        axios.post(URL, { name }).then(resp => this.refresh());
    }

    upDateValue(event) {
        this.setState({ name: event.target.value })
        console.log(this.state.name)
    }

    removeContact(contact){
        axios.delete(`${URL}/${contact._id}`).then(resp => this.refresh(this.state.name))
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <PageHeader name="Phonebook"></PageHeader>
                <div className="addContacts">
                    <input placeholder="Nome" type="text"
                        onChange={event => this.upDateValue(event)} value={this.state.name}></input>
                    <input placeholder="Telefone"></input>
                    <button type="button" onClick={this.addContact}>Adicionar contato</button>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="tableActions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contacts.map(contact => (
                                <tr key={contact._id}>
                                    <td>{contact.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" 
                                        onClick={() => this.removeContact(contact)}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>)
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}