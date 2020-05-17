import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDescriberComponent } from './place-describer.component';

describe('PlaceDescriberComponent', () => {
  let component: PlaceDescriberComponent;
  let fixture: ComponentFixture<PlaceDescriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDescriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDescriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
