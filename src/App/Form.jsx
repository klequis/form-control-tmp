import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'
import { green } from 'logger'

const greenText = {
  color: 'green',
  backgroundColor: 'orange'
}

class Form extends Component {
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
    const idx = formFields.findIndex(f => {
      return f.fieldName === fieldName
    })
    // green('idx', idx)
    if (idx === -1) {
      return ''
    } else {
      return formFields[idx].fieldValue
    }
  }
  handleSave = (e) => {
    this.setState({
      validateRequired: true,
    })
  }

  render() {
    green('children', this.props.children)
    green('React.Children', React.Children)
    const childrenWithUser = React.Children.map(this.props.children, 
      child => React.cloneElement(child, { style: greenText })
    )
    green('childrenWithUser', childrenWithUser)
    return (
      <div>
        {childrenWithUser}
      </div>
    )
  }

}
// const { children, handleSave } = this.props
// const { validateRequired } = this.state

// green('children', childrenWithUser)
// {this.renderChildren(children, this.getFieldValue)}
// {childrenWithUser}
// <button>Cancel</button>
// <button onClick={e => this.handleSave(e)}>Save</button>
const mapStateToProps = (state) => {
  return {
    formFields: selectors.getFormFields(state)
  }
}

export default connect(mapStateToProps, actions)(Form)
