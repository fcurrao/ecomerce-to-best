import '../Styles/App.sass'
import '../Styles/App.css'

import Resultado from '../components/Resultado';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

const About = () => {

    const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)

return (  <>
        {newSearch? <>
            <Resultado data={listProducts} />   
        </> : <>

 

<section className="zoomosetentaycinco  centrado mediapag"> 


<div className="mediapag ">
<div className="texto">
<h2 className="titulo subtexto " >Bonsais Orlando</h2>
<h3 className="titulo subtexto ">La alimentación está cambiando y cada vez somos más quienes participamos de esta transformación. Existen nuevas alternativas para llevar una vida sana y saludable, respetando el medioambiente y apoyando la sustentabilidad.
</h3>
<br/>


Así es como nace Natural Deli, con la misión de ofrecer alimentos saludables y nutritivos que ayuden a mejorar la alimentación y a conectarnos con la naturaleza desde un nuevo lugar. Ofrecemos un servicio que te permitirá conocer alternativas para tus comidas y conseguirlas de una forma simple, segura y rápida. Conocé más sobre nuestro servicio en nuestra sección Cómo funciona!
<br/><br/>
Nuestros valores nos definen y nos acercan a donde queremos estar, por eso queremos compartirlos con ustedes:<br/>
*Nutrición equilibrada<br/>
*Cuidado de la salud<br/>
*Sustentabilidad y respeto del medioambiente<br/><br/>
Importante! La alimentación por ser saludable no* tiene porque ser aburrida ni carecer de sabor, tanto en nuestro sitio como en nuestras redes vas a encontrar distintas propuestas para preparar recetas riquísimas. Desde nuestro lugar, nos comprometemos a seleccionar el mejor portafolio de productos del mercado para ofrecerte una excelente experiencia de compra.<br/>

<br/>
Natural Deli
</div>
<br/>
<div className="imagenabout">
<img src={"../assets/img/otras/nosotros.jpg"} alt="Imagen producto" />

</div>
</div>

      </section>


      </>} </>
)


}

export default About