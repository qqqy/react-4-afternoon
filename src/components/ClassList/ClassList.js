import React, { Component } from 'react';
import axios from 'axios'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then((res) => this.updateStudents(res.data))
  }

  updateStudents(data){
    this.setState({students: data})
    console.log(data)
  }

  render() {
    let students = this.state.students.map((student, i) => <h3 key={i}>{student.last_name}, {student.first_name}</h3>)
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}