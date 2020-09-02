import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Array<Producto> = new Array<Producto>()

  constructor(public productoService:ProductoService, public pedidoService:PedidoService) { }

  ngOnInit() {
    
    /* Colocamos el Nombre del Cliente como Invitado*/
    if(!this.pedidoService.pedido.nombreCliente){
      this.pedidoService.pedido.nombreCliente ="Invitado"
    }

    //Agregar Productos en Duro
    let listaProducto:Array<Producto> = new Array<Producto>()
    listaProducto.push(
      {
        productoId:1,
        nombre:"Tacos de Arrachera",
        descripcion:"Órden de 5 tacos",
        precio:15,
        imagenUrl:"https://i.pinimg.com/736x/f4/d1/82/f4d1826499d5354b229c8cc601dcd6c8.jpg"
      },
      {
        productoId:2,
        nombre:"Tacos de Chorizo Argentino",
        descripcion:"Órden de 5 tacos",
        precio:15,
        imagenUrl:"https://s-media-cache-ak0.pinimg.com/736x/ea/6e/b6/ea6eb62c6852ece7ea4e269cffcd3319.jpg"
      },
      {
        productoId:3,
        nombre:"Tacos de Chistorra",
        descripcion:"Órden de 5 tacos",
        precio:15,
        imagenUrl:"https://d1ralsognjng37.cloudfront.net/2a08ae86-ed83-4f27-a630-e5b30d277fe1.jpeg"
      },
      {
        productoId:4,
        nombre:"Tacos de Chorizo Artesanal",
        descripcion:"Órden de 5 tacos",
        precio:15,
        imagenUrl:"https://www.cocinavital.mx/wp-content/uploads/2018/02/tacos-de-chorizo-de-soya.jpg"
      },





      {
        productoId:5,
        nombre:"Torta de Arrachera con Queso",
        descripcion:"Lleva Jitomate, Cebolla, Aguacate",
        precio:15,
        imagenUrl:"https://i.ytimg.com/vi/q4gYmlBPskE/maxresdefault.jpg"
      },
      {
        productoId:6,
        nombre:"Torta de Choripán con Queso",
        descripcion:"Lleva Jitomate, Cebolla, Aguacate",
        precio:15,
        imagenUrl:"https://justformami.com/wp-content/uploads/2018/03/Receta-de-Choripan.jpg"
      },
      {
        productoId:7,
        nombre:"Torta Gori/Perra",
        descripcion:"Lleva Jitomate, Cebolla, Aguacate",
        precio:15,
        imagenUrl:"https://d1ralsognjng37.cloudfront.net/d126c0c2-7ddd-4b3d-9311-b245f4531f1f.jpeg"
      },


      {
        productoId:8,
        nombre:"Alitas Habanero",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://dam.cocinafacil.com.mx/wp-content/uploads/2018/08/alitas-habanero-y-limon.jpg"
      },
      {
        productoId:9,
        nombre:"Alitas Mango",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://www.laanita.com/blog/wp-content/uploads/2017/07/Adaptaci%C3%B3n_fotos_0000__alitas-1600x640.jpg"
      },
      {
        productoId:10,
        nombre:"Alitas BBQ",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://cdn2.cocinadelirante.com/sites/default/files/images/2018/03/alitas-bbq-receta-casera.jpg"
      },

      {
        productoId:11,
        nombre:"Boneless Habanero",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://dam.cocinafacil.com.mx/wp-content/uploads/2019/11/boneless-receta.jpg"
      },
      {
        productoId:12,
        nombre:"Boneless Mango",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://media-cdn.tripadvisor.com/media/photo-s/11/1b/c3/92/habanero-mango-boneless.jpg"
      },
      {
        productoId:13,
        nombre:"Boneless BBQ",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://i.pinimg.com/originals/e9/ff/59/e9ff59c1d1c593f444ed5e9e9febe56c.jpg"
      },

      {
        productoId:14,
        nombre:"Hamburguesa Sencilla",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://img-global.cpcdn.com/recipes/60084644e567977f/1200x630cq70/photo.jpg"
      },
      {
        productoId:15,
        nombre:"Hamburguesa Gori burguer",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://mh-2-banco-de-imagen.panthermedia.net/media/previews/0015000000/15952000/15952155_high.jpg"
      },
      {
        productoId:16,
        nombre:"Hamburguesa Choriqueso",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://dam.cocinafacil.com.mx/wp-content/uploads/2018/11/choriqueso-100.jpg"
      },

      {
        productoId:16,
        nombre:"Tostadas de Atún",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://d1uz88p17r663j.cloudfront.net/original/f3c76f96ca4b51c01e311358e489f71b_tostadas-de-at%C3%BAn.jpg"
      },
      {
        productoId:17,
        nombre:"Tostadas de Aguachile",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://img-global.cpcdn.com/recipes/e677b53f425a6d74/1200x630cq70/photo.jpg"
      },
      {
        productoId:18,
        nombre:"Pescados Fritos",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/01/dedos-de-pescado-saludables.jpg"
      },

      {
        productoId:19,
        nombre:"Cerveza Sal/Limón",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://clubamigoscerveceros.com/wp-content/uploads/2017/07/Michelada.jpg"
      },
      {
        productoId:20,
        nombre:"Cerveza Cubana Clamato",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://cdn.kiwilimon.com/recetaimagen/36264/44759.jpg"
      },
      {
        productoId:21,
        nombre:"Pescados Fritos",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://i.ytimg.com/vi/ogxVOkD38pg/maxresdefault.jpg"
      },

      {
        productoId:22,
        nombre:"Caguama (Litro)",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://i.pinimg.com/originals/8e/d4/84/8ed4847c8ffa3e9cbdef77cbc7822c93.jpg"
      },
      {
        productoId:23,
        nombre:"Caguama (Media)",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51fPj46u66L._AC_SY741_.jpg"
      },
      {
        productoId:24,
        nombre:"Caguama (Cerillos)",
        descripcion:"20 Alitas",
        precio:15,
        imagenUrl:"https://fastly.4sqi.net/img/general/600x600/28130339_Y6Fkr2EWSrSPzDitS4Vid8QmkaF79e1ZP9RoC3ObLdU.jpg"
      }


    )

    localStorage.setItem("productos",JSON.stringify(listaProducto))



    //Oficial
    this.productos =  this.productoService.productosLocalStorage
  }

  
  buscarProductos(nombreBuscar){
    console.log("nombre Buscar: "+ nombreBuscar)

    this.productos = this.productoService.productosLocalStorage.filter(producto=>{
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

  agregar(producto: Producto){
    this.pedidoService.pedido.agregarProducto(producto)
    this.pedidoService.guardarLocalStorage() //guardar en localStorage
    console.log("Producto Guardado en Local Storage"+ this.pedidoService.pedido)
    alert("Producto agregado al carrito")
  }


}
