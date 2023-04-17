import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CityDatum } from 'src/app/interfaces/cities.interface';
import { LocationServiceService } from 'src/app/services/location.service';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ListOfItemsComponent {
  @Input('item') item: CityDatum = {
      'name': '', 
      'lat': 0, 
      'lon': 0, 
      'country': '', 
      'state': ''
  };

  obtainIcon() {
    if(this.locationServe.selectedCitiesList.includes(this.item)) {
      return false
    }
    return true
  }

  constructor(private locationServe: LocationServiceService) {}
}
