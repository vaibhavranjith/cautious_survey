import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';  
import * as XLSX from 'xlsx'; 
import {QdbService} from '../services/qdb.service'
import {Edata} from '../shared/edata.model'
import {Rdata} from '../shared/rdata.model'
@Component({
  selector: 'app-xlreport',
  templateUrl: './xlreport.component.html',
  styleUrls: ['./xlreport.component.css']
})
export class XlreportComponent implements OnInit {

  constructor(private qdb:QdbService) { }

  xdesc:string[];
  q:Edata[];
  report:Rdata[]=[];
  reports:any=[]
  tidarr:string[]=[];
  ngOnInit(): void {
    this.qdb.getTopicId().subscribe(res=>{
      let tid=res[0].topicID;
      console.log(tid);
      for(let t of res){
        this.tidarr.push(t.topicID)
        let rtemp:Rdata[]=[];
        this.reports.push(rtemp);
      }
      ////////////////////////////
      
      console.log(this.reports);
      for(let i=0;i<this.tidarr.length;){
      this.qdb.getqbytid('1001').subscribe(resp=>{
        for(let e of resp[0].data){
          let temp:any={
            ref:e.ref,
            desc:e.desc,
            psik:{
              sat:0,
              nr:0,
              npi:0
            },
            noi:{
              ad:0,
              ot:0,
              pe:0
            },
            it:{
              st:0,
              lt:0
            },
            suggestions:""
          }
          this.qdb.getCountByIdRef('1001',e.ref,'Present status in Karnataka').subscribe(r1=>{
            let sum=Number(r1[0])+Number(r1[1])+Number(r1[2]);
            temp.psik.sat=Math.round((Number(r1[0])*100)/sum).toFixed(2)
            temp.psik.nr=Math.round((Number(r1[1])*100)/sum).toFixed(2)
            temp.psik.npi=Math.round((Number(r1[2])*100)/sum).toFixed(2)
          })
          this.qdb.getCountByIdRef('1001',e.ref,'Nature of Implication').subscribe(r2=>{
            let sum=Number(r2[0])+Number(r2[1])+Number(r2[2]);
            temp.noi.ad=Math.round((Number(r2[0])*100)/sum).toFixed(2);
            temp.noi.pe=Math.round((Number(r2[1])*100)/sum).toFixed(2);
            temp.noi.ot=Math.round((Number(r2[2])*100)/sum).toFixed(2);
          })
          this.qdb.getCountByIdRef('1001',e.ref,'Implementation Timeline').subscribe(r3=>{
            let sum=Number(r3[0])+Number(r3[1]);
            temp.it.st=Math.round((Number(r3[0])*100)/sum).toFixed(2);
            temp.it.lt=Math.round((Number(r3[1])*100)/sum).toFixed(2);
          })
          
          this.reports[i].push(temp);
          i+=1;
        }
        
      })
      }
//////////////////////////////////


    })
  
  }
    
  

  @ViewChild('TABLE', { static: false })TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  } 
  


}
