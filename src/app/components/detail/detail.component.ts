import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokeService } from '../../services/poke.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  pokemon! : Pokemon

  constructor(private _pokeService : PokeService,
    private _dialogRef : DynamicDialogConfig
  ){
    let url = this._dialogRef.data.pokeurl

    _pokeService.getPokemon(url).subscribe({
      next : (data : Pokemon) => this.pokemon = data
    })
  }
}
