import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("services of spotify ready");
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        // TENER PENDIENTE QUE ESTE TOCKEN CADUCA PUEDES GENERARLO EN POSTMAN MIENTRA TANTO...
        "Bearer BQAC2NfDqmjp4eZG_s0snLQCUBAGL4abcnERBpcMcyw9yLUdirujwMEwK5FtGetg5MXKe00bOOE86-pHHEU",
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    /*  const headers = new HttpHeaders({
      Authorization:
        // TENER PENDIENTE QUE ESTE TOCKEN CADUCA PUEDES GENERARLO EN POSTMAN MIENTRA TANTO...
        "Bearer BQCPpZ7yNj1wK10ACMEmgiMPL5pLab4DUJBrDWDBVLuX9HTQBe26asfnMlsHmEBOfESMMm1y9SFYwIFiMi8",
    });   */

    return this.getQuery("browse/new-releases").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );

    /*`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
    .pipe(map((data) => data["artists"].items)); 
    */
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //  en este caso no necesita el pipe map , porque la informacion viene como la necesito...
    // .pipe(  map((data) => data["artists"].items)
    // );
  }
  // GET https://api.spotify.com/v1/artists/{id}

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map((data) => data["tracks"])
    );
  }
}
