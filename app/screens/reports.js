import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Dropdown from './../components/dropdown.js';

class Reports extends React.Component {
  state = {
    loading: true,
    api: [],
  };

  componentDidMount() {
    this.fetchProcess().then(res => this.setState({loading: false, api: res[0]}));
  }

  fetchProcess = async () => {
    const response = await fetch('http://harborhq.us-east-2.elasticbeanstalk.com/api/publictest/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {

    const header = (
      <Header
        outerContainerStyles={{ backgroundColor: '#1999CE' }}
        centerComponent={{ text: 'Reports', style: { color: '#fff' } }}
      />
    );

    const timePeriod = (
      <View style={{ margin: 0, padding: 15, backgroundColor: '#f2f2f2'}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Time Period</Text>
        <Dropdown />
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        { header }
        { timePeriod }
      </View>
    );
  }
}

export default Reports;
