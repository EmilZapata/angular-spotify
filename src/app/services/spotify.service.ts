import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC_R8y29ls0GFQ6iGAhCqx3qyYVlf8gyYO5FV-JTgOCUVVSV8e5E2uEh82MebZdjxljRq1TXyLGnkuu0Gg',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log({ data });
      });
  }
}
