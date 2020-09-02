import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Producto } from '../models/producto';
import { PedidoDetalle } from '../models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedido:Pedido = new Pedido()
  pedidoEnviar:Array<PedidoDetalle> = new Array<PedidoDetalle>()

  constructor() { 
    this.pedido = this.ultimoPedido
  }

  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))
    console.log("Se guardó en local storage: "+localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))  )
  }

  get ultimoPedido(): Pedido{

    let pedidoLocalStorage: Pedido = new Pedido(JSON.parse (localStorage.getItem("ultimoPedido"))) 

    if(pedidoLocalStorage == null){
      return new Pedido()
    }
    return pedidoLocalStorage;
  }

  guardarPedido(){
    let listadoPedidos: Pedido[] = new Array<Pedido>()
    listadoPedidos = this.listadoPedidosLocalStorage;
    this.pedido.pedidoId = listadoPedidos.length + 1
    listadoPedidos.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))


    //enviar por whats app el ultimo pedido
    this.enviarWhats()

    //despues de guardar el pedido, remover el ultimo pedido
    localStorage.removeItem("ultimoPedido")
    this.pedido = new Pedido(null) //limpiamos el objeto
  }

  get listadoPedidosLocalStorage(): Pedido[]{

    let pedidos: Pedido[] =  JSON.parse(localStorage.getItem("pedidos"))
    if(pedidos ==null){
      return new Array<Pedido>()
    }
    return pedidos.sort((a,b)=> b.pedidoId - a.pedidoId)
  }

  

  enviarWhats(){

    let header:string="¡Hola buen día! %0A%0A";
    let body1:string="Quisiera ordenar lo siguiente: %0A%0A"
    let bodyProductos:string=""
    let bodyTotal:string=""
    let body2="¡Muchas gracias por su servicio! %0A%0A"
    let footer:string="Enviado desde: @Gorichelas"

    //console.log(localStorage.getItem("ultimoPedido")) //mandamos esto por whats app
     
    for(let producto of this.pedido.pedidoDetalle){
      //console.log(producto.cantidad+" "+producto.nombreProducto+" - Subtotal: $"+producto.total+".00 MX %0A%0A")
      bodyProductos += producto.cantidad+" "+producto.nombreProducto+" | $"+producto.total+".00 MX %0A"
    }
    bodyTotal="En Total: $"+ this.pedido.total+".00 MX %0A%0A"

    window.open('https://web.whatsapp.com/send?phone=525516922746&text='+header+body1+bodyProductos+bodyTotal+body2+footer, '_blank');
    
    //window.open('https://web.whatsapp.com/send?phone=525516922746&text=Comparte por redes sociales.%0AEs muy fácil.%0ATu puedes');
  
  }

}
