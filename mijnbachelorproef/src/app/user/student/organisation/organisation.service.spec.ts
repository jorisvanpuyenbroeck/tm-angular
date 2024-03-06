import { TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { OrganisationService } from './organisation.service';

describe('OrganisationService', () => {
    let service: OrganisationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrganisationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
