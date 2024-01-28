import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const Map = () => {
  return (
    <View style={styles.Map1}>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={styles.componentSetParent}>
          <View
            style={[
              styles.property1defaultParent,
              styles.property1defaultLayout,
            ]}
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
              source={require("../assets/property-1default.png")}
            />
          </View>
          <View
            style={[
              styles.property1defaultGroup,
              styles.property1defaultLayout,
            ]}
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
              source={require("../assets/property-1default1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 384,
    width: 270,
    position: "absolute",
    top: "50%", // Center vertically
    marginTop: -192, // Move up by half of the height
  },
  groupPosition: {
    left: "50%", // Center horizontally
    marginLeft: -135, // Move left by half of the width
    top: 0,
  },
  property1defaultLayout: {
    height: 372,
    width: 69,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 39,
    width: 39,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    height: 384,
    width: 270,
    position: "absolute",
  },
  property1defaultIcon: {
    top: 20,
  },
  property1variant2Icon: {
    top: 76,
  },
  property1variant3Icon: {
    top: 132,
  },
  property1variant4Icon: {
    top: 187,
  },
  property1variant5Icon: {
    top: 244,
  },
  property1variant6Icon: {
    top: 301,
  },
  property1defaultParent: {
    top: 3,
    left: 113,
  },
  property1defaultGroup: {
    left: 0,
    top: 0,
  },
  componentSetParent: {
    left: 42,
    width: 182,
    height: 375,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: "30%", // Adjust the top position to move it up
    left: "50%", // Center horizontally
    marginLeft: -135, // Move left by half of the width
  },
  Map1: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Map;
