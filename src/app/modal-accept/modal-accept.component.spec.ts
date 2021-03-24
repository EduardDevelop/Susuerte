import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptComponent } from './modal-accept.component';

describe('ModalAcceptComponent', () => {
  let component: ModalAcceptComponent;
  let fixture: ComponentFixture<ModalAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
