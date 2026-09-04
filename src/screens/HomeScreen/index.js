import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import BalanceCard from '../../components/BalanceCard';
import BottomNav from '../../components/BottomNav';
import ExpenseItem from '../../components/ExpenseItem';
import Header from '../../components/Header';
import { colors } from '../../theme/colors';
import { styles } from './styles';

// Dados de exemplo — tenho que trocar depois por dados vindos de uma API/estado global
const RECENT_EXPENSES = [
  {
    id: '1',
    icon: 'fast-food-outline',
    iconBg: colors.iconFoodBg,
    title: 'Alimentação',
    date: '16/08/2026',
    value: 35,
  },
  {
    id: '2',
    icon: 'car-outline',
    iconBg: colors.iconTransportBg,
    title: 'Transporte',
    date: '16/08/2026',
    value: 20,
  },
  {
    id: '3',
    icon: 'game-controller-outline',
    iconBg: colors.iconLeisureBg,
    title: 'Lazer',
    date: '15/08/2026',
    value: 50,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Header userName="Marcos" month="Agosto" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard balance={1250} income={2000} expense={750} />

        <View style={styles.expensesHeader}>
          <Text style={styles.expensesTitle}>Despesas recentes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.expensesList}>
          {RECENT_EXPENSES.map((item) => (
            <ExpenseItem
              key={item.id}
              icon={item.icon}
              iconBg={item.iconBg}
              title={item.title}
              date={item.date}
              value={item.value}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav activeTab="inicio" />
    </View>
  );
}