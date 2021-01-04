import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];

  getMessage(msg:string) {
    this.messages.push(msg);
  }

  deleteAll(){
    this.messages = [];
  }

  constructor() { }
}
