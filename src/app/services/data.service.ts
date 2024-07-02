import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://api.example.com/api';

  constructor(private http: HttpClient) { }

  getSliderImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/slider`);
  }

  getCardItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cards`);
  }
}
