import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposedComponent } from './composed.component';

describe('ComposedComponent', () => {
  let component: ComposedComponent;
  let fixture: ComponentFixture<ComposedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
