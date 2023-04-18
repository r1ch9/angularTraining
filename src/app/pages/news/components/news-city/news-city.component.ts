import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { CityDatum } from 'src/app/interfaces/cities.interface';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NewsCardsComponent } from '../news-cards/news-cards.component';

@Component({
  selector: 'app-news-city',
  templateUrl: './news-city.component.html',
  styleUrls: ['./news-city.component.scss'],
  standalone: true, 
  imports: [
    IonicModule, 
    CommonModule,
    NewsCardsComponent
  ]
})
export class NewsCityComponent  implements OnInit {
  @Input('city') city: CityDatum = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: ''
  }

  private _newsApi = 'd1xvoWWyVGZrAE3d6yjAEoI0dVuxdczR';
  private _newsRequest = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  public listOfNews: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const params = new HttpParams()
    .set('api-key', this._newsApi)
    .set('sort', 'newest')
    .set('fq', `glocations:("${this.city.name}")`)

    this.http.get(`${this._newsRequest}`, {params})
      .subscribe((resp: any) => {
        if(resp.status === "OK") {
          resp.response.docs.map((doc: any) => {
            this.listOfNews.push(doc)
          })
        }
      })
  }

  get getListOfNews() {
    return this.listOfNews
  }

}
