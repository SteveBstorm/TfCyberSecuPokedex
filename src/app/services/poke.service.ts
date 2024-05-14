import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex.model';
import { Pokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(
    private _client : HttpClient
  ) { }

  getPokedex(url : string) : Observable<Pokedex>{
    return this._client.get<Pokedex>(url)
  }

  getPokemon(url : string) : Observable<Pokemon>{
    return this._client.get<Pokemon>(url)
  }
}
