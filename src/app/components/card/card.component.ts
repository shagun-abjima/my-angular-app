import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  cardItems: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchCardItems();
  }

  fetchCardItems() {
    this.dataService.getCardItems().subscribe(
      data => {
        this.cardItems = data;
      },
      error => {
        console.error('Error fetching card items', error);
      }
    );
  }

}
