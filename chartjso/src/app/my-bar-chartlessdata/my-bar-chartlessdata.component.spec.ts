import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarChartlessdataComponent } from './my-bar-chartlessdata.component';

describe('MyBarChartlessdataComponent', () => {
  let component: MyBarChartlessdataComponent;
  let fixture: ComponentFixture<MyBarChartlessdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarChartlessdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartlessdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
