import Login from "./pages/Login";
import Articles from "./pages/Articles";
import News from "./pages/News";

function App() {
  return (
    <div className="container">

  <header className="app-header">
    <h1>Dedicated News UI</h1>
    <p>Manage articles and view external news</p>
  </header>

  <Login />
  <Articles />
  <News />

</div>
  );
}

export default App;