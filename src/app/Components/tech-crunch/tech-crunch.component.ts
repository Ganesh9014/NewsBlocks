import { Component } from '@angular/core';
import { NewsserviceService } from '../../services/newsservice.service';
@Component({
  selector: 'app-tech-crunch',
  templateUrl: './tech-crunch.component.html',
  styleUrls: ['./tech-crunch.component.css'],
})
export class TechCrunchComponent {
  public news: any;
  constructor(private Http: NewsserviceService) {}
  ngOnInit(): void {
    this.Http.ApiCalling2().subscribe((data) => {
      this.news = data;
      console.log(this.news);
    });
  }
}
