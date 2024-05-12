import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Author, Book } from '../models/products.interface';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private _books = new BehaviorSubject<Book[]>([]);
  private _loading = new BehaviorSubject(false);
  private _error = new BehaviorSubject(null);

  public books$ = this._books.asObservable();
  public loading$ = this._loading.asObservable();
  public error$ = this._error.asObservable();

  constructor(private readonly apolloClient: Apollo) {}
  watchBooks(): Observable<void>{
    return this.apolloClient
    .watchQuery({ query : gql`
          {
            books {
              id
              title
              author
            }
          }
        `})
    .valueChanges.pipe(tap((result: any) => {
      console.log(result.data?.books);
      this._books.next(result.data?.books);
      this._loading.next(result.loading);
      this._error.next(result.error);
    }));
  }
}
