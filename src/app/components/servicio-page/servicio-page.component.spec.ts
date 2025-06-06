import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPageComponent } from './servicio-page.component';

describe('ServicioPageComponent', () => {
  let component: ServicioPageComponent;
  let fixture: ComponentFixture<ServicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
