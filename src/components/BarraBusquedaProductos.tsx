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
  const [texto, setTexto] = useState('');
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  function buscarProductos(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (texto.trim() === '') {
      setProductos([]);
      return;
    }

    setCargando(true);
    setError('');

    axios
      .get('https://dummyjson.com/products/search', {
        params: {
          q: texto,
        },
      })
      .then((respuesta) => {
        setProductos(respuesta.data.products);
      })
      .catch(() => {
        setError('Ocurrio un error al buscar productos');
        setProductos([]);
      })
      .finally(() => {
        setCargando(false);
      });
  }

  function limpiarBusqueda() {
    setTexto('');
    setProductos([]);
    setError('');
  }

  return (
    <>
      <Form onSubmit={buscarProductos} className="mb-4">
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Buscar producto..."
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />

          <Button type="submit" variant="primary">
            Buscar
          </Button>

          <Button type="button" variant="outline-secondary" onClick={limpiarBusqueda}>
            Limpiar
          </Button>
        </div>
      </Form>

      {cargando && <Spinner animation="border" />}

      {error && <p className="text-danger">{error}</p>}

      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} md={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src={producto.thumbnail}
                alt={producto.title}
              />

              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>
                <strong>${producto.price}</strong>
                </Card.Text>

                <Button variant="success" onClick={() => {}}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BusquedaProducto;
