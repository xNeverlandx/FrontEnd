import { Component } from '@angular/core';
import {DataTableComponent} from "./data-table/data-table.component";
import Person from "../models/person/person";
import axios from "axios";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'front';

    idInput: number;
    dateInput: Date;

    persons: Person[];

    receiveIdInput($event) {
        this.idInput = parseInt($event, 10);
    }

    receivedDateInput($event) {
        this.dateInput = $event;
    }

    async receiveSubmit($event) {
      console.log(this.idInput, this.dateInput);
      await this.fetchPeopleFromDBByIdAndDate(this.idInput, this.dateInput);
    }

    async fetchPeopleFromDBByIdAndDate(id: number, dateOfBirth: Date): Promise<Person[]> {
      const response = await axios.get<Person[]>(`http://localhost:8080/person/getPerson/${id}/${dateOfBirth}`);

      const {data} = response;

      if (!data) {
        return;
      }

      this.persons = data.map(p => {
        const person = new Person(p.id, p.firstName, p.lastName, p.gender, p.dateOfBirth);

        return person;
      });
    }
}
