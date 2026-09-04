import { Text, View } from 'react-native';
import { styles } from './styles';

function formatMoney(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default function BalanceCard({ balance, income, expense }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.balance}>{formatMoney(balance)}</Text>

      <View style={styles.divider} />

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Receitas</Text>
          <Text style={styles.income}>{formatMoney(income)}</Text>
        </View>
        <View>
          <Text style={styles.label}>Despesas</Text>
          <Text style={styles.expense}>{formatMoney(expense)}</Text>
        </View>
      </View>
    </View>
  );
}