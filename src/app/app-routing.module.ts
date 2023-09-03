import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { notifyGuard } from './notify.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CastComponent } from './cast/cast.component';
import { Task1AComponent } from './task1-a/task1-a.component';
import { Task1BComponent } from './task1-b/task1-b.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { CeoComponent } from './about/ceo/ceo.component';


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
    {path:'create-vehicle',component:CreateVehicleComponent,canDeactivate:[notifyGuard]},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent,canDeactivate:[notifyGuard]},
    {path:'create-user',component:CreateUserComponent,canDeactivate:[notifyGuard]},
    {path:'creative-product',component:CreativeProductComponent,canDeactivate:[notifyGuard]},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'products',component:ProductsComponent},
    {path:'parent',component:ParentComponent},
    {path:'item',component:ItemComponent},
    {path:'nav',component:NavComponent},
    {path:'cast',component:CastComponent},
    {path:'task1A',component:Task1AComponent},
    {path:'task1B',component:Task1BComponent},
    {path:'aboutcompany',component:AboutCompanyComponent},
    {path:'ceo',component:CeoComponent},
    {
      path:'contact',
      loadChildren: ()=> import('./contact/contact.module').then(m => m.ContactModule)
    },
    {path:'payments',
    loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule)
  }
    
    
    
  ]},
  {path:'',component:LoginComponent},
  {path: '**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
