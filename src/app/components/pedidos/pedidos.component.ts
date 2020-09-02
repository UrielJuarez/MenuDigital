import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidoService:PedidoService) { }

  ngOnInit() {
    /*
    let pedido: Pedido = new Pedido()

    pedido.clienteId = 1
    pedido.nombreCliente= 'Juan'
    pedido.total = 1555
    pedido.pedidoDetalle.push(
      {
        productoId: 1,
        nombreProducto: 'Maiz',
        cantidad: 5,
        precio: 4,
        total: 20
      },
      {
        productoId: 2,
        nombreProducto: 'Agua',
        cantidad: 2,
        precio: 3,
        total: 6
      }
    )


    console.log("pedido: "+ JSON.stringify(pedido))
    */

  }

  calcularCantidades(posicion:number){
    console.log("calcular cantidaes")
    this.pedidoService.pedido.actualizarCantidades(posicion)
    this.pedidoService.guardarLocalStorage()
    console.log("Fin")
  }

  guardarPedidoFinal(){
    this.pedidoService.guardarPedido()
    alert('Pedido Guardado')
    //console.log()
  }

  eliminar(posicion: number){
    
    this.pedidoService.pedido.pedidoDetalle.splice(posicion, 1) 
    
    this.pedidoService.pedido.actualizarTotalPedido()// <--

    this.pedidoService.guardarLocalStorage()

  }

}
