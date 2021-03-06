import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
    });
  }
}
