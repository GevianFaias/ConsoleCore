import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  retorno: number;

  constructor() { }

  ngOnInit() {
    this.retorno = 0;
  }

  teste(a: number){
    this.retorno = a+1;
  }

}
