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
      'Authorization': 'Bearer BQC9WVdQ5AbCaAJEn4eXxO3bEk2gy3XCWPaf7Xktw7WiI8I5Ulc_mZf9K16DUaiGYJZTc8EhblhD2aupg-s'
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
