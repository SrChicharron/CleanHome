import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardTrabajos from "../../../components/CardTrabajos";

export default function PubLimpiezaprofunda() {
  const navigation = useNavigation();

  const handleLongPress = () => {
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CardTrabajos onLongPress={handleLongPress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  containerLinkAdd: {
    alignItems: "flex-end",
  },
  containerBtnLinkAdd: {
    borderRadius: 8,
    marginBottom: 16,
  },
  txtAdd: {
    color: "#A3A3A3",
    textDecorationLine: "underline",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});