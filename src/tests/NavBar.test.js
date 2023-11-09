import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AuthContext } from "../Context/AuthContext";  // Import the real AuthContext

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AuthContext> {/* Use the real AuthContext here */}
          <NavBar />
        </AuthContext>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
