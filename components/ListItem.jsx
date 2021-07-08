import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
//import fonts from "../../styles/fonts";
//import colors from "../../styles/colors";
//import { isNullOrUndefined } from "util";
//import EntypoIcons from "react-native-vector-icons/Entypo";
//import CachedImage from "./CachedImage";

export default ListItem = ({
  user,
  avatar,
  image,
  caption,
  style = {},
  onPress,
  showBottomLine,
  useDefaultPadding,
}) => {
  let _leftObject =
      <Image source={require("../assets/images/food.jpg")} style={pageStyle.baseImage} resizeMode='contain' />

  let customStyle = { ...pageStyle.bottomLine };

  customStyle.paddingVertical = 10;

  return (
    <View style={customStyle}>
      <TouchableOpacity
        disabled={(onPress)}
        onPress={onPress && onPress}
        style={[pageStyle.container, style]}
      >
        {_leftObject && (
          <View style={pageStyle.leftContainer}>{_leftObject}</View>
        )}
        <View style={[pageStyle.middleContainer]}>
          {caption}{caption}
        </View>
        {_leftObject && (
          <View style={pageStyle.rightContainer}>{_leftObject}</View>
        )}
      </TouchableOpacity>

      <View style={pageStyle.container}>
          {_leftObject && (
            <View style={pageStyle.leftContainer} />
          )}
          <View style={[pageStyle.middleContainer]}>
            <Text>YOOO</Text>
          </View>


          {_leftObject && (
            <View style={pageStyle.rightContainer} />
          )}
        </View>
      

    </View>
  );
};

const pageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",    
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#A4B494'
  },
  leftContainer: {
    width: '15%',
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 5,
    paddingLeft: 10
    // , backgroundColor: "red"
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 5
    // , backgroundColor: 'green'
  },
  rightContainer: {    
    minWidth: '15%',
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 5,
    paddingRight: 10
    // , backgroundColor: 'blue'
  },
  baseImage: {
    width: 40,
    height: 30
  }
});