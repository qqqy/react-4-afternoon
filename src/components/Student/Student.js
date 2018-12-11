import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.student}`)
      .then((res) => this.updateStudentInfo(res.data))
  }

  updateStudentInfo(data){
    this.setState({studentInfo: data})
  }
  
  render() {
    const {first_name, last_name, grade, email} = this.state.studentInfo
    return (
      <div className="box">
        <h1>{last_name}, {first_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
      </div>
    )
  }
}