import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  private urlGuardarUsuario: string = "http://localhost:3000/api/usuario/guardarUsuario";
  private urlLogin: string="http://localhost:3000/api/usuario/login";
  private urlNuevaTarea: string="http://localhost:3000/api/tareas/nuevaTarea"
  private urlTraerTareas: string="http://localhost:3000/api/tareas/traerTareas"
  private urlEliminar: string="http://localhost:3000/api/tareas/eliminarTarea"
  private urlEditar: string="http://localhost:3000/api/tareas/editarTarea"

  guardarUsuario(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlGuardarUsuario, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  login(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlLogin, body.toString(), {
          headers: this.httpHeaders 
        });    
    
  }

  nuevaTarea(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlNuevaTarea, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  traerTareas(data): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlTraerTareas, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  eliminarTarea(data): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlEliminar, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

  editarTarea(data): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.urlEditar, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }



}
