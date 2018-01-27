import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../data/formData.service';

@Component ({
    selector: 'menubar',
    templateUrl: './menubar.component.html'
})

export class MenubarComponent implements OnInit {

    private title = 'Choose Below To Show Report';
    private ethnicity: any;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
    }

    onModelChange(event: any) {
        console.log(event);
    }
}
