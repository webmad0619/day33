import React from "react";

export default class FormEmployee extends React.Component {
    constructor() {
        super()

        this.state = {
            employeeFormDetails: {
                name: "",
                surname: "",
                age: undefined
            }
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            employeeFormDetails: {
                ...this.state.employeeFormDetails,
                name: this.props.initialName
            }
        })
    }

    handleFormChange(e, field) {
        let newState = { ...this.state }
        newState.employeeFormDetails[field] = e.target.value
        this.setState(newState)
    }

    submitForm(e) {
        e.preventDefault()
        let currentEmployeeDetails = this.state.employeeFormDetails
        
        this.props.addNewEmployeeHandler(this.state.employeeFormDetails)
       

        // then we can use axios to communicate with our API to record this data for example
        // axios.put("http://localhost:3000/employeeDetails", this.state.employeeFormDetails).then
    }

    render() {
        return (
            <form>
                {/* this is what was in app.js
                <h1>Employee details ({this.state.appVersionDetails.version})</h1> */}
                <h1>Employee details {this.props.myVersion && "(" + this.props.myVersion.version + ")"}</h1>
                {this.state.employeeFormDetails.name} {this.state.employeeFormDetails.surname} ({this.state.employeeFormDetails.age})
        <fieldset>
                    <input
                        type="text"
                        placeholder="please write your name"
                        value={this.state.employeeFormDetails.name}
                        onChange={(e) => this.handleFormChange(e, "name")}
                    ></input>
                    <input
                        type="text"
                        placeholder="please write your surname"
                        value={this.state.employeeFormDetails.surname}
                        onChange={(e) => this.handleFormChange(e, "surname")}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="please write your age"
                        value={this.state.employeeFormDetails.age}
                        onChange={(e) => this.handleFormChange(e, "age")}>
                    </input>
                </fieldset>
                <button onClick={(e) => this.submitForm(e)}>Submit this form!</button>
            </form>
        )
    }
}