import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

    @Input() public parentForm: FormGroup;
    @Input() public fieldName: string;
    @Input() public type: string;
    @Input() public name: string;
    @Input() public label: string;
    @Input() public icon: string;

    get formField(): FormControl {
        const control = this.parentForm?.get(this.fieldName) as FormControl;
        return control;
    }

    constructor() { }

    ngOnInit(): void {}
}
