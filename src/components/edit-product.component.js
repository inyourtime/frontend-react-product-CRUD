import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class EditProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            price: '',
            qty: '',
        }
    }

    componentDidMount() {

        axios.get('/product/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    qty: res.data.qty
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeProductName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeProductDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    onChangeProductPrice = (e) => {
        this.setState({ price: e.target.value })
    }

    onChangeProductQty = (e) => {
        this.setState({ qty: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const productsObject = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            qty: this.state.qty
        }

        axios.put('/product/' + this.props.match.params.id, productsObject).then((res) => {
            console.log(res.data)
            console.log('Product Successfully Updated')
        }).catch((error) => {
            console.log(error)
        })

        // Redirect to product list
        this.props.history.push('/products-list')
    }
    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Update Product</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName} />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Description </Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductDescription} />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={this.state.price} onChange={this.onChangeProductPrice} />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Qty</Form.Label>
                        <Form.Control type="text" value={this.state.qty} onChange={this.onChangeProductQty} />
                    </Form.Group>

                    <Button variant="success" size="lg" type="submit">
                        Update Product
                    </Button>
                </Form>
            </div>
        )
    }
}
