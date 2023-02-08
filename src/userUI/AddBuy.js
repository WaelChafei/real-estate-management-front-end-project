import React, { Component ,Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




export default class AddBuy extends Component {
    state = {
      questions: [''],
      ind:''
    }
  
    handleText = i => e => {
      let questions = [...this.state.questions]
      questions[i] = e.target.value
      this.setState({
        questions
      })
    }
  
    handleDelete = i => e => {
      e.preventDefault()
      let questions = [
        ...this.state.questions.slice(0, i),
        ...this.state.questions.slice(i + 1)
      ]
      this.setState({
        questions
      })
    }
  
    addQuestion =i => e => {
        if (i<2){
      e.preventDefault()
      let questions = this.state.questions.concat([''])
      this.setState({
        questions
      })
    }
    }
  
    render() {
      return (
         <Fragment>
          {this.state.questions.map((question, index) => (
              this.state.ind=index,
            <span key={index}>
              <TextField
                variant="outlined"
                fullWidth
                label="Buyer"
                type="text"
                onChange={this.handleText(index)}
                value={question}
              />
              <Button  variant="contained" onClick={this.handleDelete(index)}>X</Button>
            </span>
          ))}
          <Button   variant="contained" onClick={this.addQuestion(this.state.ind)}>Add Buyer</Button>
        </Fragment> 
        
      )
    }
  }