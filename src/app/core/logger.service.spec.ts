import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('core: LoggerService', () => {
  beforeEach(() => {
    // spy
    spyOn(console, 'log');
    spyOn(console, 'error');
    spyOn(console, 'warn');

    TestBed.configureTestingModule({
      providers: [ LoggerService ]
    });
  });

  describe('api', () => {
    it('should have defined methods', inject([ LoggerService ], (logger: LoggerService) => {
      expect(logger.log).toBeDefined();
      expect(logger.warn).toBeDefined();
      expect(logger.error).toBeDefined();
    }));
  });

  describe('log', () => {
    it('should log', inject([ LoggerService ], (logger: LoggerService) => {
      logger.log('log');
      expect(console.log).toHaveBeenCalledWith('log');
    }));

    it('should error', inject([ LoggerService ], (logger: LoggerService) => {
      logger.error('error');
      expect(console.error).toHaveBeenCalledWith('error');
    }));

    it('should warn', inject([ LoggerService ], (logger: LoggerService) => {
      logger.warn('warn');
      expect(console.warn).toHaveBeenCalledWith('warn');
    }));
  });
});
