import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { HomePage } from "./Pages/Home";
import { Details } from "./Pages/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartPage } from "./Pages/Cart";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <BrowserRouter>
//           <Switch>
//             <Route exact path='/'>
//              <HomePage />
//             </Route>
//             <Route path='/Detail/:id'>
//              <Details />
//             </Route>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Detail/:id" component={Details} />
            <Route path="/Cart" children={<CartPage />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
