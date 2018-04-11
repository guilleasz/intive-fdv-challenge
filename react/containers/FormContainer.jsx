import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { fetchCountries, submitForm, changeInput } from '../redux/action-creators/form';

class FormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return <Form {...this.props} />;
  }
}

const mapStateToProps = ({ form }) => form;

const mapDispatchToProps = {
  fetchCountries,
  submitForm,
  changeInput,
};


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
