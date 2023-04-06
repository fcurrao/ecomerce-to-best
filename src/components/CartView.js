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
                <div class="dropdown">
                    <button onClick={showCart} className='btncarro btn btn-secondary dropdown-toggle ' style={{ color: cantidadXCarro > 9 ? 'darkblue' : 'black' }}
                        type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"> 

<svg class="svg1 bi bi-cart3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
 {cantidadXCarro} Productos</button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div>
                            <div className='none'>
                                {total = 0}
                                {subtotal = 0}
                            </div>
                            {cartProducts.map((product) => {
                                return <>
                                    <div  className="item-productxx margin hoverr">
                                        <img   className="imgcart" src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                        {/* {namee} */}
                                        <div  >
                                            <h3>{product.title}</h3>

                                            <div className='none'>
                                                {subtotal = product.price * product.qty}
                                                {total = subtotal + total}


                                            </div>


                                            <div>
                                                <button className="btn btn-group2 bttn" onClick={() => removeProductToCart(product)}>Remover</button>



                                                <Link to={`/productos/${product.id}`}>
                                                    <button className="btn btn-group2 bttn" >Agregar mas</button>
                                                </Link>

                                            </div>

                                        </div>     <div><h4 className='description2'>{product.qty} Unidades  </h4>
                                        </div>
                                        <div>   <h4 className='description2'>Total: {subtotal}</h4></div>
                                    </div>

                                </>

                            })}
                            <div className="ajam">

                                <h3 className='item-productx margin float-left'>Total del Carro: {total}</h3>
                                <Link to={`/cart`}>
                                    <button  onClick={cerrarModalCart} className="btn btnp btn-group2 bttn" > VER MI CARRO</button>
                                </Link>
                                <button className="btn btn-group2 bttn" onClick={clear}>Limpiar Carrito</button>
                            </div>
                        </div>

                    </div>
                </div>
            </> : <div class="dropdown">
                <button onClick={showCart} class="btncarro btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    <img className="carro" src={`../assets/img/carticon.svg`} alt="Imagen producto" />   </button>

                <div class="dropdown-menu" id="nadda" aria-labelledby="dropdownMenuButton">
                    <div>
                        <div className='none'>
                        </div>
                    </div>
                    <h4 className='description2'>No hay ítems en el carro</h4>
                    <Link to={`/productos`}>
                        <button className="btn btn-group2 bttn  float-left margin3"> Comprar Productos </button>
                    </Link>
                </div>
            </div>
            }





        </>




 
        <Link to="/cart" className="ptext">       <button   onClick={cerrarModalCart} className='margenesch'  >  Mi Carrito</button><br></br> </Link>
        <button className='margenesch'  >  Limpiar Carrito</button><br></br>
    </>)
}

export default CartWiew