import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navigationExtras : NavigationExtras = {
    state : {
      value: null 
    } 
  };

  person: any = null;
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.person = navigation?.extras?.state;
  }

  ngOnInit(): void {
  }


  onGoToEdit (item : any): void{    
    //this.navigationExtras?.state?.value = this.person ;
    this.router.navigate(['edit'],  this.navigationExtras)
    alert('this item its deleted!')
  }

}
