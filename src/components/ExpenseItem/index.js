import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';

function formatMoney(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default function ExpenseItem({ icon, iconBg, title, date, value }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={18} color={styles.iconColor.color} />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.value}>{formatMoney(value)}</Text>
    </View>
  );
}