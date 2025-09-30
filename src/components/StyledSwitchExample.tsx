import React from "react";
import * as Switch from "@radix-ui/react-switch";
import styled from "styled-components";

// css in js styling
const StyledSwitch = styled(Switch.Root)`
  width: 60px;
  height: 25px;
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.2s;
  cursor: pointer;
  background-color: #87ceeb;
  background-image: url("https://twemoji.maxcdn.com/v/latest/svg/2601.svg");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;

  &[data-state="checked"] {
    background-color: #0f172a;
    background-image: url("https://twemoji.maxcdn.com/v/latest/svg/2b50.svg");
    background-position: left 8px center;
  }

  &[data-state="checked"] {
    background-color: #2563eb; // bg-blue-600
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5); // focus ring
  }
`;

const StyledThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 0.2s;
  transform: translateX(2px);
  &[data-state="checked"] {
    transform: translateX(36px);
  }

  &::before {
    content: "🌞";
  }

  &[data-state="checked"] {
    transform: translateX(36px);

    &::before {
      content: "🌜";
    }
  }
`;

const StyledSwitchExample: React.FC = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <label htmlFor="dark-mode">dark mode</label>
      <StyledSwitch
        id="dark-mode"
        checked={enabled}
        onCheckedChange={setEnabled}
      >
        <StyledThumb />
      </StyledSwitch>
    </div>
  );
};

export default StyledSwitchExample;
