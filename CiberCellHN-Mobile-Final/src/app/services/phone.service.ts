import { Injectable } from "@angular/core";
import { Phone } from "../models/phone";
@Injectable({providedIn:"root"})
export class PhoneService {
  private phones:Phone[]=[
    {id:1,name:"iPhone 15",brand:"Apple",price:23999,category:"Gama alta",image:"~/assets/iphone.png",description:"Pantalla OLED, cámara avanzada y gran rendimiento."},
    {id:2,name:"Galaxy A55",brand:"Samsung",price:10499,category:"Gama media",image:"~/assets/samsung.png",description:"Pantalla Super AMOLED y batería de larga duración."},
    {id:3,name:"Redmi Note 13",brand:"Xiaomi",price:6499,category:"Económico",image:"~/assets/xiaomi.png",description:"Excelente relación entre precio, cámara y rendimiento."},
    {id:4,name:"Moto G84",brand:"Motorola",price:7299,category:"Gama media",image:"~/assets/motorola.png",description:"Diseño cómodo, pantalla fluida y batería confiable."}
  ];
  getAll(){return this.phones;}
  getById(id:number){return this.phones.find(p=>p.id===id);}
  addRandom(){const brands=["Apple","Samsung","Xiaomi","Motorola"];const categories=["Gama alta","Gama media","Económico"];const id=this.phones.length+1;this.phones.unshift({id,name:`Modelo CiberCell ${id}`,brand:brands[Math.floor(Math.random()*brands.length)],price:3500+Math.floor(Math.random()*18000),category:categories[Math.floor(Math.random()*categories.length)],image:"~/assets/phone.png",description:"Nuevo equipo agregado al catálogo de CiberCellHN."});}
  updateCategory(id:number,category:string){const p=this.getById(id);if(p)p.category=category;}
}
