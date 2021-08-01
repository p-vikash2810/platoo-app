import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photobooth from "./pages/Photobooth/Photobooth"
import TikTakToe from "./pages/TikTakToe/TikTakToe";

function App() {
  return (
    <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={TikTakToe} />
      <Route path="/TikTakToe" exact component={Photobooth} />
    </Switch>
    {/* <Footer /> */}
  </Router>
  );
}

export default App;
