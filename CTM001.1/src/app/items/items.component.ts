import { Component, OnInit } from '@angular/core';
import { ItemsModal } from './modal/items.modal';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }
  selected =" ";
  ngOnInit(): void {
  }
  ItemClick(select:any){
    console.log(select);
    this.selected = select;
   }
  
}
