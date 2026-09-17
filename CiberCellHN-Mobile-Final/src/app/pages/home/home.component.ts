import {Component} from "@angular/core";import {RouterExtensions} from "@nativescript/angular";import {confirm,action,toast} from "@nativescript/core";import {Phone} from "../../models/phone";import {PhoneService} from "../../services/phone.service";
@Component({selector:"home",templateUrl:"./home.component.html",styleUrls:["./home.component.css"]})
export class HomeComponent{phones:Phone[]=[];filtered:Phone[]=[];search="";newName="";loading=false;constructor(private service:PhoneService,private router:RouterExtensions){this.refreshList();}
refreshList(){this.phones=this.service.getAll();this.filter();}
filter(){const q=this.search.toLowerCase();this.filtered=this.phones.filter(p=>(p.name+" "+p.brand+" "+p.category).toLowerCase().includes(q));}
open(p:Phone){this.router.navigate(["/detail",p.id]);}
async chooseCategory(p:Phone){const result=await action("Selecciona una categoría","Cancelar",["Gama alta","Gama media","Económico"]);if(result!=="Cancelar"){this.service.updateCategory(p.id,result);this.refreshList();toast.makeText("Categoría actualizada").show();}}
async refresh(){this.loading=true;this.service.addRandom();this.refreshList();this.loading=false;toast.makeText("Se agregó un celular nuevo").show();}
addName(){if(this.newName.trim().length>=3){this.service.addRandom();this.phones[0].name=this.newName.trim();this.newName="";this.refreshList();toast.makeText("Producto agregado").show();}}
longPress(p:Phone){toast.makeText(`Favorito: ${p.name}`).show();}
}
