import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfa-return-analyzer',
  templateUrl: './return-analyzer.component.html',
  styleUrls: ['./return-analyzer.component.scss']
})
export class ReturnAnalyzerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['search'], { relativeTo: this.activatedRoute });
  }

}
