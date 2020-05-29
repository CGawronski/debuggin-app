import {
  StyledButton,
  SecondaryButton,
} from "../../../StyledComponents/Buttons";

import React from "react";

export const Buttons = () => {
  return (
    <>
      <StyledButton className="mr-2">Submit</StyledButton>{" "}
      <SecondaryButton>Cancel</SecondaryButton>
    </>
  );
};
