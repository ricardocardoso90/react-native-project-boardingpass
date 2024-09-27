import { styles } from "./styles";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

export function Flight({ label, value }: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
};