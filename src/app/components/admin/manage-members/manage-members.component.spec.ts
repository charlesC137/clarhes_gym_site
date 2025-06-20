import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMembersComponent } from './manage-members.component';

describe('ManageMembersComponent', () => {
  let component: ManageMembersComponent;
  let fixture: ComponentFixture<ManageMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
