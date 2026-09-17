import {NgModule} from "@angular/core";import {NativeScriptRouterModule,Routes} from "@nativescript/angular";import {HomeComponent} from "./pages/home/home.component";import {DetailComponent} from "./pages/detail/detail.component";
const routes:Routes=[{path:"",component:HomeComponent},{path:"detail/:id",component:DetailComponent}];
@NgModule({imports:[NativeScriptRouterModule.forRoot(routes)],exports:[NativeScriptRouterModule]}) export class AppRoutingModule{}
