import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { TaskComponent } from './task/task.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { authenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreativeProductComponent } from './creative-product/creative-product.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[authenticationGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'info',component:InfoComponent},
    {path:'variable',component:VariableComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmical',component:BMIComponent},
    {path:'structural-directives',component:StructuralDirectivesComponent},
    {path:'attribute-directives',component:AttributeDirectivesComponent},
    {path:'task',component:TaskComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'bank',component:BankComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'activity',component:ActivityComponent},
    {path:'memes',component:MemesComponent},
    {path:'activity',component:ActivityComponent},
    {path:'memes',component:ActivityComponent},
    {path:'person',component:PersonComponent},
    {path:'student',component:StudentComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'creative-product',component:CreativeProductComponent}
    
    
    
  ]},
  {path:'',component:LoginComponent},
  {path: '**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }