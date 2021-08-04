import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: product[] = [{
      heading: '',
      description: '',
      imageFile: '',
      solution: '',
      business: [{heading: '', description: ''}],
      industry: [{heading: '', description: ''}]
    }]

  constructor(private _productService: ProductService) { }
  panelOpenState = false;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getProductData();
  }

  getProductData(){

    this._productService.getProduct().subscribe(res => {
      console.log(res);
      if(res != null){
        this.productList = res;
      }
    })

    // this.productList = [{
    // title: 'Chatbot', description: 'Mimic human-like text conversations across multiple digital assets like applications, sites and interactive screens. Provide users with fluid and engaging responses that help answer questions, provide knowledge or enable services.',
    // imageUrl: '../assets/images/Logwiz.png',
    // solution: 'Automates repetitive, low order service and validation tasks',
    // business: [{heading: 'Personal Data 1', description: 'Personal Test Data'}, {heading: 'Personal Data 2', description: 'Company Test Data'}, {heading: 'Personal Data 3', description: 'Career Test Data'}],
    // industry: [{heading: 'Industry Data 1', description: 'Industry Test Data'}, {heading: 'Industry Data 2', description: 'Organization Test Data'}, {heading: 'Industry Data 3', description: 'Office Test Data'}]
    // },
    // {
    //   title: 'Call Center Analytics', description: 'Call Center Analytics text conversations across multiple digital assets like applications, sites and interactive screens. Provide users with fluid and engaging responses that help answer questions, provide knowledge or enable services.',
    //   imageUrl: '../assets/images/Logwiz-sdw.png',
    //   solution: 'Call Center, low order service and validation tasks',
    //   business: [{heading: 'Analytics Data 1', description: 'Analytics Desc'}, {heading: 'Analytics Data 2', description: 'Analytics Desc2'}, {heading: 'Analytics Data 3', description: 'Analytics Desc3'}],
    //   industry: [{heading: 'IAnalytics Data 1', description: 'IAnalytics Desc'}, {heading: 'IAnalytics Data 2', description: 'IAnalytics Desc2'}, {heading: 'IAnalytics Data 3', description: 'IAnalytics Desc3'}]
    // },
    // {
    //   title: 'Video Consent', description: 'Video Consent across multiple digital assets like applications, sites and interactive screens. Provide users with fluid and engaging responses that help answer questions, provide knowledge or enable services.',
    //   imageUrl: '../assets/images/DevOps.png',
    //   solution: 'Video Consent, low order service and validation tasks',
    //   business: [{heading: 'Video Data 1', description: 'Video Desc'}, {heading: 'Video Data 2', description: 'Video Desc2'}, {heading: 'Video Data 3', description: 'Video Desc3'}],
    //   industry: [{heading: 'IVideo Data 1', description: 'IVideo Desc'}, {heading: 'IVideo Data 2', description: 'IVideo Desc2'}, {heading: 'IVideo Data 3', description: 'IVideo Desc3'}]
    // }]
  }
}
