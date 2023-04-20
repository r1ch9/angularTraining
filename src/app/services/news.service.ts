import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private gettingNews: boolean = false;
  public _newsApi = 'd1xvoWWyVGZrAE3d6yjAEoI0dVuxdczR';
  public _newsRequest = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

  get gettingNewsGetter() {
    return this.gettingNews
  }

  settingNews(value : boolean) {
    this.gettingNews = value;
  }  

  constructor() { }
}
