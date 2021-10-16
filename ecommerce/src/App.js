import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
