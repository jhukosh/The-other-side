import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../services/people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  results: Observable<any>;
  arrayTest = [];
  name: string ;
  num = 0;
 
  constructor(private peopleService: PeopleService) { }
 
  ngOnInit() { 
    this.searchChanged(0);
  }

 
  searchChanged(num) {
    this.results = this.peopleService.getData(this.num);
}

}
