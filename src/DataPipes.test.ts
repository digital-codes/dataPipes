// src/DataFrame.test.ts
import { DataPipes } from './DataPipes';

describe('DataPipes', () => {

    let container: HTMLElement;

    beforeEach(() => {
        // Create a mock container element
        container = document.createElement('div');
        container.style.width = '800px';
        container.style.height = '600px';
        document.body.appendChild(container);
    });

    afterEach(() => {
        // Clean up DOM
        document.body.removeChild(container);
    });

    test('should initialize the canvas within the container', () => {
        const dp = new DataPipes(container, 2000, 2000);
        expect(container.querySelector('canvas')).toBeTruthy();
        expect(container.querySelector('canvas')?.width).toBe(2000);
        expect(container.querySelector('canvas')?.height).toBe(2000);
    });

    test('should initialize empty node and edge lists', () => {
        const dp = new DataPipes(container, 2000, 2000);
        const nodes = dp.getNodes();
        expect(Array.isArray(nodes)).toBe(true);
        expect(nodes).toEqual([]);
        const edges = dp.getEdges();
        expect(Array.isArray(edges)).toBe(true);
        expect(edges).toEqual([]);
    });

    test('should add nodes and edges', () => {
        const dp = new DataPipes(container, 2000, 2000);
        const cfg1 = { x: 100, y: 100, size: 50, label: 'Node 1' };
        const n1 = dp.addNode(cfg1);
        const cfg2 = { x: 100, y: 100, size: 10, label: 'Node 2' };
        const n2 = dp.addNode(cfg2);
        const cfg3 = { from:n1, to:n2 };
        dp.addEdge(cfg3);
        const nodes = dp.getNodes();
        expect(Array.isArray(nodes)).toBe(true);
        const xnodes = [
            { x: 100, y: 100, size: 50, label: 'Node 1', selected:false,id:"N-1",
                "bgColor": "white", "borderColor": "red", "shape": "circle",
             },
            { x: 100, y: 100, size: 10, label: 'Node 2', selected:false,id:"N-2",
                "bgColor": "white", "borderColor": "red", "shape": "circle",
             }
        ]
        const xedges = [ {id:"E-1",from:"N-1",to:"N-2",selected:false,label:"E-1"}]
        expect(nodes).toEqual(xnodes);
        const edges = dp.getEdges();
        expect(Array.isArray(edges)).toBe(true);
        expect(edges).toEqual(xedges);
    });

    it('should invoke the callback with the correct result', () => {
        // Create a mock callback function
        const mockCallback = jest.fn();

        // Call the tested function
        const dp = new DataPipes(container, 2000, 2000,mockCallback);

        // Assert that the callback was called once
        expect(mockCallback).toHaveBeenCalledTimes(1);

        // Assert that the callback was called with the correct argument
        expect(mockCallback).toHaveBeenCalledWith({state:"init"});
    });

    it('should not invoke the callback', () => {
        // Create a mock callback function
        const mockCallback = jest.fn();

        // Call the tested function
        const dp = new DataPipes(container, 2000, 2000);

        // Assert that the callback was called once
        expect(mockCallback).toHaveBeenCalledTimes(0);

    });



    it('should dispatch a custom event with the correct detail', () => {

        // Mock the event listener
        const mockListener = jest.fn();

        // Attach the mock listener to the element
        container.addEventListener('testEvent', mockListener);

        // Call the tested function
        const dp = new DataPipes(container, 2000, 2000,"testEvent");

        // Assert that the listener was called once
        expect(mockListener).toHaveBeenCalledTimes(1);

        // Assert that the listener was called with the correct event
        expect(mockListener.mock.calls[0][0]).toBeInstanceOf(CustomEvent);

        // Assert the event's detail payload
        const event = mockListener.mock.calls[0][0] as CustomEvent;
        expect(event.detail).toEqual({state:"init"});
    });    

    it('should not dispatch a custom event', () => {

        // Mock the event listener
        const mockListener = jest.fn();

        // Attach the mock listener to the element
        container.addEventListener('testEvent', mockListener);

        // Call the tested function
        const dp = new DataPipes(container, 2000, 2000);

        // Assert that the listener was called once
        expect(mockListener).toHaveBeenCalledTimes(0);

    });    

    it('should dispatch a custom event upon pointer upt', () => {

        // Mock the event listener
        const mockListener = jest.fn();

        // Attach the mock listener to the element
        container.addEventListener('testEvent', mockListener);

        // Call the tested function
        const dp = new DataPipes(container, 2000, 2000,"testEvent");

        // Retrieve the wrapper created by the module
        const wrapper = dp.getWrapper();


        // Simulate a pointerdown event
        const pEvent = new PointerEvent('pointerup', {
            bubbles: false,
            cancelable: true,
            pointerId: 1,
        });
        wrapper.dispatchEvent(pEvent);

        // Assert that the listener was called twice (1. for init)
        expect(mockListener).toHaveBeenCalledTimes(2);

        // Assert that the listener was called with the correct event
        expect(mockListener.mock.calls[0][0]).toBeInstanceOf(CustomEvent);
        // Assert that the listener was called with the correct event
        expect(mockListener.mock.calls[1][0]).toBeInstanceOf(CustomEvent);

        // Assert the event's detail payload
        const event1 = mockListener.mock.calls[0][0] as CustomEvent;
        expect(event1.detail).toEqual({state:"init"});
        const event2 = mockListener.mock.calls[1][0] as CustomEvent;
        expect(event2.detail).toEqual({state:"up",node:"",edge:""});
    });    




})
