import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  logins=LoginComponent
  dat:any=[];
    username:any;
  mobile:any;
  email:any;
  password:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    
)  {}


ngOnInit(): void
{

  this.loadData();
}


loadData()
    {
      this.dat =localStorage.getItem('data');
      this.dat =JSON.parse(this.dat);  
     this.username= this.dat["username"];
     this.mobile=this.dat["mobile"];
     this.email=this.dat["email"];
     this.password=this.dat["password"];
   
    }
 

  }


