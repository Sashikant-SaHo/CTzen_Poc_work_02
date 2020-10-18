import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellListComponent } from './well-list.component';

describe('WellListComponent', () => {
  let component: WellListComponent;
  let instance: WellListComponent;
  let fixture: ComponentFixture<WellListComponent>;
  let myForm = [{
      name: 'Citiustech',
      type: 'Healthcare',
      key: '101010',
    }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = new WellListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it checks for dataEvent',() => {
    instance.datalist = [{
      name: 'Citiustech',
      type: 'Healthcare',
      key: '101010',
    }];
    let event = {
      name: 'Citiustech',
      type: 'Healthcare',
      key: '101010',
    };
    instance.dataEvent(JSON.stringify(event));

    expect(instance.datalist.length).toEqual(2);
  })

});
