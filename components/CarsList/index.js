import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from '../../assets/cars'
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>

      <FlatList // Tip : Common method used for render list of items
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        // Tip : Used to snap to aligment, Similarly like in TikTok
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />

    </View>
  );
};

export default CarsList;
