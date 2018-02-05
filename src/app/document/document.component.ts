import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../document.service';
import {Document, GetDocument} from '../document';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  providers: [DocumentService],
})
export class DocumentComponent implements OnInit {

  document: Document= new Document(); // данные вводимого пользователя

  doc: Document= new Document(); // полученный пользователь






  private order: string = "id";
  private ascending:boolean = true;














  documents: GetDocument[];


  private max_id = 0;
  private i: string;

  private j: number;


  private id_update: number;




  today = Date.now();


  private infoNameDocument = '';
  private infoAutorDocument = '';

  private disabledButton = true;

  private condition = new Array(true, true, true, true, true, true, true);

  constructor(
    private documentService: DocumentService
  ){}



  ngOnInit() {

    setTimeout(() => {




      this.documentService.getDocument().subscribe(documents => {
        console.log('Get Documents: ', documents);
        this.documents = documents;
        //console.log('MY ID: ',  this.my_id);

        for (this.i in documents) {
          if (this.max_id < this.documents[this.i]['id']){
            this.max_id = this.documents[this.i]['id'];
          }
        }
        this.max_id++;
        console.log('Max ID: ',  this.max_id);
      });
    }, 300);


  }




  add(document: Document, documents, today){

    this.today = Date.now();

    this.documentService.addDocument(document, this.max_id, this.today)
      .subscribe(
        (data: Document) => {this.doc = data; }
      );
  }




  delete(document: Document){
    this.documentService.deleteDocument(document)
      .subscribe(
        (data: Document) => {this.doc = data; }
     );

    console.log('DOCUMENTS: ',  document);
  }






  update_1(id_update){

    console.log('J: ', id_update);

    this.condition[id_update]=!this.condition[id_update];
  }


  update_2(document: Document, id_update){
    this.documentService.updateDocument(document)
      .subscribe(
        (data: Document) => {this.doc = data; }
      );

    this.condition[id_update]=!this.condition[id_update];
    id_update = "";
  }








  countryModelChange(){

    if (this.document.name == undefined){
      this.document.name = '';
    }
    if (this.document.autor == undefined){
      this.document.autor = '';
    }


    if (this.document.name == '' || this.document.autor == ''){
      this.disabledButton = true;
    }
    else{
      this.disabledButton = false;
    }

    console.log('Name: ',  this.document.name);
    console.log('Autor: ',  this.document.autor);
  }







  countryModelChange_1(){
    this.countryModelChange();

    if (this.document.name == ''){
      this.infoNameDocument = 'Пусто!';
    }
    else{
      this.infoNameDocument = '';
    }
  }





  countryModelChange_2(){
    this.countryModelChange();

    if (this.document.autor == ''){
      this.infoAutorDocument = 'Пусто!';
    }
    else{
      this.infoAutorDocument = '';
    }
  }







  sortID_1(){
    this.order = "id";
    this.ascending = true;
  }

  sortID_2(){
    this.order = "id";
    this.ascending = false;
  }







  sortName_1(){
    this.order = "name";
    this.ascending = true;
  }

  sortName_2(){
    this.order = "name";
    this.ascending = false;
  }












}






















