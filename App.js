import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Platform,
} from "react-native";
import { Button, TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
      />
      <Text style={{margin: 15}}></Text>
      <Text>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Senha</Text>
      <TextInput style={styles.input}></TextInput>
      <View style={styles.button}>
        <Button title="Logar" color="#d84545"></Button>
        <Text style={{margin: 15}}></Text>
        <Button title="Cadastre-se" color="#d84545"></Button>
      </View>
      <Text style={{margin: 15}}>esqueceu a senha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  button: {
    width: 200,
    marginTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
