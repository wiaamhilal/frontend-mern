import React from "react";
import styled from "styled-components";
const Settings = () => {
  return (
    <Main className="container">
      <Box>
        <h2 class="m-0">site control</h2>
        <p class="text-secondary fs-14 mt-2">
          this is control site for proformence
        </p>
        <div class="on-off d-flex align-itmes-center justify-content-center mb-4">
          <div>
            <span>website control</span>
            <span class="d-block fs-14 text-secodary mt-1">
              open and close website type the reason
            </span>
          </div>
          <label for="toggle">
            <input
              class="toggle-checkbox"
              type="checkbox"
              checked=""
              id="toggle"
            />
            <div class="toggle-switch"></div>
          </label>
        </div>
        <textarea
          class="c-grey fs-14 p-10"
          name=""
          placeholder="close message content"
        ></textarea>
      </Box>
      <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
      <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
      <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
      <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
      <Box>ijijijijijijijjjijijijilklkllllllllllllllllllllllllllllllll</Box>
    </Main>
  );
};
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px;
  padding-top: 50px;
`;
const Box = styled.div`
  border-radius: 10px;
  padding: 20px;
`;
export default Settings;
