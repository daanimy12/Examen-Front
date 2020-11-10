import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal'
import { ProductsContext } from '../Global/ProductsContext'
import AddButton from './AddButton'
import Form from './Form'
import { Link } from 'react-router-dom'
import { postProducts } from '../Services/index'
import { getProducts } from '../Services/index'
import Loading from './Loading'
import Banner from './Banner'


const Products = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { products } = useContext(ProductsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const TableRows = () => {
        return products.map(p => (
            <tr key={p.id}>
                <td>{p.items[0].sku}</td>
                <td>{p.items[0].name}</td>
                <td>{p.items[0].quantity}</td>
                <td>{p.items[0].price}</td>
                <td>
                    <Link to={`/Details/${p.id}`}>
                        <button className="button is-hovered button is-small">more</button>
                    </Link>
                </td>
            </tr>
        ))
    }


    async function addProduct(item) {

        let data = {
            "order": {
                "items": [
                    {
                        "discount": "0",
                        "taxable": "false",
                        "sku": item.sku,
                        "price": item.price,
                        "name": item.name,
                        "variantId": "28921600409674",
                        "quantity": item.quantity
                    }
                ]
            }
        }

        const response = await postProducts(data);
        setModalIsOpen(false)

        return response;
    }


    return (
        <div>
               <Banner />
            <div className="container">
                <div className="btn-add">
                    <AddButton onClick={() => setModalIsOpen(true)} />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>sku</th>
                                <th>name</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableRows()}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Modal
                        ariaHideApp={false}
                        isOpen={modalIsOpen}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{

                            overlay: {
                                backgroundColor: 'grey'
                            }

                        }}
                    >
                        <div style={{ textAlign: "right" }}>
                            <button className="delete" onClick={() => setModalIsOpen(false)}></button>
                        </div>
                        <Form addProduct={addProduct} />
                    </Modal>
                </div>
            </div>
        </div>


    )
}
export default Products;