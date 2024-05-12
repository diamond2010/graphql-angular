import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../../../../libs/model/src/lib/products-data.service';

@Component({
  selector: 'graphql-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public books$ = this.dataService.books$
  public loading$ = this.dataService.loading$
  public error$ = this.dataService.error$
  constructor(
    private readonly dataService: ProductsDataService
  ) {}

  ngOnInit(): void {
    this.dataService.watchBooks().subscribe();
  }
}
