import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import Field from '../../atoms/Field';
import Button from '../../atoms/Button';
import SCREENS from '../../../routes/endpoints';

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .matches(/^[aA-zZаА-яЯ\s]+$/u, 'Only alphabets are allowed for this field ')
      .required(),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be at most 16 characters')
      .required(),
  })
  .required();

const LoginForm: React.FC = () => {
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInput) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
    history.push(SCREENS.SCREEN_CHAT);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Field
            label="User name"
            type="text"
            placeholder="Input user name"
            id="username"
            errorMessage={errors.username?.message}
            // eslint-disable-next-line react/jsx-boolean-value
            invalid={true}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Field
            label="Password"
            type="text"
            placeholder="Input password"
            id="password"
            errorMessage={errors.password?.message}
            invalid={!isValid}
            {...field}
          />
        )}
      />
      <Button
        onClick={() => {
          return undefined;
        }}
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
