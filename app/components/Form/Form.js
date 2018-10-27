import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
           <label htmlFor='content'>Text</label>
           <Field name="content" component="input" type="text"/>
         </div>
         <button type='submit'>Submit</button>
         <button type='button' onClick={this.props.onFormClose}>Close</button>
      </form>
    )
  }
}

export default Form;
