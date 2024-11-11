import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:StudentComponent},
  {path:'ex',component:ExampleComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
