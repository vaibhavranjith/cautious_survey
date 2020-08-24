import { LginmodalComponent } from './../lginmodal/lginmodal.component';
import { DataReportComponent } from './data-report/data-report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { QcrudComponent } from './qcrud/qcrud.component';
import { XlreportComponent } from './xlreport/xlreport.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'qcrud',
        component:QcrudComponent
      },
      {
        path:'datareport',
        component:DataReportComponent
      },
      {
        path:'xlreport',
        component:XlreportComponent
      }
    ]
  },
  {
    path:'login',
    component:LginmodalComponent
  },

  ]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
