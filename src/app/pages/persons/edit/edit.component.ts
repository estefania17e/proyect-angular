import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  navigationExtras : NavigationExtras = {
    state : {
      value: null 
    } 
  };

  value: any = null;
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
  }

  ngOnInit(): void {
  }


  onGoToEdit (): void{  
    //this.navigationExtras?.state.value= item ;
    this.router.navigate(['edit'],  this.navigationExtras)
  }

}
