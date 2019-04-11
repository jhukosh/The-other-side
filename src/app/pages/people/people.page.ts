import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeopleService} from '../../services/people.service'
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  results;

  constructor(private peopleService : PeopleService) {}
 
  ngOnInit() {
    this.searchChanged();
   }

   searchChanged(){
     this.peopleService.getData().subscribe(data => { this.results = data});
   }
 
}
