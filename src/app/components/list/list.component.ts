import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Pokedex } from '../../models/pokedex.model';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  pokedex! : Pokedex
  constructor(private _pokeService : PokeService,
    private _dialogService : DialogService
  ){
    this.loadPokedex("https://pokeapi.co/api/v2/pokemon")
  }

  loadPokedex(url : string) {
    this._pokeService.getPokedex(url).subscribe({
      next : (data : Pokedex) => this.pokedex = data
    })
  }

  detail(url : string){
    this._dialogService.open(DetailComponent, {
      data : { pokeurl : url},
      width : '500px',
      header : "Détail d'un pokemon"
    })
  }


}
