import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogComponent } from './create-log.component';

describe('CreateLogComponent', () => {
  let component: CreateLogComponent;
  let fixture: ComponentFixture<CreateLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLogComponent]
    });
    fixture = TestBed.createComponent(CreateLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
