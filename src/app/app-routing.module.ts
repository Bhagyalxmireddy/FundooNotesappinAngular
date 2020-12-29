import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashbaord/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NoteComponent } from './components/note/note.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [  { path: 'register', component: RegisterComponent },
                          { path: 'login', component: LoginComponent},
                          {path: 'forgotPassword',component:ForgotPasswordComponent},
                          {path: 'resetPassword',component:ResetPasswordComponent},
                          {path: 'displaynote',component:DisplaynoteComponent},
                          {
                            path: 'dashboard', component: DashboardComponent,
                            
                            children: [
                        
                              {
                                path: '', redirectTo: 'note', pathMatch: 'full'
                              },
                        
                              { path: 'note', component: NoteComponent }
                            ]
                        
                          }
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
