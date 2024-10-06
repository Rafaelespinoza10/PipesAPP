import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  public items : MenuItem[] | undefined
  public orderBy?: keyof Hero;

  public heroes :Hero[] = [
    {
      name: 'Super-Man',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Bat-Man',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Captain America',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Black Panter',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Spider-Man',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Iron-Man',
      canFly: true,
      color: Color.red
    }
  ]
  public isUpperCase: boolean = false;

  ngOnInit(): void {

    this.items= [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'delete',
        icon: 'pi pi-times',
      }
    ]
  }

  toggleUpperCase():void{
    this.isUpperCase =!this.isUpperCase
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value; 
  }
}
