/**
 * Created by acabraja on 28.9.2019..
 */

import {LightningElement, api} from 'lwc';

export default class customLookupResult extends LightningElement {
    @api record;
    @api iconName;

    preventDefault(event) {
        event.preventDefault();
    }

    selectRecord() {
        const selectedRecordEvent = new CustomEvent("customrecordselected", {
            bubbles:true,
            composed: true,
            detail: this.record
        });
        this.dispatchEvent(selectedRecordEvent);
    }
}