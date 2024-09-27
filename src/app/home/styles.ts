import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamily.extrabold,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[300],
    fontFamily: fontFamily.medium,
  },

  ticket: {
    width: '100%',
    borderRadius: 22,
    overflow: 'hidden',
    paddingBottom: 24,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
  },
  flight: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 52,
  },
  duration: {
    alignItems: 'center',
  },
  hours: {
    fontSize: 14,
    color: colors.gray[800],
    fontFamily: fontFamily.regular,
  },
  label: {
    fontSize: 12,
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontFamily: fontFamily.regular,
  },
  name: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  details: {
    marginTop: 52,
  },
  inline: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    width: '100%',
    padding: 20,
    gap: 22,
    flexDirection: 'row',
  },
  footerContent: {
    flex: 1,
    gap: 24,
  }
});
