import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class Reports extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{ backgroundColor: '#1999CE' }}
          centerComponent={{ text: 'Reports', style: { color: '#fff' } }}
        />
      </View>
    );
  }
}

export default Reports;
