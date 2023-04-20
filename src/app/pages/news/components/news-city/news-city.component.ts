import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable, Subscription, interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

import { CityDatum } from 'src/app/interfaces/cities.interface';

import { NewsCardsComponent } from '../news-cards/news-cards.component';
import { NewsService } from '../../../../services/news.service';

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

  // Create data to make interval before of next request.
  private secondsCounter: Observable<number> | undefined = interval(1000);
  private subscriptionSeconds: Subscription | undefined;
  
  public listOfNews: any[] = [];
  public secondsAmount: number = 0;

  ngOnInit() {
    this.requestToGetNews()
  }

  resetInterval() {
    this.subscriptionSeconds?.unsubscribe
    this.requestToGetNews();
  }

  requestToGetNews() {
    this.subscriptionSeconds = this.secondsCounter!.subscribe((n: number) => {
      if(n <= 60) {
        this.secondsAmount = n;
      } else if(this.secondsAmount === 60){
        this.resetInterval()
      }
    });

    const params = new HttpParams()
    .set('api-key', this.NewsService._newsApi)
    .set('sort', 'newest')
    .set('fq', `glocations:("${this.city.name}")`);

    this.NewsService.settingNews(true);

    this.http.get(`${this.NewsService._newsRequest}`, {params})
      .subscribe((resp: any) => {
        this.NewsService.settingNews(false);
        if (resp.status === "OK") {
          this.listOfNews = resp.response.docs;
        }
      })
  }

  get getListOfNews() {
    return this.listOfNews
  }

  get gettingNews() {
    return this.NewsService.gettingNewsGetter
  }

  constructor(private http: HttpClient, private NewsService: NewsService) { }
}
