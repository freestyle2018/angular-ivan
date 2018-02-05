///<reference path="../../node_modules/@angular/core/src/di/metadata.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Document} from './document';







const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};







@Injectable()
export class DocumentService {











  constructor(
    private http: HttpClient
  ) {}





  getDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(`http://localhost:3000/documents`);

  }


  addDocument(document: Document, max_id, today) {
    const body = {id: max_id, name: document.name, text: today, autor: document.autor};
    return this.http.post(`http://localhost:3000/documents`, body);
  }


  deleteDocument(document: Document) {
    const body = {id: document.id, name: document.name, text: document.text, autor: document.autor};
    return this.http.delete(`http://localhost:3000/documents/`+ document.id);
  }


  updateDocument(document: Document) {
    const body = {id: document.id, name: document.name, text: document.text, autor: document.autor};
    return this.http.put(`http://localhost:3000/documents/`+ document.id, body);
  }







}
