import React from 'react'
import Navbar from '../components/Navbar'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {

    return(
        <>
            <div className="navbar">
                <Navbar/>
                <div>
                    <EmptyCart/>
                </div>
            </div>
        </>
    )

}
export default Cart 