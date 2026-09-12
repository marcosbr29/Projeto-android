import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function SaveButton({ label = 'Salvar', onPress }) {
  return (
    <TouchableOpacity style={styles.saveButton} onPress={onPress}>
      <Text style={styles.saveButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function CancelButton({ label = 'Cancelar', onPress }) {
  return (
    <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
      <Text style={styles.cancelButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}