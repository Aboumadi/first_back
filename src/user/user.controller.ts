import {Controller, Get, Param, Post, Body, Patch} from '@nestjs/common'
import { creat_dtos } from './dtos/creat.dtos';
import { update_dto } from './dtos/update.dots';

@Controller('user')
export class UserController{
    private i : number = 0;
    @Get()
    findAll(@Param('T') tab: string[]) : string{
        tab = ['aboumadi', 'zchbani', 'rmerzak'];
        return `tha value is ${tab[this.i + 2]}`;
    }

    @Get(':id')
    findOne(@Param('id') val: string) : string{
        return `the user is ${val}`;
    }

    @Post()
    CreatUser(@Body() val: creat_dtos){
        //val.id = 16800;
        //return `the username is ${val.id}`;
        return val;
    }

    @Patch()
    Updateuser(@Body() up_val : update_dto){
        up_val.id = 16500;
        return up_val;
    }
}