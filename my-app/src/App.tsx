import Greeting from "./components/Greeting";
import UserList from "./components/UserList";
import ConditionalRender from "./components/ConditionalRender";
import ProductList from "./components/ProductList";


function App() {
  

  return (
    <>
      <Greeting />
      <UserList />
      <ConditionalRender isLoggedIn={true} username="Lorita"/>
      <ProductList />
    </>
  )
}

export default App
