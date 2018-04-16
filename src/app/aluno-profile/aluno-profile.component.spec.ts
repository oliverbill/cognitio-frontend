import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoProfileComponent } from './aluno-profile.component';

describe('AlunoProfileComponent', () => {
  let component: AlunoProfileComponent;
  let fixture: ComponentFixture<AlunoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
