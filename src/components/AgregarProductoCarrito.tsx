import { useState } from "react";
import { IProducto } from "../interfaces/IProducto"; 
import {Button} from "react-bootstrap";
import toast, {Toaster} from 'react-hot-toast';

interface Props {
  producto: IProducto;
}

function AgregarProductoCarrito({producto}: Props) {

const notificacion = () => toast.success('Successfully toasted!')

 const [productosCarrito, setProductosCarritos] = useState<IProducto[]>([]);

function agregar() {
    setProductosCarritos((productosCarrito) => [
        ...productosCarrito,
        producto
]);
    notificacion();
}
console.log(productosCarrito);

    return (
        <>
        <Button variant="success" onClick={agregar}>
            Agregar al carrito
        </Button>
        <Toaster />
        </>
    );

}

export default AgregarProductoCarrito;
