import {Component, OnInit} from '@angular/core';
import {Stock} from "../stock-manager/stock-manager.component";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../stock.service";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;


  constructor(private routerInfo: ActivatedRoute, private  stockService: StockService,
              private router: Router) {
  }

  ngOnInit() {
    let stockId = this.routerInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    this.router.navigateByUrl('/stock');
  }

}
