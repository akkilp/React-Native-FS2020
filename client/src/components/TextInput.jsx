import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    error: {
        borderWidth:1,
        borderColor: 'red',
    }

});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
      style,
      error && styles.error,
    ];

  return <NativeTextInput selectTextOnFocus={error ? true : false} style={textInputStyle} {...props} />;
};

export default TextInput;