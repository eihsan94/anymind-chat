
import "./styles/global.css";

import AppProvider from "./providers/appProvider";
import { Chats } from "./features/chat";



function App() {
  return (
    <AppProvider>
      <Chats />
    </AppProvider>
  );
}

export default App;
