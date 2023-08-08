import { PartialType } from "@nestjs/mapped-types";
import { creat_dtos } from "./creat.dtos";

export class update_dto extends PartialType(creat_dtos){
}