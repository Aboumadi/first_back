import { creat_dtos } from './dtos/creat.dtos';
import { update_dto } from './dtos/update.dots';
export declare class UserController {
    private i;
    findAll(tab: string[]): string;
    findOne(val: string): string;
    CreatUser(val: creat_dtos): creat_dtos;
    Updateuser(up_val: update_dto): update_dto;
}
