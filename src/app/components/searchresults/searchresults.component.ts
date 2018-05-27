import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '../../services/searchresults.service';
import { BeerModel } from '../../models/beer.model';

@Component({
    selector: 'app-searchresults',
    templateUrl: './searchresults.component.html',
    styleUrls: ['./searchresults.component.css']
})
export class SearchResultsComponent implements OnInit {
    
    beers: BeerModel[] = [];

    constructor(private searchResultsService : SearchResultsService) { }

    ngOnInit(): void { 
        this.searchResultsService.getBeerList().subscribe(x => this.beers = x);
    }
}
