import { Component, OnInit, Input } from '@angular/core';
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
  result;
  index:number;
  adds = [];
  @Input() sendAdds(){return this.adds};

  constructor(private peopleService : PeopleService) {}
 
  ngOnInit() {
    this.searchChanged();
   }

   searchChanged(){
     this.peopleService.getData().subscribe(data => { this.results = data});
     console.log(this.results);
   }

   displayName(index){
    this.result = this.results[index];
    console.log(this.result);
    return this.result;
   }

   addToBasket(person){
     this.adds.push(person);
     console.log(this.adds);
   }

   erase(index) {
    this.results.splice(index, 1);
   }
 
}
