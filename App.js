import { View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
      </View>
      <Footer />
    </>
  );
}
