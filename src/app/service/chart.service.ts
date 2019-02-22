import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private url = "./assets/mock-data/chart.json";
  constructor(private http: HttpClient) {}
  getChartData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
