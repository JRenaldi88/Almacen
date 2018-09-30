import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btnhead',
  templateUrl: './btnhead.component.html',
  styleUrls: ['./btnhead.component.css']
})


export class BtnheadComponent implements OnInit {

  prueba: string;

  onClickMe(nombre:string) {

    this.prueba = 'algo';
    
  }

  constructor() { }

  ngOnInit() {
  }

}
