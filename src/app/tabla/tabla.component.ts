import { Component, OnInit } from '@angular/core';
import { Stock } from '../stockfalso';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  stock = Stock;
  constructor() { }

  ngOnInit() {
  }

}
