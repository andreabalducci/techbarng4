import { Component, OnInit } from '@angular/core';
import { Event } from './events.model';
import { EventsService } from './events.service';


@Component({
    moduleId: module.id,
    selector: 'app-events',
    templateUrl: 'events.component.html',
    providers: [EventsService]
})
export class EventsComponent {
    eventsList: Event[];
    formVisible = false;
    selectedEvent: Event;

    constructor(private service: EventsService) {
        this.downloadEvents();
    }

    downloadEvents() {
        this.service.loadEvents()
            .subscribe(arg => this.eventsList = arg);
    }

    showForm() {
        this.formVisible = true;
    }

    hideForm() {
        this.formVisible = false;
    }

    create() {
        this.selectedEvent = new Event();
        this.showForm();
    }

    edit(event: Event) {
        this.selectedEvent = { ...event };
        this.showForm();
    }

    delete(event: Event) {
        alert('delete ' + JSON.stringify(event));
    }

    loadEvents() {
        this.eventsList = [{
            id: 1,
            name: 'demo',
            description: 'descrizione',
            startDate: 'oggi',
            endDate: 'domani',
            visible: true,
            location: 'cowo'
        }, {
            id: 2,
            name: 'demo2',
            description: 'descrizione2',
            startDate: 'oggi',
            endDate: 'domani',
            visible: true,
            location: 'cowo'
        }];

    }
}
