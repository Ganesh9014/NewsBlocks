import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsserviceService {
  constructor(private http: HttpClient) {}
  public ApiCalling(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=b67c51c43ae34052bcc31ca7e2bc60f0'
    );
  }
  public ApiCalling1(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=apple&from=2024-02-04&to=2024-02-04&sortBy=popularity&apiKey=b67c51c43ae34052bcc31ca7e2bc60f0'
    );
  }
  public ApiCalling2(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b67c51c43ae34052bcc31ca7e2bc60f0'
    );
  }
}
