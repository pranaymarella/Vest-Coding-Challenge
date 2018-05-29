import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
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

    const summary = (
      <View>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.resultsText}>BEGINNING BALANCE - <Text style={styles.summaryBalances}>{this.state.api.beginning_balance}</Text></Text>
        <Text style={styles.resultsText}>CHANCE IN BALANCE - <Text style={styles.summaryBalances}>{this.state.api.change_in_balance}</Text></Text>
        <Text style={styles.resultsText}>ENDING BALANCE - <Text style={styles.summaryBalances}>{this.state.api.ending_balance}</Text></Text>
        <Text></Text>
      </View>
    );

    const assetMix = (
      <View>
        <Text style={styles.resultsText}>ASSET MIX</Text>
        <Text></Text>
      </View>
    );

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        { header }
        { timePeriod }

        <ScrollView style={ styles.resultsBody }>
          <Text style={ styles.resultsTitle }>Q1 2017 Statement (Sep-Dec)</Text>
          { summary }
        </ScrollView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 15
  },
  resultsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 15,
  },
  resultsBody: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  resultsTitle: {
    fontSize: 18,
    color: '#000080',
  },
});

export default Reports;
