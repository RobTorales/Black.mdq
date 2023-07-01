import CartWidget from "./cartwidget";
import { Link } from "react-router-dom";
import './nav.css';

  const Nav = () => {
   
    
    return <header className="header">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                    <h1><img src="../public/rosa.png" alt="" />Black.Mdq<img src="../public/rosa.png" alt="" /></h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/">inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <CartWidget/>
                        </div>
                    </div>
                </nav>
                <div className="categoria">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Buzos">Buzos</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Remeras">Remeras</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Accesorios">Accesorios</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Tops">Tops</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link to="/productos/Sweaters">Sweaters</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Pantalones">Pantalones</Link></button>
                        </li>
                        <li class="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Polleras">Polleras</Link></button>
                        </li>
                    </ul>
                </div>
        </header> 
            
            
                          
  }

  export default Nav;
