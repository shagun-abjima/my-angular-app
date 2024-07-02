import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-servicesoffer',
  standalone: true,
  imports: [CardComponent,SliderComponent],
  templateUrl: './servicesoffer.component.html',
  styleUrl: './servicesoffer.component.css'
})
export class ServicesofferComponent {

}
