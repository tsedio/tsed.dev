import {Controller} from "@tsed/di";
import {BodyParams} from "@tsed/platform-params";
import {Get, Groups, Post, Returns} from "@tsed/schema";
import {v4} from "uuid";

import {CalendarModel} from "../../models/CalendarModel";

@Controller("/calendars")
export class CalendarsController {
  private calendars: CalendarModel[] = [];

  @Get("/")
  getAll() {
    return this.calendars;
  }

  @Post("/")
  @Returns(201, CalendarModel)
  create(@BodyParams() @Groups("creation") calendar: CalendarModel) {
    calendar.id = v4();

    this.calendars.push(calendar);

    return calendar;
  }
}
