
import {IProducto} from '../interfaces/IProducto.tsx';
import Producto from './Producto';
import { Row, Col } from 'react-bootstrap'; 


function ListaProductos({productos}: {productos: IProducto[]}) {


    return (
        <>  
                       
            <Row>
                {productos.map((producto) => (
                <Col >
                    <Producto producto={producto}/>
                </Col>
                ))}
            </Row>
            
        </>
    );
}
export default ListaProductos;