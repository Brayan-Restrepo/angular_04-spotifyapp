import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDVzDZ9WCmaBqWIctdP6fefDndjze07gloFnLiHmS67ki4L2pNsJvQfag81nmCWH7LRaJOekAKtoqVbHKk'
      });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers })
    .subscribe( data => {
      console.log(data);
    });
  }

}
