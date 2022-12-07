import { TestBed } from '@angular/core/testing';

import { SchoolResolver } from './school.resolver';

describe('SchoolResolver', () => {
  let resolver: SchoolResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SchoolResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
