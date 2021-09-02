import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICharacter } from 'src/app/core/models/character-interface';
import { IHouse } from 'src/app/core/models/house-interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  displayedColumns = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<ICharacter>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  characterDetail: ICharacter[] = [];
  houses: IHouse[] = [
    {
      id: "slytherin",
      name: "slytherin"
    }, {
      id: "gryffindor",
      name: "gryffindor"
    }
    , {
      id: "ravenclaw",
      name: "ravenclaw"
    }
    , {
      id: "hufflepuff",
      name: "hufflepuff"
    }
  ]
  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    debugger
    filterValue = filterValue.target.value;
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  GetCharacterByHouse(value: any) {
    this.characterService.Getcharacters(value).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    })
  }
}
