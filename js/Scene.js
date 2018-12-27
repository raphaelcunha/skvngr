import React, { Component } from "react";
import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroAnimations,
} from "react-viro";

import Marker from "./Marker";

ViroARTrackingTargets.createTargets({
  qrcode: {
    source: require("./res/qrcode.png"),
    orientation: "Up",
    physicalWidth: 0.1,
  },
});

ViroAnimations.registerAnimations({
  rotateOverY: {
    properties: { rotateY: "+=270" },
    duration: 3000,
  },
  rotateOverZ: {
    properties: { rotateZ: "-=270" },
    duration: 3000,
  },
});

export default function Scene() {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#aaaaaa" />
      <Marker
        source={require("./res/xicara.obj")}
        resource={[require("./res/xicara.mtl")]}
      />
    </ViroARScene>
  );
}
