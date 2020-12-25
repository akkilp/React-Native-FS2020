import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../utils/theme';

import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';



const styles = StyleSheet.create({
  container:{
    display: 'flex',
    backgroundColor: theme.colors.secondary
  },
  input: {
    flexGrow: 1,
    padding: theme.paddings.itemPadding,
    margin: 20,
    marginBottom:0,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  },
  button: {
    flexGrow: 1,
    padding: theme.paddings.containerPadding,
    margin: theme.paddings.containerPadding,
    backgroundColor: theme.colors.effect,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be longer than 4 letters')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must be over 4 characters')
    .required('Password is required'),
});



const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async(values) => {
    const validCredentials = await signIn(values)
    if(validCredentials){
      history.push('/')
    }
  } 


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => onSubmit(values)}
        validationSchema={validationSchema}
      >
      {({handleSubmit}) => (
        <View style={styles.container}>
          <FormikTextInput style={styles.input} name='username' placeholder='Username'/>
          <FormikTextInput style={styles.input} secureTextEntry name='password' placeholder='Password'/>
          <TouchableWithoutFeedback  onPress={handleSubmit}>
            <View>
              <Text color='textSecondary' fontWeight='bold' style={styles.button}>Log in</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
      </Formik>
    </View>
  );
};

export default SignIn;