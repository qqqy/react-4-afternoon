import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    let students = this.state.students.map((student, i) => 
    <Link key={i} to={`/student/${student.id}`}>
      <h3>{student.last_name}, {student.first_name}</h3>
    </Link>
    )
    return (
      <div className="box">
        <h1>{this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}