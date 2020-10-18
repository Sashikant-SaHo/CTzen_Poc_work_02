import { Component, OnInit } from '@angular/core';
import { WellList } from '../well-list';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css'],
})
export class WellListComponent implements OnInit {
  public data: WellList;
  public datalist = new Array();
  constructor() {

  }

  ngOnInit(): void {

  }
  dataEvent(event: string){
    event = JSON.parse(event)
    this.datalist.splice(0,0,event);
  }
}

