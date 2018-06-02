import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// import { TextField } from '@material-ui/core'
import TextField from './TextField'
import { green } from 'logger'
import Form from './Form'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

class App extends Component {
  state = {
    validateRequired: false
  }
  handleChange = (fieldId, fieldName, fieldValue) => {
    // green('app.handleChange', `${name}:${fieldValue}`)
    this.props.updateFormField(fieldId, fieldName, fieldValue)
    this.setState({
      [fieldName]: fieldValue
    })

  }
  getFieldValue = (fieldName) => {

    const { formFields } = this.props
    green('App.formFields', formFields)
    // green('this.props.formFields', this.props.formFields)
    const idx = formFields.findIndex(f => {
      //green('fieldName', fieldName)
      //green('f.fieldName', f.fieldName)
      //green('equal', fieldName === f.fieldName)
      return f.fieldName === fieldName
    })
    green('idx', idx)
    if (idx === -1) {
      return ''
    } else {
      return formFields[idx].fieldValue
    }

    // green('getFieldValue: field')
  }
  handleSave = (e) => {
    green('App.handleSave')
    this.setState({
      validateRequired: true,
    })
  }
  render() {
    // green('App.render()')
    // green('App.props', this.props)
    const { formFields } = this.props
    green("this.getFieldValue('firstName')", this.getFieldValue('firstName'))
    return (
      <Fragment>
        <input type='text' />
        <h1>App</h1>
        <Form
          handleSave={this.handleSave}
          >
          <TextField
            handleChange={this.handleChange}
            label='First Name'
            name='firstName'
            validateRequired={this.state.validateRequired}
            required
            value={this.getFieldValue('firstName')}
          />
          <TextField
            handleChange={this.handleChange}
            label='Last Name'
            name='lastName'
            required
            validateRequired={this.state.validateRequired}
            value={this.getFieldValue('lastName')}
          />
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formFields: selectors.getFormFields(state)
  }
}

export default connect(mapStateToProps, actions)(App)
