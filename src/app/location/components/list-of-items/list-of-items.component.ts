import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ListOfItemsComponent {
  @Input('item') item: string = '';
}
