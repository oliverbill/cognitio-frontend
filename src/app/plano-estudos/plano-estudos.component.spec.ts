import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEstudosComponent } from './plano-estudos.component';

describe('PlanoEstudosComponent', () => {
  let component: PlanoEstudosComponent;
  let fixture: ComponentFixture<PlanoEstudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoEstudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
