export class FormData {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    work: string = '';

    ethnicity: number;
    subject: number;
    level: number;

    clear() {
        this.ethnicity = 0;
        this.subject = 0;
        this.level = 0;
    }
}

export class Personal {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}