import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  authenticateUserBySignup(email : string,password : string){
    this.authService.authenticateSignin(email,password).subscribe((res)=>{
      if(res.status === 200){
        
        console.log("Successfully signed up and logged in!");
        this.router.navigate(['/lists'])

      }
    })
  }

}
