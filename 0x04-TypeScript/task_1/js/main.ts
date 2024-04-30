interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee : boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]:any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}
