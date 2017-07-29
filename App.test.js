import React from "react";
import App from "./App";

import renderer from "react-test-renderer";
import { StyleSheet, Text, View } from "react-native";

describe("App.js", () => {
  it("renders without crashing", () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
