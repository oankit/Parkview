import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.parkviewUi4Parent, styles.unionIconPosition]}>
        <View style={[styles.parkviewUi4, styles.parkviewLayout]}>
          <Image
            style={[
              styles.property1defaultIcon,
              styles.property1defaultIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/property-1default.png")}
          />
          <Image
            style={[
              styles.property1variant2Icon,
              styles.property1variant2IconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/property-1default.png")}
          />
          <Image
            style={[
              styles.property1variant3Icon,
              styles.property1variant3IconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/property-1default.png")}
          />
        </View>
        <View style={[styles.parkviewUi5, styles.parkviewLayout]}>
          <Image
            style={styles.property1defaultIconPosition}
            resizeMode="cover"
            source={require("../assets/property-1default1.png")}
          />
          <Image
            style={styles.property1variant2IconPosition}
            resizeMode="cover"
            source={require("../assets/property-1default1.png")}
          />
          <Image
            style={styles.property1variant3IconPosition}
            resizeMode="cover"
            source={require("../assets/property-1default1.png")}
          />
        </View>
        <Image
          style={[styles.unionIcon, styles.unionIconPosition]}
          resizeMode="cover"
          source={require("../assets/union.png")}
        />
      </View>
      <View
        style={[styles.property1defaultParent, styles.property1defaultLayout]}
      >
        <Image
          style={[styles.property1defaultIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default2.png")}
        />
        <Image
          style={[styles.property1variant2Icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default2.png")}
        />
        <Image
          style={[styles.property1variant3Icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default2.png")}
        />
        <Image
          style={[styles.property1variant4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default2.png")}
        />
        <Image
          style={[styles.property1variant5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default2.png")}
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
          style={[styles.property1defaultIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default3.png")}
        />
        <Image
          style={[styles.property1variant2Icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default3.png")}
        />
        <Image
          style={[styles.property1variant3Icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default3.png")}
        />
        <Image
          style={[styles.property1variant4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default3.png")}
        />
        <Image
          style={[styles.property1variant5Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1default3.png")}
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
  unionIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  parkviewLayout: {
    overflow: "hidden",
    width: 298,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
    height: 605,
  },
  property1defaultIconPosition: {
    height: 182,
    width: 262,
    left: 20,
    top: 20,
    position: "absolute",
  },
  property1variant2IconPosition: {
    top: 202,
    height: 182,
    width: 262,
    left: 20,
    position: "absolute",
  },
  property1variant3IconPosition: {
    top: 384,
    height: 182,
    width: 262,
    left: 20,
    position: "absolute",
  },
  property1defaultLayout: {
    height: 511,
    width: 81,
    top: 26,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconLayout: {
    height: 48,
    width: 48,
    left: 20,
    position: "absolute",
  },
  property1defaultIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  property1variant2Icon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  property1variant3Icon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  parkviewUi4: {
    left: 298,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  parkviewUi5: {
    left: 227,
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  parkviewUi4Parent: {
    width: 525,
    height: 605,
  },
  property1defaultIcon2: {
    top: 20,
    width: 48,
  },
  property1variant2Icon2: {
    top: 100,
  },
  property1variant3Icon2: {
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
    left: 122,
  },
  property1defaultGroup: {
    left: 314,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 605,
  },
});

export default Group;
