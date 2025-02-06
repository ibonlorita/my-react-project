import Greeting from "./components/Greeting";
import UserList from "./components/UserList";
import ConditionalRender from "./components/ConditionalRender";


function App() {
  

  return (
    <>
      <Greeting />
      <UserList />
      <ConditionalRender isLoggedIn={true} username="Lorita"/>
    </>
  )
}

export default App
