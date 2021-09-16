import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

const FormExample = () => {
  //TODO: Add useForm hook

  //TODO: Add form fields registration

  //TODO: Set fields values at onChangeText

  //TODO: Add submission handler

  //TODO: Add form validation

  return (
    <Layout style={styles.container} level="1">
      <Layout level="3" style={styles.valueContainer}>
        <Text category="h1">0</Text>
      </Layout>

      <Input style={styles.input} placeholder="Name" />
      <Input style={styles.input} placeholder="Height (m)" />
      <Input style={styles.input} placeholder="Weight (kg)" />

      <Button appearance="outline" status="primary" style={styles.button}>
        Calculate
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueContainer: {
    width: '100%',
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    width: '100%',
  },
});

export default FormExample;
