import React from "react";
import styles from "../styles/StyledSwitchCssModule.module.css";
import * as Switch from "@radix-ui/react-switch";

const StyledSwitchCssModule: React.FC = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <label htmlFor="dark-mode">dark mode</label>
      <Switch.Root
        id="dark-mode"
        checked={enabled}
        onCheckedChange={setEnabled}
        className={styles.SwitchRoot}
      >
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
    </div>
  );
};

export default StyledSwitchCssModule;
