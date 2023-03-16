import { TestBed } from '@angular/core/testing';

import { GuardaTareasGuard } from './guarda-tareas.guard';

describe('GuardaTareasGuard', () => {
  let guard: GuardaTareasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaTareasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
