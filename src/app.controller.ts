import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/products/')
  getProducts(@Query() queryParams): string {
    return `Lista de productos ${queryParams}`;
  }
  @Get('/categories/:idCategory/products/:idProduct')
  getCategoryProducts(
    @Param('idCategory') idCategory: string,
    @Param('idProduct') idProduct: string,
  ) {
    return `idCategory ${idCategory} idProduct ${idProduct}`;
  }
}
