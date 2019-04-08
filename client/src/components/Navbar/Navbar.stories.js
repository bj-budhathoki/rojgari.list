import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Navbar from "./Navbar";
const NavDecorator = storyFn => (
  <div style={{ background: "#339" }}>{storyFn()}</div>
);
addDecorator(NavDecorator);
storiesOf("navbar", module).add("default", () => <Navbar />);
