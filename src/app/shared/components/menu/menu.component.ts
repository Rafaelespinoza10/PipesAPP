import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  public items : MenuItem[] = [];
  constructor(private router:Router){}
  ngOnInit(): void {
      this.items = [
        {
          label: 'Angular Pipes',
          icon: 'pi pi-desktop',
          items:[
            {
              label: 'Dates and text',
              icon: 'pi pi-align-left',
              command: () => {
                  this.router.navigate(['/'])
              }
            },

            {
              label: 'Numbers',
              icon: 'pi pi-percentage',
              command: ()=> {
                this.router.navigate(['number'])
              }
            },
            {
              label: 'Uncommon',
              icon: 'pi pi-globe',
              command: ()=>{
                this.router.navigate(['uncommon'])
              }
            }
          ]
        },
        {
          label : 'Custom Pipes',
          icon : 'pi pi-sliders-v',
          items:[
            {
              label: 'Add New Element',
              icon: 'pi pi-plus',
              command: ()=>{
                this.router.navigate(['order'])
              }
            }
          ]
        }
      ]
  }

}
