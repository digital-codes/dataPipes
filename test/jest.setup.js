global.PointerEvent = class PointerEvent extends Event {
    constructor(type, props = {}) {
        super(type, props); // Pass props to the Event constructor

        // Add additional PointerEvent-specific properties
        this.pointerId = props.pointerId || 0;
        this.clientX = props.clientX || 0;
        this.clientY = props.clientY || 0;
        this.screenX = props.screenX || 0;
        this.screenY = props.screenY || 0;
    }
};
