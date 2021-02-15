export enum Gender {
    FEMALE,
    MALE,
}

export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    gender: Gender;
    dateOfBirth: Date;

    getId: () => number;
    getFirstName: () => string;
    getGender: () => Gender;
    getDateOfBirth: () => Date;
}

export default class Person implements IPerson {
    id;
    firstName;
    lastName;
    gender;
    dateOfBirth;

    constructor(id, firstName, lastName, gender, dateOfBirth) {
        if (!id || !firstName || !lastName || !gender || !dateOfBirth) {
            throw new Error('ArgumentException');
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }

    public getId() {
        return this.id;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getGender() {
        return this.gender;
    }

    public getDateOfBirth() {
        return this.dateOfBirth;
    }
}
