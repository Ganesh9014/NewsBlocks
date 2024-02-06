import { Component } from '@angular/core';
import { NewsserviceService } from '../../services/newsservice.service';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
})
export class AppleComponent {
  public news: any;
  constructor(private Http: NewsserviceService) {}
  ngOnInit(): void {
    this.Http.ApiCalling1().subscribe((data) => {
      this.news = data;
      console.log(this.news);
    });
  }
}
