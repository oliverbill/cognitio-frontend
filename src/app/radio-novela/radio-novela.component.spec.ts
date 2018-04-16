import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioNovelaComponent } from './radio-novela.component';

describe('RadioNovelaComponent', () => {
  let component: RadioNovelaComponent;
  let fixture: ComponentFixture<RadioNovelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioNovelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioNovelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
