import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import TextField from './TextField';

const SimpleForm = () => {
  const handleButtonPress = () => {
    Alert.alert('Submitted!!!');
  };

  return (
    <View style={styles.container}>
      <TextField label="Nome" />
      <TextField label="Idade" keyboardType="numeric" />
      <TextField label="Peso" keyboardType="numeric" />
      <View style={styles.button}>
        <Button title="Submit" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  button: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
  },
});

export default SimpleForm;
