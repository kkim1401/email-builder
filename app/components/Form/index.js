import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from './Form';
import * as actions from '../../actions/items';

export default reduxForm({
  form: 'form',
})(
  connect(null, (_, { handleSubmit, id }) => ({
    onFormClose: actions.closeForm,
    onSubmit: handleSubmit(({ content }, dispatch) =>
    dispatch(actions.updateItem({ content, id })))
  })
)(Form));
