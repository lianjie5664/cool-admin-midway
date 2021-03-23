
/*
 * @Author: your name
 * @Date: 2021-03-19 11:16:59
 * @LastEditTime: 2021-03-22 14:55:13
 * @LastEditors: Please set LastEditors
 * @Description: 获取系统字典
 * @FilePath: \cool-admin-midway-master\src\app\modules\dict\controller\dict.ts
 */
import { Get, Post, Provide, Inject, Body, Query, ALL } from '@midwayjs/decorator';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { Context } from 'egg';
import { DictEntity } from '../../entity/info';
import { DictService } from '../../service/dict';

/**
 * 商品
 */
 @Provide()
 @CoolController({
    api: ['add', 'delete', 'update', 'info', 'list','page'],
    entity: DictEntity,
    service: DictService,
    listQueryOp: {
      fieldEq: ['type'],
    },
    pageQueryOp: {
      // 让name字段支持模糊查询
      keyWordLikeFields: ['type'],
      // 让type字段支持筛选
      fieldEq: ['type'],
    }
 })
 export class DictController extends BaseController {
    @Inject()
    dictService: DictService;
   /**
    * 其他接口
    */
   @Get('/other')
   async other() {
     return this.ok('hello, cool-admin!!!');
   }

  // 获取当前实例  
  @Inject()
  ctx: Context;

    /**
   * search 接口
   */
  @Post('/search')
  public async search(@Body(ALL) type: object) {
    return await this.dictService.list(type);
  }

  /**
   * get方法示例，@Query()获取get请求query参数，'@Get注册衣蛾GET类型路由'
   */
  @Get('/getList')
  public async getList(@Query() id: string) {
    return id;
  }
 }