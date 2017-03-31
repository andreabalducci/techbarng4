import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Event } from './events.model';
@Component({
    moduleId: module.id,
    selector: 'app-event',
    templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
    @Output()
    onCancel = new EventEmitter();

    @Input()
    event: Event;

    constructor() { }

    ngOnInit() { }

    cancel() {
        this.onCancel.emit();
    }

    save() {

    }
}
