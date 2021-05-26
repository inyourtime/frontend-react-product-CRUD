import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateProduct from './components/create-product.component'
import EditProduct from './components/edit-product.component'
import ProductsList from './components/products-list.component'

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar bg="dark" variant="dark">
                    <Container>
                        <NavBar.Brand>
                            <Link to={"/create-product"} className="nav-link">
                                React product frontend
                            </Link>
                        </NavBar.Brand>
                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to={"/create-product"} className="nav-link">
                                    Create Product
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to={"/products-list"} className="nav-link">
                                    Products List
                                </Link>
                            </Nav>
                        </Nav>
                    </Container>
                </NavBar>

                <Container>
                    <Row>
                        <Col md="12">
                            <div className="wrapper">
                                <Switch>
                                    <Route exact path="/" component={CreateProduct} />
                                    <Route path="/create-product" component={CreateProduct} />
                                    <Route path="/edit-product/:id" component={EditProduct} />
                                    <Route path="/products-list/" component={ProductsList} />
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

export default App;
