import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTodoItemComponent } from './random-todo-item.component';

describe('RandomTodoItemComponent', () => {
  let component: RandomTodoItemComponent;
  let fixture: ComponentFixture<RandomTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
