// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
//   })
//   export class AuthGuard implements CanActivate {
  
//     constructor(private router: Router) {}
  
//     canActivate(): boolean {
//         const isLoggedIn = localStorage.getItem('isLoggedIn');
//         const isULoggedIn = localStorage.getItem('isULoggedIn')
    
//         if (isLoggedIn) {
//           console.log("i");
          

//           // User or admin is already logged in
//           // Redirect them to the home page or any other appropriate route
//           this.router.navigate(['/adminHome']); // Change this to the appropriate route
//           return false;
//         }
//         if(isULoggedIn){
//           console.log("q");
//             this.router.navigate(['/'])
//             return false;
//         }
    
    
    
//         return true;
//       }
//   }
  