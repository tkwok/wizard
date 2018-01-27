import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component ({
    selector: 'app-mt-wizard-personal',
    templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Please Select Ethnicity';
    personal: Personal;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    }
}
