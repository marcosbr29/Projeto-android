import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme/colors';
import { styles } from './styles';

const TABS = [
  { key: 'inicio', label: 'Início', icon: 'home' },
  { key: 'historico', label: 'Histórico', icon: 'list' },
  { key: 'relatorios', label: 'Relatórios', icon: 'pie-chart' },
  { key: 'config', label: 'Config.', icon: 'settings-outline' },
];

export default function BottomNav({ activeTab = 'inicio', onChangeTab }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onChangeTab && onChangeTab(tab.key)}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={isActive ? colors.primary : colors.textGray}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}