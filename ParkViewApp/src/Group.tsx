import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.background1Parent}>
      <Image
        style={styles.background1Icon}
        resizeMode="cover"
        source={require("../assets/background-1.png")}
      />
      <View
        style={[styles.property1defaultParent, styles.property1defaultLayout]}
      >
        <Image
          style={[styles.property1defaultIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default.png")}
        />
        <Image
          style={[styles.property1variant2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default.png")}
        />
        <Image
          style={[styles.property1variant3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default.png")}
        />
        <Image
          style={[styles.property1variant4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default.png")}
        />
        <Image
          style={[styles.property1variant5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default.png")}
        />
        <Image
          style={[styles.property1variant6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1variant6.png")}
        />
      </View>
      <View
        style={[styles.property1defaultGroup, styles.property1defaultLayout]}
      >
        <Image
          style={[styles.property1defaultIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default1.png")}
        />
        <Image
          style={[styles.property1variant2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default1.png")}
        />
        <Image
          style={[styles.property1variant3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default1.png")}
        />
        <Image
          style={[styles.property1variant4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default1.png")}
        />
        <Image
          style={[styles.property1variant5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default1.png")}
        />
        <Image
          style={[styles.property1variant6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1variant61.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    overflow: "hidden",
    height: 511,
    width: 81,
    borderRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 48,
    width: 48,
    left: 20,
    position: "absolute",
  },
  background1Icon: {
    left: 0,
    width: 555,
    top: 0,
    position: "absolute",
    height: 547,
  },
  property1defaultIcon: {
    top: 20,
  },
  property1variant2Icon: {
    top: 100,
  },
  property1variant3Icon: {
    top: 206,
  },
  property1variant4Icon: {
    top: 292,
  },
  property1variant5Icon: {
    top: 378,
  },
  property1variant6Icon: {
    top: 464,
  },
  property1defaultParent: {
    left: 135,
  },
  property1defaultGroup: {
    left: 328,
  },
  background1Parent: {
    flex: 1,
    width: "100%",
    height: 547,
  },
});

export default Group;
