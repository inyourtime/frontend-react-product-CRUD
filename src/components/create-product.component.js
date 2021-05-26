import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            price: '',
            qty: '',
        }
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

        axios.post('/product', productsObject).then(res => 
            console.log(res.data)) 

        // console.log('Product Successfully Created')
        // console.log(`Name: ${this.state.name}`)
        // console.log(`Description: ${this.state.description}`)
        // console.log(`Price: ${this.state.price}`)
        // console.log(`Qty: ${this.state.qty}`)

        this.setState({
            name: '',
            description: '',
            price: '',
            qty: ''
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Create Product</h1>
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
                        Create Product
                    </Button>
                </Form>
            </div>
        )
    }
}
