import React from 'react';
import { Header, Card } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

class Dropdown extends React.Component {
  render() {
    return (
      <ModalDropdown
        options={['Q1 2018', 'Q4 2017', 'Q3 2017', 'Q2 2017', 'Q1 2017']}
        textStyle={{ fontSize: 12 }}
        defaultValue='Q1 2018'
        style={{ backgroundColor: '#fff', width: 100, padding: 10, marginTop: 5}}
        dropdownStyle={{ width: 100, marginLeft: -10, marginTop: 10 }}
        dropdownTextStyle={{ fontSize: 14 }}
      />
    );
  }
}

export default Dropdown;
