import {Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';

interface TBaseFieldProps extends Omit<TextInputProps, 'onChange'> {
  value: any;
  onChange: (text: string) => void;
  error?: {message: string};
}

const BaseField = ({
  value,
  error,
  onChange,
  ...textInputProps
}: TBaseFieldProps) => (
  <Layout style={styles.inputContainer}>
    <Input
      {...textInputProps}
      value={value}
      onChangeText={text => onChange(text)}
    />
    {error ? <Text style={styles.error}>{error.message}</Text> : null}
  </Layout>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
});

export default BaseField;
