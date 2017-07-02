import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, '第一隻股票', 1.99, 1, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(2, '第二隻股票', 2.99, 3, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(3, '第三隻股票', 3.99, 5, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(4, '第四隻股票', 4.99, 4, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(5, '第五隻股票', 5.99, 4, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(6, '第六隻股票', 6.99, 4, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(7, '第七隻股票', 7.99, 3, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(8, '第八隻股票', 8.99, 3, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
    new Stock(9, '第九隻股票', 9.99, 2, '這是我在慕課網學習angular的實戰課程', ['IT', '互聯網']),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    var stock = this.stocks.find(m => m.id == id);
    if (!stock) {
      stock = new Stock(0, '', 0, 0, '', []);
    }
    return stock;
  }
}

export class Stock {
  constructor(public  id: number,
              public  name: string,
              public  price: number,
              public  rating: number,
              public  desc: string,
              public  categories: Array<string>) {
  }

}
