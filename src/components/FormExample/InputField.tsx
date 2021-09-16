import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import BaseField from './BaseField';

interface TInputFieldProps extends TextInputProps {
  name: string;
  control: Control<FieldValues, object>;
}

const InputField = ({name, control, ...inputProps}: TInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState}) => {
        return (
          <BaseField
            {...inputProps}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error}
          />
        );
      }}
    />
  );
};

export default InputField;
