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
      'Authorization': 'Bearer BQDrsBTvE6mLJ2XVq4QlZVNvmaQJb38sj94SuC60rSGJ7M0SGEfl-Fu_3RbFGiaSQ4V81L68XolPMXez6lY'
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

}
