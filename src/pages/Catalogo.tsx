
import { Container, Row, Col } from 'react-bootstrap';
import ListaProductos from '../components/ListaProductos.tsx';
import { useState, useEffect } from 'react';
import {IProducto} from '../interfaces/IProducto.tsx';
import BusquedaProducto from '../components/BarraBusquedaProductos.tsx';

function Catalogo() {
  const [productos, setProductos] = useState<IProducto[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProductos(data.products));
  }, []);

    return(
        
        <Container>
            <Row>
                <Col>
                    <h1>Catálogo de Productos</h1>
                    <BusquedaProducto/>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListaProductos  productos = {productos} />
                </Col>
            </Row>
        </Container>
    )
}

export default Catalogo;