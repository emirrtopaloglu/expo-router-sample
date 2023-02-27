import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 40, marginBottom: 20 }}>
        Hello, Expo Router!
      </Text>
      <Link
        style={{
          fontSize: 24,
          backgroundColor: "#008080",
          paddingHorizontal: 40,
          paddingVertical: 20,
          borderRadius: 8,
          color: "#fff",
        }}
        href="/page"
      >
        Go to page
      </Link>
    </SafeAreaView>
  );
};

export default App;
