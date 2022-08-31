import '../Styles/App.sass'
import '../Styles/App.css'

const Catalogo = ({ data }) => {

    const { title, description, price, image } = data 


    return (
        <>
            <section className='centrado'>


                {data.map((product) => {
                    return <>
 
                        <div className="cadaUnoDelCatalogo">
                          


                            {product.delivery == true ?
                            <>   <div className='deliverySinCargo'>Envio a CABA gratis!</div></>
                            :
                            <></>
                                 }

                                 {console.log(product.stock)}
                            {product.stock == 0 ?
                            <> <div className='cuadraditoNegro'> Sin Stock </div></>
                            :
                            <></>
                                 }

                            <div className='divDeImagen'>
                                <img className='imagenEnCatalogo' src={`/assets/img/${product.image}`} alt="Imagen producto" />
                                <div className='datosDelProducto'> </div></div>
                            <div className='datosDelProductoTexto'>
                                <h6 className='textnegro'> <h6 className='textrojo'>{product.title}</h6>  </h6>
                                <h6 className='textnegro'> <h6 className='textrojo'>  {product.description} </h6></h6>
                                <h6 className='textnegro'>  

                                {product.viejo != 0 ?
                            <>   <h6 className='textrojotachad'>{product.viejo}</h6> </>
                            :
                            <></>
                                 }

                                
                                
                                
                                <h6 className='textrojo'> ${product.price}</h6></h6>
                                <div className='opcionesDeCadaProducto'>
                                    <a href="#" title="MINI TOTE FULL BLACK" class="d-block  py-3" aria-label="MINI TOTE FULL BLACK">
                                        <svg className="svgojito svg3 icon-inline icon-lg mr-1 svg-icon-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg>
                                        <span className="pptext d-none d-md-inline-block">Detalles</span></a>

                                    <svg className="svg3 icon-inline icon-lg mr-1 svg-icon-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z"></path></svg>
                                </div>

                            </div>
                        </div>



                    </>
                })}



            </section>
        </>
    )
}



export default Catalogo

