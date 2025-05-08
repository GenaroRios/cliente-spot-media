import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioContentComponent } from './servicio-content.component';

describe('ServicioContentComponent', () => {
  let component: ServicioContentComponent;
  let fixture: ComponentFixture<ServicioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
