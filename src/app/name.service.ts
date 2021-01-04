import { Injectable } from '@angular/core';


/* import { details } from "./Data/details"; */
import { name } from "./Data/dataType";

import { Observable } from 'rxjs';
import { of } from 'rxjs';  

import { MessageService } from "./message.service";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap  } from 'rxjs/operators';

const httpUpdate = { headers: new HttpHeaders({ 'Content-type':'application/json' }) }

@Injectable({ providedIn: 'root'})

export class NameService {

  private url = "http://localhost:3000/empolyeeDetails";

  getDetails() : Observable< name[]>{
    /* return of (details); */
    return this.http.get<name[]>(this.url).pipe(
    tap(get => console.log(`Details are : ${JSON.stringify(get)}`)),
    catchError(error => of([]))
    )
  } 

  getDetailbyId(id : number): Observable< name>{
/*  return of( details.find(name => name.id === id) );  */
    const url = `${this.url}/${id}`;
    return this.http.get<name>(url).pipe(
      tap(get => console.log(`You have selected ${JSON.stringify(get)}`)),
      catchError(error => of(new name()))
    ); 
  }

  updateData(updatedName:name): Observable<any>{
    return this.http.put(`${this.url}/${updatedName.id}`, updatedName, httpUpdate).pipe(
      tap(updateData => console.log(`Updated value ${updateData}`) ),
      catchError(error => of(new name()))
    );
  }

  addData(newName:name): Observable<any>{
    return this.http. post<name>(`${this.url}`, newName, httpUpdate).pipe(
      tap(newData => console.log(`New value added ${newData}`) ),
      catchError(error => of(new name()))
    );
  }

  delete(id: number): Observable<name>{
    return this.http.delete<name>(`${this.url}/${id}`, httpUpdate).pipe(
      tap(_ => console.log(`You have deleted ${id}`)),
      catchError(error => of(new name()))
    );
  }

  searchEmployee(searchName: string): Observable<name>{
    return this.http.get<name>(`${this.url}?name_like=${searchName}`).pipe(
      tap(),
      catchError(err => ([]) )
    );
  }


  constructor(
    private message:MessageService,
    private http:HttpClient
    ) { }

}
