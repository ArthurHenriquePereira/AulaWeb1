import React, { Component } from "react"
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/user'

const initialState = {
    user: { nome: '', idade: '' },
    list: []
}
export default class AppUser extends Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    load(user) {
        this.setState({ user })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    componentDidMount() {
        axios.get(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            })
            .catch(error => {
                console.log('Erro ao consultar o servidor JSON')
            })
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data);
                this.setState({ user: initialState.user, list })
            })
            .catch(error => {
                console.log('Erro ao consultar o usuário ', error)
            })
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user)
        this.return(list)
    }

    update(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    delete(id) {
        axios.delete(`${baseUrl}/${id}`)
            .then(resp => {
                const list = this.state.list.filter(user => user.id !== id);
                this.setState({ list })
            })
            .catch(error => {
                console.log('Erro ao deletar o usuário ', error)
            })

    }

    renderMain() {
        return (
            <Main icon='user' title='PERFIL' subtitle='NODE + REACT'>
                <div className="text-white">
                    <h1>CADASTRO DE USUÁRIOS</h1>
                    <p>Sistema básico de cadastro REACT+JSON</p>
                    <hr />
                    {this.renderForm()}
                    {this.renderTable()}
                </div>
            </Main>
        )
    }

    renderForm() {
        return (
            <div className="container">
                <h3> Preencha os dados abaixo</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor='nome' className="text-white"> Digite seu nome </label>
                        <input type="text" id="nome" name="nome" value={this.state.user.nome}
                            onChange={e => this.update(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='idade' className="text-white"> Digite sua idade </label>
                        <input type="text" id="idade" name="idade" value={this.state.user.idade}
                            onChange={e => this.update(e)} />
                    </div>
                    <div className="d-flex justify-content-start mt-2" >
                        <button className="btn btn-primary"
                            onClick={() => this.save()}> Salvar </button>
                        <button className="btn btn-warning ms-4"
                            onClick={() => this.clear()} > Cancelar </button>
                    </div>
                </form>
            </div>
        )
    }

    renderTable() {
        return (
            <div className="table-responsive mt-2 px-3" >
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th> Código </th>
                            <th> Nome </th>
                            <th> Idade </th>
                            <th> Ações </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTBody()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderTBody() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td> {user.id} </td>
                    <td> {user.nome} </td>
                    <td> {user.idade} </td>
                    <td>
                        <div className="d-flex justify-content-start mt-2" >
                            <button className="btn btn-secondary"
                                onClick={() => this.load(user)}> Alterar </button>
                            <button className="btn btn-danger ms-4"
                                onClick={() => this.delete(user.id)}> Excluír </button>
                        </div>
                    </td>
                </tr>
            )
        }
        )
    }

    render() {
        return (
            <>
                {this.renderMain()}
            </>
        )
    }

}