import { Request, Response } from "express";
import CreateCourseService from "./CreateCourse";

export function CreateCourse(request: Request, response: Response){

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Dani",
    duration: 10
  })

  return response.send();
}