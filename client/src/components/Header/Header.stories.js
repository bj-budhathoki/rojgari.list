import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Header from "./Header";
const styles = {
  fontSize: "62.5%"
};
const Decorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(Decorator);
storiesOf("header comp", module).add("default", () => <Header />);
