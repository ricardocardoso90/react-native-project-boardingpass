import { Home } from '@/app/home';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold, Poppins_500Medium, Poppins_800ExtraBold });

  return (
    !fontsLoaded
      ? null
      : <Home />
  );
};