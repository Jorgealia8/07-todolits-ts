import { v4 as uuidv4 } from 'uuid';

// export interface itask {
//     id: string;
//     name: string;
//     responsible: string;
//     isCompleted: boolean;
// }
// implements itask
export class task {
    id: string;
    isCompleted: boolean;
    constructor(public name: string, public responsible: string) {
        this.isCompleted = false;
        this.id = this.generateID();
    }
    generateID(): string {
        return uuidv4();
    }
}
