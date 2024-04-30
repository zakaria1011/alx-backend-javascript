interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
};

interface StudentClassConstractor {
    new( firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass{
    constructor( private firstName: string, private lastName: string){}
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }
}
