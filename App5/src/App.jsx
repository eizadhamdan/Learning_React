// conditional rendering --- It allows us to control what gets renderede in our application based
// on certain conditions (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx";


function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Eizad Hamdan"/>
    </>
  );
}

export default App
