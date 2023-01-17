import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                name: '',
                salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.state({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary, onAdd} = this.state

        const newObj = {name: {name}, salary: {salary}, premium: false, id: 1}

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onInputChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onInputChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">
                            Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;