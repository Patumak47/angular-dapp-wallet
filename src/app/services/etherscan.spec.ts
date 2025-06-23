import { TestBed } from '@angular/core/testing';

import { Etherscan } from './etherscan';

describe('Etherscan', () => {
  let service: Etherscan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Etherscan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
