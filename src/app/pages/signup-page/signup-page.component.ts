import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }
  
  authenticateUserBySignup(email : string,password : string){
    this.authService.authenticateSignin(email,password).subscribe((res)=>{
      console.log("Successfully signed up and logged in!");
    })
  }

}
