export class Schedule {
  constructor(public id: number, public events: ScheduleEvent[], public start: Date, public end: Date, public name: string) {}
}

export class ScheduleEvent {
  constructor(public id: number, public title: string, public start: Date, public end: Date,
              public isDaily: boolean, public eventType: ScheduleEventType, public address: string = "", public info: string = "") { }
}

export enum ScheduleEventType {
  game = 1,
  tournament = 2,
  camp = 3,
  training = 4
}

export class Season {
  constructor(public id: number, public name: string, public schedules: Schedule[]) {}

  getCalendar() {
    const calendar : Date = new Date();
    calendar.getDay();
  }
}


export class Calendar {
  private monthsConfiguration : MonthConfiguration[] = [
    new MonthConfiguration(1, 31),
    new MonthConfiguration(2, 28),
    new MonthConfiguration(3, 31),
    new MonthConfiguration(4, 30),
    new MonthConfiguration(5, 31),
    new MonthConfiguration(6, 30),
    new MonthConfiguration(7, 31),
    new MonthConfiguration(8, 31),
    new MonthConfiguration(9, 30),
    new MonthConfiguration(10, 31),
    new MonthConfiguration(11, 30),
    new MonthConfiguration(12, 31)
  ];

  private calendar : Date[] = [];
  private month : Date[] = [];

  constructor(private start : Date, private end : Date){
    this.create();
  }

  private create() {
    let currentDay : Date = this.start;
    while (currentDay <= this.end) {
      this.calendar.push(currentDay);
      currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() +1);
    }
  }

  public show() : Date[] {
    return this.calendar;
  }
}

export class MonthConfiguration {
  constructor(public month: number, public daysCount: number) {}
}


