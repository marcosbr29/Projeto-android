import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import { SaveButton, CancelButton } from '../../components/FormButtons';
import { colors } from '../../theme/colors';
import { styles } from './styles';

export default function AddExpenseScreen({ onBack, onSave }) {
  const [description, setDescription] = useState('Mercado');
  const [value, setValue] = useState('150,00');
  const [category, setCategory] = useState('Alimentação');
  const [date, setDate] = useState('16/08/2026');

  function handleSave() {
    onSave && onSave({ description, value, category, date });
  }

  return (
    <View style={styles.screen}>
      <FormHeader title="Nova Despesa" onBack={onBack} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FormField
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          placeholder="Ex: Mercado"
        />

        <FormField
          label="Valor"
          value={value}
          onChangeText={setValue}
          placeholder="R$ 0,00"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoria</Text>
        <TouchableOpacity style={styles.selectWrapper}>
          <Text style={styles.selectText}>{category}</Text>
          <Ionicons name="chevron-down" size={18} color={colors.textGray} />
        </TouchableOpacity>

        <FormField
          label="Data"
          value={date}
          onChangeText={setDate}
          placeholder="DD/MM/AAAA"
          rightIcon={
            <Ionicons name="calendar-outline" size={20} color={colors.textGray} />
          }
        />
      </ScrollView>

      <View style={styles.footer}>
        <SaveButton onPress={handleSave} />
        <CancelButton onPress={onBack} />
      </View>
    </View>
  );
}