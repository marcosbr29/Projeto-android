import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  rightIcon,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B0B0B5"
          keyboardType={keyboardType}
        />
        {rightIcon}
      </View>
    </View>
  );
}