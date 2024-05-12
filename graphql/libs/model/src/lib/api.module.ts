import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDataService } from './products-data.service';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { AppModule } from '../../../../apps/graphql-client/src/app/app.module';

const apolloProviderFactory = (httpLink: HttpLink) => {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: 'http://localhost:4000',
    }),
  };
};

@NgModule({
  imports: [ApolloModule, HttpClientModule],
  providers: [
    ProductsDataService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloProviderFactory,
      deps: [HttpLink],
    },
  ],
})
export class ApiModule{
  public static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        ProductsDataService
      ]
    }
  }
}
