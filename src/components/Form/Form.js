import { Component } from 'react';
import { FormStyled, FormInput, FormLabel, FormButton } from './Form.styled';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = event => {
    const value = event.target.value;
    this.setState({
      name: value,
    });
  };

  handleChangeNumber = event => {
    const value = event.target.value;
    this.setState({
      number: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isSucceed = this.props.getValue({ ...this.state });
    if (!isSucceed) return;

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChangeNumber}
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormStyled>
    );
  }
}

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
};

export default Form;
