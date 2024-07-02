import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  sliderImages: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchSliderImages();
  }

  fetchSliderImages() {
    this.dataService.getSliderImages().subscribe(
      data => {
        this.sliderImages = data;
      },
      error => {
        console.error('Error fetching slider images', error);
      }
    );
  }

}