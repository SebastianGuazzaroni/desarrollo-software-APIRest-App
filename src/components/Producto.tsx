
import {IProducto} from '../interfaces/IProducto.tsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AgregarProductoCarrito from './AgregarProductoCarrito.tsx';


interface Props {
  producto: IProducto;
}


function Producto({producto}: Props) {


     return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.thumbnail} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    {producto.description}
                </Card.Text>
                <Card.Text>
                    Precio: ${producto.price}
                </Card.Text>
                <AgregarProductoCarrito                
                   producto={producto}
                    />
                <Button variant="primary">
                    Ver mas...
                </Button>
            </Card.Body>
        </Card>
      

  );
}

export default Producto;