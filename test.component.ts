import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
    <h2> Hola {{name}} </h2>

    <!--{uso de Pipes} --}
    
    <h2> {{name | uppercase }} </h2>
    <h2> Hola {{name | lowercase }} </h2> <!--{minusculas} -->
    <h2> Hola {{name | uppercase }}</h2> <!--{mayusculas} -->
    <h2> {{ message | titlecase}} </h2> <!--{mayusculas solo la primer palabra} -->
    <h2> {{ name | slice:3 }} </h2> <!--{recorte de palabra a partir del indice indicado -->
    <h2> {{ name | slice:2:5 }} </h2> <!--{recorte de palabra a partir del indice inicial y final  -->
    <h2> {{persona | json }} </h2> <!--{representacion de un objeto en JSON} -->

    <h2> {{3.1426 | number:'1.2-3'}}</h2> <!--{especificar cuantos digitos se requieren} -->
    <h2> {{3.1426 | number:'3.4-5'}}</h2>
    <h2> {{3.1426 | number:'5.1-2'}}</h2>

    <h2> {{.45 | percent }} </h2> <!--{ represantion en porcentajes} -->

    <h2> {{.45 | currency }} </h2> <!--{representacion en divisa} -->
    <h2> {{.45 | currency: 'GBP' }} </h2> <!--{representacion de divisa libras} -->
    <h2> {{.45 | currency: 'GBP':'code' }} </h2> <!--{representacion de divisa libras} -->
    <h2> {{.45 | currency: 'EUR':'code' }} </h2> <!--{representacion de divisa libras} -->

    <h2>{{date}} </h2>
    <h2>{{date | date:'short'}} </h2> <!--{despliega fecha en formato corto} -->
    <h2>{{date | date:'shortDate'}} </h2> <!--{despliega solo fecha} -->
    <h2>{{date | date:'shortTime'}} </h2> <!--{despliega solo hora } -->

    


    <input [id]="myId" type="text" value="Walter">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Walter">
    `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "WaLter";
  public message = 'bienvenido a tus practicas';
  public persona = {
    "primerNombre": "Juan",
    "apellido": "Escutia"
  }
  public myId = "testId";
  public isDisabled = true;

  public date = new Date ();

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
