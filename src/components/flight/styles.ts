import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 42,
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginTop: -10,
  }
});