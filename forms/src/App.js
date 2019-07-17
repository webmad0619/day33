import React from 'react';
import './App.css';
import FormEmployee from './FormEmployee';

class App extends React.Component {
  constructor() {
    super();

    this.employeeName = "sergio :)"

    this.state = {
      appVersionDetails: {
        author: "javi salas",
        version: "1.0"
      },
      employees: [
        {
          name: "n1",
          surname: "s1",
          age: 30
        },
        {
          name: "n2",
          surname: "s2",
          age: 32
        },
        {
          name: "n3",
          surname: "s3",
          age: 33
        }
      ]
    }
  }

  addNewEmployee(newEmployee) {
    let newState = {...this.state};
    
    newState.employees.push({
      name: newEmployee.name,
      surname: newEmployee.surname,
      age: newEmployee.age
    })

    this.setState(newState)
  }

  render() {
    return (
      <section className='app'>
        <FormEmployee
          myVersion={this.state.appVersionDetails}
          addNewEmployeeHandler={(employee) => this.addNewEmployee(employee)}
        />
        <ul>
          {
            this.state.employees.map((employee, idx) =>
              <li key={idx}>
                {employee.name} {employee.surname} ({employee.age})
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default App;
