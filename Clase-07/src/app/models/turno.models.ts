export class TurnoModel {
    constructor(
        public id: number,
        public nombre: string,
        public especialidad: string,
        public desdeDia: Date,
        public hastaDia: Date) { }
}