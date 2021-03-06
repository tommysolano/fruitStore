import React, { useEffect } from "react"
import { useState } from "react"
import { Switch, Route, Link } from "react-router-dom"
import "../assets/style/catalogo.scss"
import Frutas from "../components/frutas"
import Verduras from "../components/verduras"
import "../assets/style/producto.scss"
import Axios from "axios"

function Catalogo (){
    const [searchTerm, setSearchTerm] = useState("")
    const [obtenerValorCarrito, setObtenerValorCarrito] = useState([])
    localStorage.setItem("searchTerm", searchTerm)

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setObtenerValorCarrito(response.data)
        })
    }, [])

    const valorCarrito = obtenerValorCarrito.reduce((acc, item) => {
        return acc += item.total_card
    }, 0)
    
    return(
        <div className="container_all">
            <div className="contenedor_menu_catalogo">
            <nav className="menu">
                <Link to="/">
                    Inicio
                </Link>
                <Link to="/Nosotros">
                    Quienes Somos
                </Link>
                <Link to="/catalogo/frutas">
                    Frutas
                </Link>
                <Link to="/catalogo/verduras">
                    Verduras
                </Link>
                <div className="numero_contacto">
                    <i className="fas fa-phone-volume"></i>
                    <p>
                        <strong>Contacto:</strong>  0993294856
                    </p>
                </div>
            </nav>
            <div className="contenedor_carrito_de_compra">
                <div className="buscador">
                    <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}}/>
                </div>
                <div className="carrito_de_compra">
                    <i className="fas fa-shopping-cart"></i>
                    <p>$ {valorCarrito}</p>
                </div>
                <Link to="">
                    Comprar
                </Link>
            </div>
        </div>
            <Switch>
                <Route path="/catalogo/frutas">
                    <Frutas/>
                </Route>
                <Route path="/catalogo/verduras">
                    <Verduras/>
                </Route>
            </Switch>
        
        </div>
    )
}

export default Catalogo
