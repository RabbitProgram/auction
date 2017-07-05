import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StockService} from "../stock.service";
import  'rxjs/Rx';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  public stocks: Array<Stock>;
  public nameFilter: FormControl = new FormControl();

  public keywork: string;

  constructor(public  router: Router, private  stockService: StockService) {
  }

  ngOnInit() {

    this.stocks = this.stockService.getStocks();
    debugger;
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keywork = value);
  }

  dayin(value: string) {
    console.log(value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
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
