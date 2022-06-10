class School {
  constructor(name) {
    this._name = name;
    this._level = "primary";
    this._numberOfStudents = 50;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {}

  quickFacts() {}

  static pickSubstituteTeacher() {}
}
