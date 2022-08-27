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
                        <div className='deliverySinCargo'>Envio a CABA gratis!</div>
                        <div className='divDeImagen'> 
                        <img className='imagenEnCatalogo' src={`../assets/img/${product.image}`} alt="Imagen producto" />
                            <div className='datosDelProducto'>
                            <h6 className='textnegro'>nombre: <h6 className='textrojo'>{product.title}</h6>  </h6>
                            <h6 className='textnegro'> description:<h6 className='textrojo'>  {product.description} </h6></h6>
                            <h6 className='textnegro'> price:<h6 className='textrojo'> {product.price}</h6></h6>
                            </div></div> 
                        </div>


                    </>
                })}



            </section>
        </>
    )
}



export default Catalogo

