import '../Styles/App.sass'
import '../Styles/App.css'

const Navbar = () => {

  // const [showModal, setShowModal] = useState(false)


  return (
    <>


      <nav className="navbar navbar-expand-lg textNavbar bg-light">
        <div className="container-fluid">
          
          <a className="linksletras navbar-brand" href="#"><img className='tamañoicono' src={"../favicon.ico"} alt="Imagen Icono" /></a>
          <p className='seBorraEnGrande'> Bonsais Orlando</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> <svg className="seAgrandaEnChico bi bi-arrow-down-circle-fill"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className=" linksletras nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="linksletras nav-link" href="#">Bonsais</a>
              </li>
              <li className="nav-item">
                <a className="linksletras nav-link" href="#">Paisajismo</a>
              </li>
              <li className="nav-item">
                <a className="linksletras nav-link" href="#">Maquetas en masetas</a>
              </li>
              <li className="nav-item">
                <a className="linksletras nav-link" href="#">Peinjing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="linksletras nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className=" linksletras dropdown-item" href="#">Action</a></li>
                  <li><a className="linksletras dropdown-item" href="#">Another action</a></li>
                  <li><hr className="linksletras dropdown-divider" /></li>
                  <li><a className="linksletras dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <div className='searchAlFinal'>
              <form className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div>
              {/* <CartWidget /> */}
              <button className='sacoPropiedades bi bi-bag-plus'>   <svg className='unPocoDeMargen' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"   viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></button>
              <button className='sacoPropiedades bi bi-bag-check'><svg className='unPocoDeMargen' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"   viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></button>
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}



export default Navbar