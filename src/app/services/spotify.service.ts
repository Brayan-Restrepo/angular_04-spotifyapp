import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAiW-6Ce7IwFJv-LjaLfeglALBQq2WdZli1Yf2iIABta8RQYzTYYT-IHSM-jced5aSxVQM8kZ-eXv2jPWs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers });
  }

  getArtistas(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAiW-6Ce7IwFJv-LjaLfeglALBQq2WdZli1Yf2iIABta8RQYzTYYT-IHSM-jced5aSxVQM8kZ-eXv2jPWs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers: headers });
  }

}
