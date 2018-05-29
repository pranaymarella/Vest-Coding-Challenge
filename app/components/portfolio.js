import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ticker: '',
      price: '',
      expenseRatio: '',
      totalShares: '',
      currentBalance: '',
      totalPerformance: '',
      quarterlyPerformance: ''
    };
  }

  componentDidMount() {
    this.setState({
      ticker: this.props.asset.ticker,
      name: this.props.asset.fund_name,
      price: this.props.asset.market_price,
      totalShares: this.props.asset.quantity,
      expenseRatio: this.props.asset.exp_ratio,
      currentBalance: this.props.asset.balance,
      totalPerformance: this.props.asset.tot_perf,
      quarterlyPerformance: this.props.asset.qtr_perf
    });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', paddingBottom: 15 }}>
        <Text style={styles.assetTitle}>{this.state.ticker} / {this.state.name}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.assetDescription}>PRICE</Text>
            <Text style={styles.assetData}>{this.state.price}</Text>
            <Text style={styles.assetDescription}>TOTAL SHARES</Text>
            <Text style={styles.assetData}>{this.state.totalShares}</Text>
            <Text style={styles.assetDescription}>TOTAL PERFORMACE</Text>
            <Text style={styles.assetData}>{this.state.totalPerformance}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.assetDescription}>EXPENSE RATIO</Text>
            <Text style={styles.assetData}>{this.state.expenseRatio}</Text>
            <Text style={styles.assetDescription}>CURRENT BALANCE</Text>
            <Text style={styles.assetData}>{this.state.currentBalance}</Text>
            <Text style={styles.assetDescription}>QUARTERLY PERFORMACE</Text>
            <Text style={styles.assetData}>{this.state.quarterlyPerformance}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  assetTitle: {
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: 15,
    color: '#4d4d4d'
  },
  assetDescription: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 10,
  },
  assetData: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4d4d4d',
    marginBottom: 10
  }
});

export default Portfolio;
