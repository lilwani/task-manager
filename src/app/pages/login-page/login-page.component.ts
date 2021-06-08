import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService : AuthServiceService) { }

  ngOnInit(): void {
  }

  authenticateUserByLogin(email : string,password : string){
    this.authService.authenticateLogin(email,password).subscribe((res)=>{
      console.log("LOGGED IN!");
    })
  }

}
