
import '../Styles/App.sass'
import '../Styles/App.css'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../firebaseConfig"
import { useParams } from 'react-router-dom'
import Catalogo from '../components/Catalogo'


const Home = () => {

    // const [showModal, setShowModal] = useState(false)
    // const {image, title, description, price , qty , tamano} = listProducts 

    const { categoryid } = useParams()
    const [listProducts, setListProducts] = useState([])
    


    useEffect(() => {
        const queryCollection = collection(db, "products")

        if (categoryid) {
            const queryFilter = query(queryCollection, where("category", "==", categoryid))
            getDocs(queryFilter)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))
        } else {
            getDocs(queryCollection)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))

        }
    }, [categoryid])



    return (
        <>
            <section className='paginaPrincipal'>
                <div className='divTitulo'>
                    <h1 className="textoCentrado titulo">Bonsais Orlando</h1>
                    <h2 className="textoCentrado subtitulo">Bonsais, paisajismo, Maquetas de Jardines,Paisaje en maceta y Peinjing</h2>
                </div>

                <div className='listaDeProductos'></div>
                
                    <Catalogo data={listProducts}/>
                    
                    
                     


            </section>
        </>
    )
}



export default Home