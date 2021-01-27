import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/index";

const CarItem = (props) => {

  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>  
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton type="primary" />
        <StyledButton type="secondary" />
      </View>

    </View>
  );
};

export default CarItem;
