import '../Styles/App.sass'
import '../Styles/App.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Navbara = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  // const [showModal, setShowModal] = useState(false)


  return (
    <>
    <div className='contenedorGeneralBarra'>
    <div className="contenedorDeLinks"> 
    
    <Link to={``}><div className="margensitos"> Todos</div> </Link>
   <Link to={`/categorias/Bonsai`}><div className="margensitos"> Bonsais</div> </Link>
   <Link to={`/categorias/Paisajismo`}><div className="margensitos"> Paisajismo </div> </Link>
   <Link to={`/categorias/Peijing`}> <div className="margensitos"> Peijing</div></Link>
      <NavDropdown className="margensitos drop" title="Mas"> 
      <Link to={`/categorias/Paisajismo`}>  <div className="margensitos"> Paisajismo </div> </Link>
      <Link to={`/categorias/Peijing`}>   <div className="margensitos"> Peijing</div></Link>
      
      </NavDropdown> 
    </div>
    <div className='barraBusqueda'>
    <div className='inputseearch'>
      <input className="search" type="search" placeholder="Buscar" id="site-search" name="q"/>
      
      <svg className='svg2 butonsearch bi bi-search' xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor"   viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> </div>
    <form>
     
    </form>
    </div>
    </div>

    </>
  )
}



export default Navbara