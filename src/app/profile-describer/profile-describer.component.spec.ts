import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDescriberComponent } from './profile-describer.component';

describe('ProfileDescriberComponent', () => {
  let component: ProfileDescriberComponent;
  let fixture: ComponentFixture<ProfileDescriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDescriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDescriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
