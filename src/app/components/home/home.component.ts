import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { PedidoService } from '../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //clientes: Array<Cliente> = new Array<Cliente>()

  constructor(public clienteService:ClienteService, public pedidoService:PedidoService,
    public router:Router) { }

  ngOnInit() {

    //this.clientes = this.clienteService.clientesLocalStorage
  }



}
