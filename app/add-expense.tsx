import React from 'react';
import { useRouter } from 'expo-router';
import AddExpenseScreen from '../src/screens/AddExpenseScreen';

type ExpenseData = {
  description: string;
  value: string;
  category: string;
  date: string;
};

export default function AddExpense() {
  const router = useRouter();

  return (
    <AddExpenseScreen
      onBack={() => router.back()}
      onSave={(data: ExpenseData) => {
        console.log('Despesa salva:', data);
        router.back();
      }}
    />
  );
}