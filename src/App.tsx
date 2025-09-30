import { Theme } from "@radix-ui/themes";
import NotificationCenter from "./components/NotificationCenter";
import NotificationCenterStyled from "./components/NotificationCenterStyled";
import StyledSwitchExample from "./components/StyledSwitchExample";
import StyledSwitchCssModule from "./components/StyledSwitchCssModule";
// import AlertDialogExample from "./components/AlertDialogExample";

function App() {
  return (
    <Theme>
      <h1>hello world</h1>
      {/* <AlertDialogExample /> */}
      <NotificationCenter />
      <NotificationCenterStyled />
      <StyledSwitchExample />
      <StyledSwitchCssModule />
    </Theme>
  );
}

export default App;
