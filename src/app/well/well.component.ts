import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WellList } from '../well-list';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css'],
})
export class WellComponent implements OnInit {
  public myForm: WellList;
  @Output('myEvent') public myEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.myForm = {
      name: '',
      type: '',
      key: '',
    };
  }
  SubmitForm(myForm: WellList): void {
    this.myEvent.emit(JSON.stringify(myForm));
  }
}
