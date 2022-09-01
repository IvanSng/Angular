import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DisneyCharacterModel } from 'src/app/models/disney-character.model';
import { DisneyCharacterService } from 'src/app/services/disney-character.service';
import { DisneyCharacterServiceInterface } from 'src/app/services/disney-character.service.interface';

const URL = "https://api.disneyapi.dev/characters"

interface CaractersResp {
  data: DisneyCharacterModel[];
}

@Component({
  selector: 'app-disney-chars',
  templateUrl: './disney-chars.component.html',
  styleUrls: ['./disney-chars.component.css']
})
export class DisneyCharsComponent implements OnInit {

  characters: DisneyCharacterModel[] = [];

  constructor(private service: DisneyCharacterServiceInterface) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:DisneyCharacterModel[])=>{
      this.characters = resp;
    })
  }

}
