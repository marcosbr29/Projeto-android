import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
  },
  expensesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
  },
  seeAll: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
  expensesList: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  addButtonText: {
    color: colors.white,
    fontWeight: '700',
    marginLeft: 6,
  },
});