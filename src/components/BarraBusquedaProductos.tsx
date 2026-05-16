import { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';

type Producto = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

function BusquedaProducto() {
  

  return (
    <>
      <Form className="mb-4">
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Buscar producto..."
            
          />

          <Button type="submit" variant="primary">
            Buscar
          </Button>

          <Button type="button" variant="outline-secondary">
            Limpiar
          </Button>
        </div>
      </Form>
    </>
  );
}

export default BusquedaProducto;
