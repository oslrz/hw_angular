import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})

export class CardComponent implements OnInit{
    
    text = 'my text'
    @Input() card:any;
    title = "my card"
    ngOnInit(){

    }
    AddToList(card:any){
        console.log(card)
        localStorage.setItem(card.id,JSON.stringify(card))
    }
    inputHandler(event : any){
        const value = event.target.value;
        this.title = value;
    }
}