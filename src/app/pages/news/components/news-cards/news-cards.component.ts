import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss'],
  standalone: true, 
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class NewsCardsComponent  implements OnInit {
  @Input('new') new: any = {};
  constructor() { }

  ngOnInit() {
    console.log('new', this.new)
  }

  readNew() {
    let window: any = open(`${this.new.web_url}`, "_blank");
    window.focus();
  }
}
