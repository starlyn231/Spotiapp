import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  toTracks: any = ([] = []);
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    // subscribe para suscrubirte a cualquier cambio por el url
    // ((params)  aqui se recibe la respuesta...
    this.router.params.subscribe((params) => {
      this.getArtista(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }
  getArtista(id: string) {
    // artista es la respuesta
    this.spotify.getArtista(id).subscribe((artista) => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((toTracks) => {
      console.log(toTracks);
      this.toTracks = toTracks;
    });
  }
}
