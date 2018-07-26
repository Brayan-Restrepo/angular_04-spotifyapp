import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDXbxXQUDdRjlUTTqP0AUzx1gKDwpaAOEH1O537VXalEIaaMN6DPHkcGv5i_8APKQ9BkfKi_YTWj3ASbdI'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map ( data => {
        return data['albums'].items;
      } )
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map (data => {
        return data['artists'].items;
      } )
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  geTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(
        map ( data => data['tracks'] )
      );
  }

}
