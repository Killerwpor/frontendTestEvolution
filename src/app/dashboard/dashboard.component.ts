import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {TareaCardComponent} from '../tarea-card/tarea-card.component'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';

import {ServicioService } from '../servicio.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  usuario:string="";
  faPlus = faPlus;
  name: string="";
  prioridad: string="";
  date: string="";
  tareas: any=[];


  constructor(public servicio: ServicioService, private modalService: NgbModal, private router: Router) {
    try{
      this.usuario = this.router.getCurrentNavigation().extras.state.id;
    }
    catch(e){
      this.router.navigate(['login']);
    }
   }

   ngOnInit(): void {
    var data={
      id: this.usuario
    }
    this.servicio.traerTareas(data).subscribe(result => {
        this.tareas=result;
      });
  
  }

  @ViewChild('addModal') addModal : TemplateRef<any>; // Note: TemplateRef


  openModal(modal){
    switch(modal){
      case 'add':
        this.modalService.open(this.addModal);
        break;

    }

}

nuevaTarea(){
  var data={
    name: this.name,
    prioridad: this.prioridad,
    date: this.date,
    usuario: this.usuario
  }
  console.log(data);
  this.servicio.nuevaTarea(data).subscribe(result => {
   alert("Se ha creado su tarea con éxito")
   this.modalService.dismissAll();
    });
    this.ngOnInit();
  }



   traerTareas(){
    var data={
      id: this.usuario
    }
    this.servicio.traerTareas(data).subscribe(result => {
        this.tareas=result;
      });
  }
}

