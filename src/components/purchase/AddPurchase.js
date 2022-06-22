import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { BASE_URL } from '../../config/Constants'
import axios from 'axios'

function AddPurchase() {
    const [allUser, setAllUser] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [userId, setUserId] = useState();
    const [purchaseDate, setPurchaseDate] = useState();
    const [transcationId , setTransactionId] =useState();
    const current = new Date();
    var subtotal = 0;
    var total = 0;
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    let navigate = useNavigate();

    const productTemplate = { productId: "", quantity: "", buyPrice: "" }
    const [products, setProducts] = useState([productTemplate])

    //for dynamic form
    const addProduct = () => {
        setProducts([...products, productTemplate]);
    }

    const onChange = (e, index) => {
        const updatedProduct = products.map((product, i) =>
            index == i
                ? Object.assign(product, { [e.target.name]: e.target.value }) : product
        );
        setProducts(updatedProduct);
    }

    const removeProduct = (index) => {
        const filteredProduct = [...products];
        filteredProduct.splice(index, 1);
        setProducts(filteredProduct);
    }

    //for get all User
    const getAllUser = () => {
        axios.get(`${BASE_URL}/User`).then((response) => {
            // console.log(response.data);
            setAllUser(response.data);
        })
    }

    //for All Product
    const getAllProduct = () => {
        axios.get(`${BASE_URL}/Product`).then((response) => {
            // console.log(response.data);
            setAllProduct(response.data);
        })
    }

    useEffect(() => {
        getAllUser();
        getAllProduct();
    }, [])


    const checkValue = () => {
        console.log(total);
    }


    const addPurchase = async () => {
        total = 0;
        const objPurchase = {
            userId: userId,
            purchaseDate: purchaseDate,
            totalPayment: "",
            createdAt: currentDate,
            updatedAt: currentDate,
        }

        await axios.post(`${BASE_URL}/Purchase`, objPurchase).then((response) => {

            const objTransaction = {
                purchaseId: response.data.purchaseId,
                purchaseReturnId: "",
                salesId: "",
                salesReturnId: "",
                type: "Debit",
                transactionDate: response.data.purchaseDate,
                amount: response.data.totalPayment,
                remark: "Purchase",
                createdAt: currentDate,
                updatedAt: currentDate,
            }

            axios.post(`${BASE_URL}/Transaction`, objTransaction).then((transationResponse) => {
                console.log(transationResponse.data.transcationId);
                setTransactionId(transationResponse.data.transcationId);
                products.map(async (product) => {
                    const objProduct = {
                        purchaseId: response.data.purchaseId,
                        productId: product.productId,
                        buyPrice: product.buyPrice,
                        quantity: product.quantity,
                        createdAt: currentDate,
                        updatedAt: currentDate,
                    }
    
                    await axios.get(`${BASE_URL}/Product/${product.productId}`).then((productResponse) => {
                        subtotal = (parseInt(productResponse.data.price) * parseInt(product.quantity));
                        objProduct.buyPrice = subtotal;
                        console.log(subtotal);
                        total = total + subtotal;
                    })
    
                    await axios.post(`${BASE_URL}/PurchaseDetail`, objProduct).then((purchaseDetailres) => {
    
                        const EditPurchase = {
                            purchaseId : response.data.purchaseId,
                            userId: userId,
                            purchaseDate: purchaseDate,
                            totalPayment: total,
                            createdAt: currentDate,
                            updatedAt: currentDate,
                        }
        
                        axios.put(`${BASE_URL}/Purchase/${response.data.purchaseId}`, EditPurchase).then((editPurchase) => {
                            console.log("edit purchsase", editPurchase);
                        })
                        console.log(purchaseDetailres);
                        const EditTransaction = {
                            transcationId : transationResponse.data.transcationId,
                            purchaseId: response.data.purchaseId,
                            purchaseReturnId: "",
                            salesId: "",
                            salesReturnId: "",
                            type: "Debit",
                            transactionDate: response.data.purchaseDate,
                            amount: total,
                            remark: "Purchase",
                            createdAt: currentDate,
                            updatedAt: currentDate,
                        }
            
                        axios.put(`${BASE_URL}/Transaction/${transationResponse.data.transcationId}`, EditTransaction).then((editTransationResponse) => {
                            console.log(editTransationResponse.data);
                        })
                    })
                })
            })
        })

        navigate("/Purchase");
    }

    return (
        <>
            <Helmet>
                <title>Mr.Refill | Add Purchase</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-lg-3'>
                            </div>
                            <div className='col-lg-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add Purchase</h4>
                                        <form >

                                            <div className="form-group">
                                                <label className="control-label">User Name</label>
                                                <select className="form-control select2-search-disable" value={userId} onChange={(e) => setUserId(e.target.value)}>
                                                    <option disabled={true} selected >Select User </option>
                                                    {
                                                        allUser.map((obj, i) => {
                                                            return (
                                                                <option value={obj.userId} key={i}>{obj.name} - {obj.companyName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            {products.map((product, index) => (
                                                <div className="form-outline" key={index}>
                                                    <div className='row'>
                                                        <div className="form-group col-lg-5">
                                                            <label className="control-label">Product Name</label>
                                                            <select name='productId' className="form-control select2-search-disable"
                                                                value={product.productId} onChange={e => onChange(e, index)}>
                                                                <option disabled={true} selected value="">Select Product </option>
                                                                {
                                                                    allProduct.map((obj, i) => {
                                                                        return (
                                                                            <option value={obj.productId} key={i}>{obj.productName}</option>
                                                                        )

                                                                    })
                                                                }
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-lg-5">
                                                            <label htmlFor="quantity">Quantity</label>
                                                            <input type="text" name='quantity' id="quantity" value={product.quantity} onChange={e => onChange(e, index)} className="form-control" placeholder='Enter Quantity..' autoComplete='off' />
                                                        </div>

                                                        {
                                                            index ?
                                                                <div className="form-group col-md">
                                                                    <button type='button' className="btn btn-danger  btn-md " style={{ padding: "5px", margin: "5px" }} onClick={() => removeProduct(index)} >Remove</button>
                                                                </div>
                                                                : null
                                                        }
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="form-group">
                                                <button type='button' className="btn btn-info" onClick={addProduct} >Add </button>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label>Date</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-provide="datepicker" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
                                                    <div class="input-group-append">
                                                        <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-end">
                                                <div className="col-sm-9">
                                                    <div>
                                                        <button type='button' onClick={addPurchase} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Purchase</button>
                                                        <NavLink to="/Purchase" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default AddPurchase