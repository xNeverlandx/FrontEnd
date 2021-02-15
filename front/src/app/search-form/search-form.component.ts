import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DataTableComponent} from "../data-table/data-table.component";

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
    inputId: string;
    inputDate: Date;

    @Output() idInputEvent = new EventEmitter<string>();
    @Output() dateInputEvent = new EventEmitter<string>();
    @Output() submitEvent = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    onIdInputChange(event) {
        this.idInputEvent.emit(event.target.value);
    }

    onDateInputChange(event) {
        this.dateInputEvent.emit(event.target.value);
    }

    async onSubmit(event) {
      event.preventDefault();
      this.submitEvent.emit();
    }

}
