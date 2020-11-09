import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';


import {ServicioService } from '../servicio.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String="";
  correo: String="";
  sexo: String="";
  contrasena: String="";
  contrasena2: String="";
  terminos:boolean=false;

  constructor(public servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  validarCampos(){

    var validacion=true;
  console.log(this.nombre)
  console.log(this.correo)
  console.log(this.sexo)
  console.log(this.contrasena)
  console.log(this.contrasena2)
    if(this.nombre==""){
      
      validacion=false;
    }

   
    if(this.correo==""){
      validacion=false;
    }
    if(this.sexo==""){
      validacion=false;
    }

  

    if(this.contrasena==""){
      validacion=false;
    }
    if(this.contrasena2==""){
      validacion=false;
    }   

    
    return validacion;
  }

  validarContraseña(){
    var respuesta=true;
    if(this.contrasena!=this.contrasena2){
      respuesta=false;
    }
    return respuesta;
  }

  onItemChange(event){
    this.sexo=event.target.value;
  }

  
  registrarse(){
    var validacion=this.validarCampos();
    var validacionContraseña=this.validarContraseña();    
   
    if(this.terminos){
      if(validacionContraseña){
        
     

      if(validacion){

     
    
    var data={
      nombre: this.nombre,
      email: this.correo,
      sexo: this.sexo,
      contrasena: this.contrasena  
    };
    
    this.servicio.guardarUsuario(data).subscribe(result => {
      console.log(result);
     alert("Se ha registrado con éxito!")
     this.router.navigateByUrl('/login');
      });
    }
    else{
      alert("Error, debe llenar todos los campos.")
    }
  }
  else{
    alert("Error, las contraseñas no coinciden");
  }
}
    else{
      alert("Debe aceptar los terminos para poder registrarse.")
    }
  
  
  }

  aceptarTerminos(event){
    if(event.target.value=="acepto"){
      this.terminos=true;

    }
  }

}
