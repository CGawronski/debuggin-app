import React from "react";

import {
  StyledButton,
  SecondaryButton,
} from "../../../StyledComponents/Buttons";

export const FormButtons = () => {
  return (
    <>
      <StyledButton className="mr-2 styled" type="submit">
        Submit
      </StyledButton>{" "}
      <SecondaryButton>Cancel</SecondaryButton>
    </>
  );
};
