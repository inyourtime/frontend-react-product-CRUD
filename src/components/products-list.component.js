import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ProductsTableRow from './ProductsTableRow'


export default class ProductsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/product')
            .then(res => {
                this.setState({
                    products: res.data
                })

            })
            .catch((error) => {
                console.log(error)
            })
    }

    DataTable = () => {
        return this.state.products.map((res, i) => {
            return <ProductsTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper mt-5">
                <h1 className="mb-3">Products List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
