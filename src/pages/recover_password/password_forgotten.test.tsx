import React from "react";
import renderer from "react-test-renderer";
import PasswordForgotten from "./password_forgotten";

it("renders correctly", () => {
  const tree = renderer
    .create(<PasswordForgotten></PasswordForgotten>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
