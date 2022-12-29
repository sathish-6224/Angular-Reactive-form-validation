import {
  Component,
  ViewChildren,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Angular Reactive Form Validations';
  submitted=false;
  data:any={};
 //userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    ) {}
  ngOnInit(): void {
    
  } 

  public userForm=this.fb.group({
    username:['', [Validators.required, Validators.minLength(4),Validators.pattern('[a-zA-Z]+')]],
     mobile: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]+')]],
    email: ['',[ Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
     password: ['', [Validators.required,Validators.minLength(5)]],
 
   });


   
  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    this.data=Object.assign(this.data,this.userForm.value);
localStorage.setItem('data',JSON.stringify(this.data));
  this.router.navigate(['result']);
}
  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }
}