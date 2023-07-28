import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemachineComponent } from './updatemachine.component';

describe('UpdatemachineComponent', () => {
  let component: UpdatemachineComponent;
  let fixture: ComponentFixture<UpdatemachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatemachineComponent]
    });
    fixture = TestBed.createComponent(UpdatemachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
