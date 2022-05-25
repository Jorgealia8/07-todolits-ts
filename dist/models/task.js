import { v4 as uuidv4 } from 'uuid';
// export interface itask {
//     id: string;
//     name: string;
//     responsible: string;
//     isCompleted: boolean;
// }
// implements itask
export class task {
    name;
    responsible;
    id;
    isCompleted;
    constructor(name, responsible) {
        this.name = name;
        this.responsible = responsible;
        this.isCompleted = false;
        this.id = this.generateID();
    }
    generateID() {
        return uuidv4();
    }
}
