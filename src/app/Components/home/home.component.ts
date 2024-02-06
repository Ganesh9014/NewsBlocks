import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../../services/newsservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public news: any;
  constructor(private Http: NewsserviceService) {}
  ngOnInit(): void {
    this.Http.ApiCalling().subscribe((data) => {
      this.news = data;
      console.log(this.news);
    });
  }
}
