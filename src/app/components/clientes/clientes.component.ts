import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { PedidoService } from '../../services/pedido.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes: Array<Cliente> = new Array<Cliente>()

  constructor(public clienteService:ClienteService, public pedidoService:PedidoService,
    public router:Router) { }

  ngOnInit() {

    this.clientes = this.clienteService.clientesLocalStorage

    /*
     this.clientes.push(
       {
         nombre:'Car',
         apellido:'Ateno',
         edad:39
       },
       {
         nombre:'Gonzalo',
         apellido:'Lara',
         edad:40
       }
     )

    this.productos.push(
       {
         nombre:'Maíz',
         precio:15
       },
       {
         nombre:'Agua',
         precio:20
       }
    )*/
  }


  buscarClientes(nombreBuscar){
    console.log("Buscar Cliente: "+ nombreBuscar)

    this.clientes = this.clienteService.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }


  irAproductos(cliente: Cliente){
    this.pedidoService.pedido.clienteId = cliente.clienteId
    this.pedidoService.pedido.nombreCliente = cliente.nombre +' '+ cliente.apellido
    this.pedidoService.guardarLocalStorage() //guardamos en el local storage
    this.router.navigateByUrl('/productos')
    console.log("nombre: "+ this.pedidoService.pedido.nombreCliente)
  }
 


  get clientesLocal(): Cliente[]{
    let clientesLocalStorage: Cliente[] = JSON.parse(localStorage.getItem("clientes")) // recuperacion de clientes de Local Storage
    if(clientesLocalStorage == null){
      return new Array<Cliente>()
    }
      return clientesLocalStorage
  }

  get productosLocal(): Producto[]{
    let productosLocalStorage: Producto[] = JSON.parse(localStorage.getItem("productos")) // recuperacion de clientes de Local Storage
    if(productosLocalStorage == null){
      return new Array<Producto>()
    }
      return productosLocalStorage
  }

}
