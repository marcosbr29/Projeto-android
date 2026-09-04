import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  iconColor: {
    color: colors.textDark,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
  },
  date: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.expense,
  },
});