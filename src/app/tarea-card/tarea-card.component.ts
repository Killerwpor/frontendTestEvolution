import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

import {ServicioService } from '../servicio.service'

import { NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';


import {Router} from '@angular/router';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent implements OnInit {

 @Input() nombre;
 @Input() fecha;
 @Input() prioridad;
 estado: string;
 @Input() idUsuario;
 @Output() reiniciar: EventEmitter<any> = new EventEmitter<any>();
 nombreAux:string="";
 fechaAux:string="";
 prioridadAux:string="";



  constructor(public servicio: ServicioService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    let fechaAux=new Date(this.fecha);
    let fechaActual=new Date()
    if(fechaAux<fechaActual){      
      this.estado="Vencida"
      alert("Tiene tareas vencidas, revise las tareas que estan marcadas en rojo.")
    }
    else{    
      this.estado="Al día"
    }
  }

  eliminarTarea(){
    var data={
   name: this.nombre
    }
    this.servicio.eliminarTarea(data).subscribe(result => {      
     alert("Se ha eliminado su tarea con éxito")
     this.modalService.dismissAll();
     this.reiniciar.emit();
      });
    }

    editarTarea(){
      var data={
        name: this.nombreAux,
        prioridad: this.prioridadAux,
        date: this.fechaAux,
        usuario: this.idUsuario
      }
      this.servicio.editarTarea(data).subscribe(result => {      
       alert("Se ha editado su tarea con éxito")
       this.modalService.dismissAll();
       this.reiniciar.emit();
        });
      }



    
  @ViewChild('deleteModal') deleteModal : TemplateRef<any>; 
  @ViewChild('editarModal') editarModal : TemplateRef<any>;  
  
    openModal(modal){  
    switch(modal){
      case 'eliminar':
        this.modalService.open(this.deleteModal);   
        break;
      case 'editar':
        this.modalService.open(this.editarModal); 
        break;
    }
          
  
      
  
  }

}
