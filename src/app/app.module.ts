import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { ProductoService } from './services/producto.service';
import { PedidoService } from './services/pedido.service';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PedidosListadoComponent } from './components/pedidos-listado/pedidos-listado.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    PruebaComponent,
    PedidosListadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    ProductoService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
