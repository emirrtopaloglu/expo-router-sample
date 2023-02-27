import { useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 40, marginBottom: 20 }}>Hey, I am a page!</Text>
      <Text
        style={{
          fontSize: 24,
          backgroundColor: "#008080",
          paddingHorizontal: 40,
          paddingVertical: 20,
          borderRadius: 8,
          color: "#fff",
        }}
        onPress={() => router.push("/")}
      >
        Go back home
      </Text>
    </SafeAreaView>
  );
};

export default Page;
