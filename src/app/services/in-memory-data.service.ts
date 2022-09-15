import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
//import { Observable } from 'rxjs';
//import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const users = [
      {
          "firstname" : "Iron",
          "lastname" :"Man",
          "address" :"New York, USA",
          "photo" :"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/013/iron-man-photo-robert-downey-jr-1013575.jpg",
          "description" :"L'acteur qui interprete Iron Man chez Marvel serait pret pour revenir dans son role dans la phase 5"
      },
      {
          "firstname" : "Elon",
          "lastname" :"Musk",
          "address" :"California,USA",
          "photo" :"https://www.lalibre.be/resizer/TXCn4TwpZ8U7FD3C1KOeFyz8e4c=/0x0:2560x1705/768x512/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/QQ47PVHC4FGTRHGAKWJV3UU7OA.jpg",
          "description" :"98% des actionnaires de Twitter sont d'accord pour le rachat de la plateforme par Elon Musk"
      },
      {
          "firstname" : "Fally",
          "lastname" :"Ipupa", 
          "address" :"Bandal, Kinshasa",
          "photo" :"https://i0.wp.com/mbote.cd/app/uploads/2022/02/fally-ipupa-en-hollantex-une.jpeg?fit=1200%2C816&ssl=1",
          "description" :"Le chanteur Congolais  très connu pour ses chansons Rumba mais aussi pour son style Tokoss music livrera un grand concert le 29 Octobre au stade des martyrs"
      },
      {
          "firstname" : "Natacha",
          "lastname" :"Romanov", 
          "address" :"Saint Petersbourg,Russia",
          "photo" :"https://www.tomsguide.fr/content/uploads/sites/2/2021/07/black-widow-60e30f229c14c-1024x684.jpg",
          "description" :"Le film Black Widow a connu un succès dans les salles de théatres, les avis des fans sont partagés."
      },
      {
          "firstname" : "Captain",
          "lastname" :"America",
          "address" :"New York, USA",
          "photo" :"https://www.ed92.org/wp-content/uploads/2021/06/captain-america-2-scaled.jpg",
          "description" :"Steve Rogers fera un cameo dans le film Captain America new world order prévu pour Décembre 2025."
      },
      {
          "firstname" : "Volodomyr",
          "lastname" :"Zelensky",
          "address" :"Kiev, Ukraine",
          "photo" :"https://ds.static.rtbf.be/article/image/1920x1080/9/f/f/919f85cd254f911d08fa0705cb27fbef-1650176440.jpg",
          "description" :"Le président Ukrainien informe que les bombardements Russes continuent près du centrale nucléaire."
      },
      {
          "firstname" : "Donald ",
          "lastname" :"Trump",
          "address" :"Washington, USA",
          "photo" :"https://www.leparisien.fr/resizer/l3wr21PMmSlzzt4P2TPmQbnVGvU=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/JYINN2QMHJHLFNGRXJT7FGKNEI.jpg",
          "description" :"L'ancien président Américain pense que la crise que connait le pays en ce moment est du au mauvais gestion des démocrates"
      },
      {
          "firstname" : "Ursula",
          "lastname" :"Von Der leyen",
          "address" :"Bruxelles, Belgique",
          "photo" :"https://www.euractiv.fr/wp-content/uploads/sites/3/2022/05/w_57666198.jpg",
          "description" :"La présidente du parlement Européen invite la femme du président Ukrainien à Bruxelles pour un discours touchant."
      },
      {
          "firstname" : "Albert",
          "lastname" :"Bourla",
          "address" :"Texas, USA",
          "photo" :"https://www.lalibre.be/resizer/CwrFWAlSwU-D5PUPJG0oGGQLFyc=/768x512/filters:focal(1275x856.5:1285x846.5)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/CEGWC5C6CBE6TFBECUP2SEXENY.jpg",
          "description" :"Le patron de Pfizer estime que son vaccin peut combattre n'importe quel type de variant du Coronavirus"
      },
      {
          "firstname" : "Emmanuel",
          "lastname" :"Macron",
          "address" :"Paris, France",
          "photo" :"https://media.lesechos.com/api/v1/images/view/6319bb121c29be481132a514/1280x720/0701530723338-web-tete.jpg",
          "description" :"Le président Francais pense que son peuple est pret à faire des sacrifices énergetiques pour cet hiver."
      }
  ];

    return { users };
  }
}
