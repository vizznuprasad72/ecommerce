import { Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  product: any;
  id: number = 0;
  constructor(private api:ApiService,private cdr: ChangeDetectorRef,private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.api.getproductbyid(this.id).subscribe((data: any) => {
      this.product = data;
      this.cdr.detectChanges();
    });
  }
}
