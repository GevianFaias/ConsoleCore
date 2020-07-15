import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoService } from '../_services/evento.service';
import { Evento } from '../_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Evento[];
  eventosFiltrados: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  modalRef: BsModalRef;
  _filtroLista: string;

  constructor(
    private eventoService: EventoService
    , private modalService: BsModalService
    ) { }

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.filtrarEventos(this.filtroLista);
    //this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    this.eventosFiltrados = [];
    for (let i = 0; i < this.eventos.length; i++) {
      const evento = this.eventos[i];
      if(evento.tema.toLocaleLowerCase().indexOf(filtrarPor) != -1){
        this.eventosFiltrados.push(evento);
      }
    }
    /*return this.eventos.filter(evento => {
      evento.tema.toLocaleLowerCase().indexOf(filtrarPor) != -1;
    });*/
  }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getAllEvento().subscribe( (_eventos: Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
    }, error => {
      console.log(error);
    });
  }

}
