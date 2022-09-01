import '../Styles/App.sass'
import '../Styles/App.css'
import "@fontsource/titillium-web"; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Footer = () => {




    return(<> 
     
<Container fluid className="greenProyect">
            <Container className="gp">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}  className="greenProyect-lg">
                        <img src="../assets/img/otras/gp.svg" className="imgLogoEco"></img>
                        <div className="texto">
                            <h2>Green Proyect</h2>
                            <p className='pp'>Cada año, 8 millones de toneladas de plástico desaparecen en el océano.<span className="strong"> Tenemos que hacer algo al respecto. GreenPeace</span></p>
                        </div>
                        <a className="nav-link disabled " href="https://www.greenpeace.org/argentina/" target="_blank" > <Button variant="dark">Entrar</Button>{' '}</a>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>    
        </Container>


        <Container fluid className="pinchahastalamedula greenProyect">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}  className="rojosangre greenProyect-lg">
                        <img src="../assets/img/otras/pincha.png" className="imgLogoEco"></img>
                        <div className="texto">
                            <h2 className='titu'>Pinchas hasta la medula</h2>
                            <p className='pp'>Sabias que con tu donacion de medula, en menos de 3 horas, podes salvarle la vida a alguien?.
                                <span className="strong"> Se un heroe en vida!. Conocenos..</span></p>
                        </div>
                        <a className="nav-link disabled " href="http://www.pinchashastalamedula.ar" target="_blank" > <Button variant="dark">Te Sumas ?</Button>{' '}</a>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>    
        </Container>


        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="center">
                        <img src="../assets/img/otras/logo.jpg" className="imgLogoEco"></img>
                        <h4>Condiciones y Accesos</h4>
                    </Col>
                </Row> 
                <Row>
                    <Col sm={12} className="center linea">
                        
                    </Col>
                </Row> 

            
                <Row>   
                    <Col sm={12} className="cuerpoFooter">
                        <div className="opcionesFooter">
                            <h5>Nosotros</h5>
                            <p>Los comienzos</p>
                            <p>Mision </p>
                            <p>Vision</p>
                            <p>Valores</p>
                        </div>
                        <div className="opcionesFooter">
                            <h5>Productos</h5>
                            <p>Bonsais</p>
                            <p>Maquetas</p>
                            <p>Paisajismo</p>
                            <p>Peinjing</p>
                            <p>Plantas</p> 
                        </div>
                        <div className="opcionesFooter">
                            <h5>Green Proyect</h5>
                            <p>Politica Ecologica</p>
                            <p>Reduccion de Huella </p>
                            <p>Procesos de Fabricacion</p>
                            <p>Eco Packaging</p>
                            </div>
                            <div className="opcionesFooter">
                            <h5>Donar salva vida</h5>
                            <p>Dona sangre y plaquetas</p>
                            <p>Dona tu medula (en vida) </p>
                            <p>Dona organos</p>
                            <p>Dona dinero</p>
                        </div><div className="opcionesFooter">
                            <h5>Politica de Calidad</h5>
                            <p>Garantias y Soporte</p>
                            <p>Foros y Bolg</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="center linea">
                        
                    </Col>
                </Row> 
                
                <Row>
                    <Col sm={12} className="redes">
                        <i className="fa-brands fa-facebook fa-1x"></i>
                        <i className="fa-brands fa-instagram fa-1x"></i>
                        <i className="fa-brands fa-twitter fa-1x"></i>
                        <i className="fa-brands fa-youtube fa-1x"></i>
                    </Col>
                </Row>    
            </Container>    
            <div  className='firmadiv'><h6 className='firma'> ©2020. by GQUE</h6></div>
            
        </Container> 
       
    </>     



    )
}

export default Footer