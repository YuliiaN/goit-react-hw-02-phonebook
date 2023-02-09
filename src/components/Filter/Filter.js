import { Component } from 'react';
import { FilterTitleStyled, FilteredInputStyled } from './Filter.styled';
import PropTypes from 'prop-types';

class Filter extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
    this.props.filterContacts({ ...this.state });
  };

  render() {
    return (
      <>
        <FilterTitleStyled>{this.props.title}</FilterTitleStyled>
        <FilteredInputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
