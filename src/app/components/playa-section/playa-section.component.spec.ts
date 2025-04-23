import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayaSectionComponent } from './playa-section.component';

describe('PlayaSectionComponent', () => {
  let component: PlayaSectionComponent;
  let fixture: ComponentFixture<PlayaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
