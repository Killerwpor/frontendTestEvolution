import { Component, OnInit } from '@angular/core';

import {ServicioService } from '../servicio.service'

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string="";
  clave: string="";

  constructor(public servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.router.navigate(['register']);
  }

  login(){
  let data={
    email: this.email,
    clave: this.clave
   }

   this.servicio.login(data).subscribe(result => {
     console.log(result);
if(result==false){
  alert("Email o contraseña incorrectos");
}

else{
  console.log(result);
  this.router.navigate(['dashboard'], { state: { id:  result._id } });
  
   }
    });
  }


  }


