import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { PedidosListadoComponent } from './components/pedidos-listado/pedidos-listado.component';


const routes: Routes = [
  {   path:'', component:HomeComponent  },
  {   path:'clientes', component:ClientesComponent  },
  {   path:'agregar-clientes', component:AgregarClientesComponent  },
  {   path:'pedidos', component:PedidosComponent  },
  {   path:'productos', component:ProductosComponent  },
  {   path:'agregar-productos', component:AgregarProductosComponent  },
  {   path:'pedidos-listado', component:PedidosListadoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
