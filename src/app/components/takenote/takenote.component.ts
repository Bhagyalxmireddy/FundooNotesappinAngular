import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteServiceService } from '../../Services/noteService/note-service.service'


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isOpen = true;
  title=''
  description=''
  setColor=''
  hide = true;
  click() {
    this.isOpen = true;
  }
  constructor(private noteService: NoteServiceService) { }
  @Output() messageEvent = new EventEmitter<string>();
  

  ngOnInit(): void {
  }
  addNote(){
    let data={
      title:this.title,
      description:this.description
    } 
    console.log(" add note data ", data);
    this.noteService.createNote(data).subscribe((response:any) => {
      console.log(response);
      let message="note ctaeted successfull"
      this.messageEvent.emit(message); 
    })
  }
}
