
import "./styles/global.css";

import AppProvider from "./providers/appProvider";
import { Messages } from "./features/messages";



function App() {
  return (
    <AppProvider>
      <Messages />
    </AppProvider>
  );
}

export default App;
