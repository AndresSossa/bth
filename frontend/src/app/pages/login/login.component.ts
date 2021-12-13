import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form:FormGroup;
  public settings: Settings;
  public credentials: boolean = true;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
    this.credentials = true;
  }

  public onSubmit(values:Object):void {
    this.credentials = true;
    if (this.form.valid) {
      this.checkAuthentication(values)
      if (this.credentials) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  checkAuthentication(credentials){
    this.credentials = true;
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}