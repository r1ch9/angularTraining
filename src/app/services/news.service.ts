import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _newsApi = 'd1xvoWWyVGZrAE3d6yjAEoI0dVuxdczR';
  private _newsSecret = '6C2pK9LUE9k5OVqs';
  private _newsRequest = 'http://api.nytimes.com/svc/semantic/v2/concept/search.json?api-key=d1xvoWWyVGZrAE3d6yjAEoI0dVuxdczR&fields=all&concept_type=nytd_geo&query=Miami'

  constructor() { }
}
