import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {

  constructor() { }

  public contacts =[ {
    id : 1,
    name : "venkatesh",
    age:24,
    place : "kakinada",
    relation: undefined,
    phoneNumber: 8919646171,
    emailId:"venkatesh@gmail.com"
  },{
    id : 2,
    name : "teja",
    age:24,
    place : "rajahmundry",
    relation: undefined,
    phoneNumber: 1234567890,
    emailId:"teja@gmail.com"
  },{
    id : 3,
    name : "harish",
    age:24,
    place : "surampalem",
    relation: undefined,
    phoneNumber: 12454243464,
    emailId:"harish@gmail.com"
  },
  {
    id : 4,
    name : "ajith",
    age:27,
    place : "chennai",
    relation: undefined,
    phoneNumber: 124245357568,
    emailId:"ajith@gmail.com"
  },
  {
    id : 5,
    name : "charan",
    age:30,
    place : "bangalore",
    relation: undefined,
    phoneNumber: 2345678901,
    emailId:"charan@gmail.com"
  },
  {
    id : 6,
    name : "ram",
    age:28,
    place : "yalhanka",
    relation: undefined,
    phoneNumber: 763563462232,
    emailId:"ram@gmail.com"
  },
  {
    id : 7,
    name : "tanuja",
    age:24,
    place : "navalur",
    relation: "father",
    phoneNumber: 1232353564,
    emailId:"tanuja@gmail.com"
  }]

  public unidentifiedContacts;
  public identifiedContacts;
  public contactFlag:boolean = true;
  public selectedContact;
  public selectedRelation;
  public successMessage:boolean = false;
  ngOnInit() {

     this.unidentifiedContacts = this.contacts.filter((value)=>{return value.relation===undefined})

     this.identifiedContacts =  this.contacts.filter((value)=>{return value.relation!=undefined})
     console.log(this.identifiedContacts)
     console.log(this.unidentifiedContacts)
  }

  
  
  showContactDetails(_id){
    this.contactFlag=false;
    
  this.selectedContact = this.unidentifiedContacts.filter((value)=>{return value.id === _id})
  console.log(this.selectedContact)
  }

  
  
  openModel(){

    this.contactFlag=true;

  
  }

  
  selectedOption(option){
   this.selectedRelation =option.target.innerText;
    
  }

  submit(){
    $('#exampleModalLongTitle').modal('hide')
    
    this.selectedContact[0]['relation']=this.selectedRelation

    console.log(this.selectedContact[0]['relation']);
    this.contactFlag=true;
    this.ngOnInit()
    this.successMessage=true;
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.successMessage = false;
 }, 3000);

  }

}
