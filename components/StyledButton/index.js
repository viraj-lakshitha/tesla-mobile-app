import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

  const type =props.type;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
  const fontColor = type === 'primary' ? '#FFFFFF' : '#171A20'
  const contentText = type === 'primary' ? 'Custom Order' : 'Existing Inventory'


  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => {
          console.warn("Button Press Works !");
        }}
      >
        <Text style={[styles.text, {color: fontColor}]}>{contentText}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
