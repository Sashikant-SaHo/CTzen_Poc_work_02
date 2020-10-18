import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellComponent } from './well.component';

describe('WellComponent', () => {
  let component: WellComponent;
  let fixture: ComponentFixture<WellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Submit for emit user', () => {
   let myForm = {
      name: 'Citiustech',
      type: 'Healthcare',
      key: '101010',
    }
     let instane=new WellComponent();
     let spy = spyOn(instane.myEvent, 'emit');
     instane.SubmitForm(myForm)

     expect(spy).toHaveBeenCalled();
  });
});
