import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Person, { Gender } from '../../models/person/person';
import * as dayjs from 'dayjs';
import axios from 'axios';



@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
    dayjs = dayjs;

    @Input() idInput: string;
    @Input() dateInput: string;
    @Input() persons: Person[] = [];

    constructor() {}

    async ngOnInit() {
        await this.fetchPeopleFromDB();
    }

    async fetchPeopleFromDB() {
      const response = await axios.get<Person[]>('http://localhost:8080/person/getAllPerson');

      const { data } = response;

      if (!data) {
        return;
      }

      this.persons = data.map(p => {
        const person = new Person(p.id, p.firstName, p.lastName, p.gender, p.dateOfBirth);

        return person;
      });
    }
}

