import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LocationServiceService } from '../../../services/location.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class HomeCardComponent  implements OnInit {
  public mouseOver: boolean = false;
  @Input('city') city:any = {};

  constructor(private LocationServiceService: LocationServiceService) { }

  ngOnInit() {}

  removeLocation(city: any) {
    this.LocationServiceService.removeCity(city)
  }

}
