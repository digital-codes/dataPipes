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
            { x: 100, y: 100, size: 50, label: 'Node 1' ,active:false,selected:false,id:"node-1" },
            { x: 100, y: 100, size: 10, label: 'Node 2' ,active:false,selected:false,id:"node-2" }
        ]
        const xedges = [ {id:"edge-1",from:"node-1",to:"node-2",selected:false,label:"edge-1"}]
        expect(nodes).toEqual(xnodes);
        const edges = dp.getEdges();
        expect(Array.isArray(edges)).toBe(true);
        expect(edges).toEqual(xedges);
    });



})
