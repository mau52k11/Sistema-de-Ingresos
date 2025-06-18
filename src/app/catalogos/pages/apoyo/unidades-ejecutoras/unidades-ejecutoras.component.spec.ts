import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesEjecutorasComponent } from './unidades-ejecutoras.component';

describe('UnidadesEjecutorasComponent', () => {
  let component: UnidadesEjecutorasComponent;
  let fixture: ComponentFixture<UnidadesEjecutorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesEjecutorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesEjecutorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
