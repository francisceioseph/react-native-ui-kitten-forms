import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import * as yup from 'yup';
import InputField from './InputField';

type TFormData = {
  name: string;
  weight: string;
  height: string;
};

const FormExample = () => {
  const validator = yup.object().shape({
    name: yup
      .string()
      .required('Field name is required')
      .min(3, 'Field name has a min size of 3'),
    height: yup.number().required('Field height is required'),
    weight: yup.number().required('Field weight is required'),
  });

  const [imc, setImc] = useState('0');

  const {register, handleSubmit, reset, control} = useForm({
    resolver: yupResolver(validator),
  });

  const onSubmitSucceeds = (data: TFormData) => {
    const weight = Number(data.weight);
    const height = Number(data.height);
    const imcResult = weight / Math.pow(height, 2);

    setImc(imcResult.toFixed(2));

    reset({
      name: '',
      weight: '',
      height: '',
    });
  };

  useEffect(() => {
    register('name');
    register('weight');
    register('height');
  }, [register]);

  return (
    <Layout style={styles.container} level="1">
      <Layout level="3" style={styles.valueContainer}>
        <Text category="h1">{imc}</Text>
      </Layout>

      <InputField name="name" placeholder="Name" control={control} />
      <InputField name="weight" placeholder="Weight (kg)" control={control} />
      <InputField name="height" placeholder="Height (m)" control={control} />

      <Button
        style={styles.button}
        appearance="outline"
        status="primary"
        onPress={handleSubmit(onSubmitSucceeds)}>
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
  button: {
    width: '100%',
  },
});

export default FormExample;
