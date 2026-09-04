import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginTop: -50,
    borderRadius: 20,
    padding: spacing.lg,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 13,
    color: colors.textGray,
    marginBottom: 4,
  },
  balance: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textDark,
  },
  divider: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginVertical: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  income: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.income,
  },
  expense: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.expense,
  },
});