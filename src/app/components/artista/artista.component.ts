import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor(  private router: ActivatedRoute,
                private _service: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.geTopTracks(params['id']);
    } );
  }

  getArtista(id: string) {
    this.loading = true;
    this._service.getArtista(id)
      .subscribe( artista => {
        this.artista = artista;
        this.loading = false;
      }
    );
  }

  geTopTracks( id: string ) {
    this._service.geTopTracks(id)
    .subscribe( topTracks => {
      this.topTracks = topTracks;
    });
  }

}
