import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class UncommonPageComponent {

  //18nSelect
  public name: string = 'Rafael Moreno';
  public gender: 'male' | 'female' = 'male';
  public changeGender = {
    'male': 'man',
    'female': 'woman'
  }

  changeClient():void {
    this.name = 'Estefania';
    this.gender = 'female';
  }
  //i18nPlural
  public animals : string[] = ['bird', 'cat', 'dog', 'snake', 'camel', 'shark', 'tiger', 'spider'];
  public animalsMap = {
    '=0':'There is no animal, come back soon',
    '=1': 'Exist one animal',
    '=2': 'Exists two animals',
    'other': 'Exists # animals',
  }
  deleteAnimal():void{
    this.animals.shift();
  }

  //keyValuePipe

  public person ={
    pronouns: "He",
    askMeAbout: ["web dev", "embedded systems", "robotics", "machine learning", "artificial intelligence", "Internet of Things (IoT)" ],
    technologies: {
        mobileApp: {
            framework: ["Flutter", "Android"],
        },
        webDevelopment:{
           tools: ['CSS3', 'HTML5', 'JavaScript','TailwindCSS', 'Bootstrap' ],
           frameWorks: ['React', 'Node.js', 'Angular']
        },
        databases: ['MySQL' , 'MongoDB'],
      },
     }


    //Async Pipe
    public myObservableTimer:Observable<number> = interval(2000)
     .pipe(
      tap( value => console.log('tap: ' , value))
     ); //cada dos segundos emite un valor

     public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
         setTimeout(() => {
            resolve('Exists Data in the Promise');
         }, 3000);
     });

}
