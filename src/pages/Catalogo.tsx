import React from 'react';
import BusquedaProducto from '../components/BarraBusquedaProductos.tsx';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



function Catalogo() {

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Catálogo de Productos</h1>
                    < BusquedaProducto />
                </Col>
            </Row>
        </Container>
    )
}

export default Catalogo;