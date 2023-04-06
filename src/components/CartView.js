import '../Styles/App.sass'
import '../Styles/App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const CartWiew = () => {


    const { setShowCart,addProductToCart, cantidadXCarro, cartProducts, clear, removeProductToCart, setCantidadXCarro } = useContext(CartContext)

    // const {showCart,setShowCart} = useContext(CartContext)

    let total = 0
    let subtotal = 0
    let mostrar = true

    console.log("xxxxxxxxxxxxxxxxxxxxxxx", cartProducts)

    console.log("yyyyyyyyyyyyyyyyyyyyyyy", cantidadXCarro)
    

    const showCart = () => {
        if (mostrar === false) {
            mostrar = true
        } else {
            mostrar = false
        }
        console.log(mostrar)
    }

    const cerrarModalCart =() =>{
        setShowCart(false)
    }
    const calculandoElTotal = () => {
        cartProducts.map((product) => {

            subtotal = product.price * product.qty;
            total = subtotal + total
        })
    }







    return (<> 
         
        <>  

            {cartProducts.length !== 0 ? <>
                {calculandoElTotal()}
                {showCart()}
                <div class=" ">
                    {/* <button onClick={showCart} className='btncarro btn btn-secondary dropdown-toggle ' 
                        type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"> 

             
             </button> */}

                    <div class=" " aria-labelledby="dropdownMenuButton">
                        <div>
                            <div className='none'>
                                {total = 0}
                                {subtotal = 0}
                            </div>
                            {cartProducts.map((product) => {
                                return <>
                                    <div  className="cartviewxitem item-productxx margin hoverr">
                                        <img   style={{width:"50%"}}className="imgcart" src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                        {/* {namee} */}
                                        <div  >
                                            <h5 className='ptext subtitulo'>{product.title}</h5>

                                            <div className='none'>
                                                {subtotal = product.price * product.qty}
                                                {total = subtotal + total}


                                            </div>
                                            <div><h5 className='ptext subtitulo'>{product.qty} Unidades   Subtotal: {subtotal}  </h5>
                                        </div>

                                            <div style={{display:"flex"}}>
                                                <button className="btn btn-group2 bttn" onClick={() => removeProductToCart(product)}>Remover</button>



                                                <Link to={`/productos/${product.id}`}>
                                                    <button  onClick={cerrarModalCart}  className="btn btn-group2 bttn" >Agregar mas</button>
                                                </Link>

                                            </div>

                                        </div>     
                                      
                                    </div>

                                </>

                            })}
                            <div className="ajam">

                                <h3 className='item-productx margin float-left ptext subtitulo'>Total del Carro: {total}</h3>
                                <Link to={`/cart`}>
                                    <button  onClick={cerrarModalCart} className="btn btnp btn-group2 bttn" > VER MI CARRO</button>
                                </Link>
                                <button className="btn btn-group2 bttn" onClick={clear}>Limpiar Carrito</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </> : <div class=" ">
                

                   

                <div class=" " id="nadda" aria-labelledby="dropdownMenuButton">
                    <div>
                        <div className='none'>
                        </div>
                    </div>
                    <h4 className='description2'>No hay ítems en el carro</h4>
                    
                </div>
            </div>
            }





        </>




  
    </>)
}

export default CartWiew