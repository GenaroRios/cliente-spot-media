import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturaServicioComponent } from './miniatura-servicio.component';

describe('MiniaturaServicioComponent', () => {
  let component: MiniaturaServicioComponent;
  let fixture: ComponentFixture<MiniaturaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniaturaServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniaturaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
