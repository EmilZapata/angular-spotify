import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.mensajeError = '';
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;
      },
      (error) => {
        console.log({ error });
        this.error = true;
        this.loading = false;
        this.mensajeError = error.error.error.message;
      }
    );
  }
}
