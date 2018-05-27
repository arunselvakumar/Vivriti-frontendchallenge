import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BeerModel } from '../models/beer.model';

@Injectable()
export class SearchResultsService {

    constructor(private httpClient: HttpClient) {
        
    }

    getBeerList(): Observable<BeerModel[]> {
        let url = 'http://starlord.hackerearth.com/beercraft';
        return this.httpClient.get<BeerModel[]>(url);
      }
}