import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCbL8MxOfhp2RKxJmY1Ei83ta587Gv4o8Z9t5zvjbD-62au98E_M7PG1lnMNZcLcBaW_1Pju1HC-Ey7kqg',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQDZek7QiWLh8LIeWPQQTD9hS5QyeI-NrupyAF7qmqHNMimcuSap1QoEsAg0nJ3NeTyRDmhsHMm6hVI8dW0',
    // });
    // return this.http
    //   .get('https://api.spotify.com/v1/browse/new-releases', {
    //     headers,
    //   })
    //   .pipe(map((response) => response['albums'].items));
    return this.getQuery('browse/new-releases').pipe(
      map((response) => response['albums'].items)
    );
  }

  getArtists(termino: string) {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQDZek7QiWLh8LIeWPQQTD9hS5QyeI-NrupyAF7qmqHNMimcuSap1QoEsAg0nJ3NeTyRDmhsHMm6hVI8dW0',
    // });
    // return this.http
    //   .get(
    //     `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
    //     {
    //       headers,
    //     }
    //   )
    //   .pipe(map((response) => response['artists'].items));
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((response) => response['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((response) => response['tracks'])
    );
  }
}
