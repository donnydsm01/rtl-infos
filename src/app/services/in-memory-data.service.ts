import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const users = [
      {firstname : 'Jonathan',lastname :'Doe',address :'Bruxelles city, Uccle',photo :'',description :"Jonathan's name is always used by programmers even for stupidy"},
      {firstname : 'Jane',lastname :'Dane',address :'Schaerbeek Bruxelles,1030 Fraternity',photo :'',description :"Jane's name is also used by programmers to test thier code, just like Jonathan"},
      {firstname : 'Donny',lastname :'Mboma',address :'Het Kinstraat 95,1745 Opwijk',photo :'',description :'Donny is an interim at RTL Belgium, he is learning new skills'},
      {firstname : 'Alexandre',lastname :'Jottard',address :'RTL Belgium',photo :'',description :"Alexandre is Donny's responsable for his interim, he's there to teach him important skills"},
      {firstname : 'Elon',lastname :'Musk',address :'California USA',photo :'https://web.static-rmg.be/if/c_fit,w_620,h_431/0dd3795a9e6d78538ae96ddbd7638750.jpg',description :'Elon is an inventor'},
      {firstname : 'Fally',lastname :'Ipupa',address :'Kinshasa, RDC',photo :'https://i0.wp.com/mbote.cd/app/uploads/2022/02/fally-ipupa-en-hollantex-une.jpeg?fit=1200%2C816&ssl=1',description :'Fally is a singer from Congo and also a dancer'},
      {firstname : '',lastname :'',address :'',photo :'',description :''},
      {firstname : '',lastname :'',address :'',photo :'',description :''}, 
      {firstname : '',lastname :'',address :'',photo :'',description :''},
      {firstname : '',lastname :'',address :'',photo :'',description :''},
      {firstname : '',lastname :'',address :'',photo :'',description :''},
      {firstname : '',lastname :'',address :'',photo :'',description :''},
    ];

    return { users };
  }
}
