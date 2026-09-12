import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme/colors';

export const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  cancelButton: {
    backgroundColor: colors.background,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '600',
  },
});