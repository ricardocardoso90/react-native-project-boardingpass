import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fontFamily.medium,
  }
});