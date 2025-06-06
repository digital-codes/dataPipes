
interface NodeConfig {
    id?: string;
    x: number;
    y: number;
    size: number;
    borderColor?: string; 
    bgColor?: string;
    shape?: "square" | "circle" | "star"; // New shape options,
    icon?: string; // New property for node icons
    label?: string; // New property for node labels
    selected?: boolean;
}

interface EdgeConfig {
    id?: string;
    from: string;
    fromType?: string;
    to: string;
    toType?: string;
    label?: string;
    selected?: boolean;
}

class DataPipes {
    private container: HTMLElement;
    private wrapper: HTMLElement; // Parent div for viewport manipulations
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private nodes: NodeConfig[] = [];
    private edges: EdgeConfig[] = [];
    private selectedEdge: EdgeConfig | null = null;
    private selectedNode: NodeConfig | null = null;
    private offsetX: number = 0;
    private offsetY: number = 0;
    private nodeIdx: number = 0;    // increases only with addnode
    private edgeIdx: number = 0;    // increases only with addedge
    // callback function
    private callBack: ((result: { [key: string]: any }) => void);
    // default values
    private nodeSize: number = 60;
    private textSize = 16;
    private textColor = "black";
    private borderColor = "red"
    private bgColor = "white";
    private selectColor = "yellow";
    private borderWidth = 2;
    private edgeWidth = 3;


    private viewport = { scale: 1, translateX: 0, translateY: 0 };

    constructor(container: HTMLElement, width: number, height: number, callBack: ((result: { [key: string]: any }) => void) | string | null = null) {
        this.container = container;
        this.wrapper = document.createElement("div");
        this.wrapper.style.position = "relative";
        this.wrapper.style.width = `${width}px`;
        this.wrapper.style.height = `${height}px`;
        this.wrapper.style.overflow = "visible";
        this.wrapper.style.transformOrigin = "0 0";
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;

        this.wrapper.appendChild(this.canvas);
        container.appendChild(this.wrapper);

        const context = this.canvas.getContext("2d");
        if (!context) throw new Error("Canvas context could not be initialized");
        this.context = context;

        if (typeof callBack === "function") {
            //console.log('callback is function');
            this.callBack = callBack;
        } else if (typeof callBack === "string") {
            //console.log('callback is string');
            this.callBack = (result: { [key: string]: any }) => {
                const event = new CustomEvent(callBack, { detail: result });
                this.container.dispatchEvent(event);
            };
        } else {
            this.callBack = (x:{ [key: string]: any }) => {} // empty function. don't need to check for null later on
        }

        this.addEventListeners();
        this.render();
        this.callBack({state:"init"});
    }

    // needed for testing pointer events
    getWrapper(): HTMLElement {
        return this.wrapper;
    }

    addNode(config: NodeConfig): string {
        this.nodeIdx++;
        const id = config.id || `N-${this.nodeIdx}`;
        config.id = id
        // defaults
        if (!config.size) config.size = this.nodeSize 
        if (!config.borderColor) config.borderColor = this.borderColor 
        if (!config.bgColor) config.bgColor = this.bgColor 
        if (!config.shape) config.shape = "circle" 
        if (!config.label) config.label = `N-${this.nodeIdx}` 
        config.selected = false;
        this.nodes.push(config);
        //console.log("nodes:", this.nodes);
        this.render();
        return id
    }

    addEdge(config: EdgeConfig): string {
        this.edgeIdx++;
        const id = config.id || `E-${this.edgeIdx}`;
        config.id = id
        config.selected = config.selected || false;
        const label = config.label || `E-${this.edgeIdx}`;
        config.label = label;
        this.edges.push(config);
        //console.log("edges:", this.edges);
        this.render();
        return id
    }

    removeNode(id: string): void {
        this.nodes = this.nodes.filter(node => node.id !== id);
        this.edges = this.edges.filter(edge => edge.from !== id && edge.to !== id);
        this.render();
    }

    removeEdge(from: string, to: string): void {
        this.edges = this.edges.filter(edge => edge.from !== from || edge.to !== to);
        this.render();
    }

    getNodes(): NodeConfig[] {
        return this.nodes;
    }
    getEdges(): EdgeConfig[] {
        return this.edges;
    }


    modifyNodeStyle(id: string, newStyles: Partial<NodeConfig>): void {
        const node = this.nodes.find(node => node.id === id);
        if (node) {
            Object.assign(node, newStyles);
        }
        this.render();
    }

    modifyEdgeStyle(id: string, newStyles: Partial<EdgeConfig>): void {
        const edge = this.edges.find(edge => edge.id === id);
        if (edge) Object.assign(edge, newStyles);
        this.render();
    }


    zoomin(): void {
        const scale = this.viewport.scale * 1.2;
        this.viewport.scale = scale < 1 ? scale : 1;
        this.updateViewport();
    }

    zoomout(): void {
        const scale = this.viewport.scale / 1.2;
        this.viewport.scale = scale > .25 ? scale : .25
        this.updateViewport();
    }

    pan(dx: number, dy: number): void {
        this.viewport.translateX += dx;
        this.viewport.translateY += dy;
        this.updateViewport();
    }

    resetView(): void {
        // Reset to 0,0
        const wwidth = window.innerWidth;
        const wheight = window.innerHeight;
        //console.log('window size', wwidth, wheight);
        const { width: containerWidth, height: containerHeight } = this.getContainerSize();
        //console.log('container size 1', containerWidth, containerHeight);
        this.viewport.translateX = 0;
        this.viewport.translateY = 0;
        // this.viewport.scale = 1;
        // Update the viewport transformation
        this.updateViewport();
    }

    center(): void {
        // Calculate the center of the canvas and the container
        const containerCenterX = this.container.clientWidth / 2;
        const containerCenterY = this.container.clientHeight / 2;

        const canvasCenterX = this.canvas.width / 2;
        const canvasCenterY = this.canvas.height / 2;

        // Calculate translation needed to center the canvas in the viewport
        this.viewport.translateX = containerCenterX - canvasCenterX * this.viewport.scale;
        this.viewport.translateY = containerCenterY - canvasCenterY * this.viewport.scale;

        // Update the viewport transformation
        this.updateViewport();
    }

    private getContainerSize(): { width: number; height: number } {
        return {
            width: this.container.clientWidth,
            height: this.container.clientHeight,
        };
    }

    private clearContainer(): void {
        // Clear the wrapper's visible area
        this.wrapper.style.background = this.bgColor; // Optional: Reset background color
    }

    private updateViewport(): void {
        //console.log('rendering', this.canvas.width, this.canvas.height, this.viewport.scale, this.viewport.translateX, this.viewport.translateY);
        this.wrapper.style.transform = `
            translate(${this.viewport.translateX}px, ${this.viewport.translateY}px)
            scale(${this.viewport.scale})
        `;
        this.clearContainer();
    }

    private async render (): Promise <void> {

        this.clearContainer(); // Ensure no leftover graphics
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //console.log('rendering', this.canvas.width, this.canvas.height, this.viewport.scale, this.viewport.translateX, this.viewport.translateY);

        // Draw edges
        for (const edge of this.edges) {
            const fromNode = this.nodes.find(node => node.id === edge.from);
            const toNode = this.nodes.find(node => node.id === edge.to);
            if (!fromNode || !toNode) continue;

            const startX = fromNode.x + fromNode.size / 2;
            const startY = fromNode.y + fromNode.size / 2;
            const endX = toNode.x + toNode.size / 2;
            const endY = toNode.y + toNode.size / 2;

            this.context.strokeStyle = this.selectedEdge === edge ? this.borderColor : this.textColor
            this.context.lineWidth = this.selectedEdge === edge ? this.edgeWidth + 2 : this.edgeWidth
            this.context.beginPath();
            this.context.moveTo(startX, startY);
            this.context.lineTo(endX, endY);
            this.context.stroke();


            // Calculate midpoint for label and arrow
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;

            // Draw edge label
            if (edge.label) {
                this.context.fillStyle = this.textColor;
                this.context.font = `${this.textSize}px Arial`;
                this.context.textAlign = "center";
                this.context.textBaseline = "middle";
                this.context.strokeStyle = this.borderColor;
                this.context.fillText(edge.label, midX + 8, midY - 8); // Position slightly above the line
            }


            // Position arrow to the right of the label
            const arrowOffsetX = (endX - startX) / Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2) * 20;
            const arrowOffsetY = (endY - startY) / Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2) * 20;

            const arrowX = midX + arrowOffsetX;
            const arrowY = midY + arrowOffsetY;

            // Draw arrowhead
            const arrowSize = 16;
            const angle = Math.atan2(endY - startY, endX - startX);
            this.context.beginPath();
            this.context.moveTo(arrowX, arrowY);
            this.context.lineTo(
                arrowX - arrowSize * Math.cos(angle - Math.PI / 6),
                arrowY - arrowSize * Math.sin(angle - Math.PI / 6)
            );
            this.context.lineTo(
                arrowX - arrowSize * Math.cos(angle + Math.PI / 6),
                arrowY - arrowSize * Math.sin(angle + Math.PI / 6)
            );

            this.context.closePath();
            this.context.fillStyle = this.textColor;
            this.context.fill();

        }

        // Draw nodes
        for (const node of this.nodes) {
            this.context.fillStyle = this.selectedNode === node ? this.selectColor : this.bgColor;
            this.context.strokeStyle = this.borderColor;
            this.context.lineWidth = this.borderWidth;

            const halfSize = node.size / 2;

            // Draw node shape
            const shape = node.shape;
            if (shape === "circle") {
                this.context.beginPath();
                this.context.arc(
                    node.x + halfSize,
                    node.y + halfSize,
                    halfSize,
                    0,
                    Math.PI * 2
                );
                this.context.closePath();
                this.context.fill();
                this.context.stroke();
            } else if (shape === "star") {
                this.drawStar(node.x + halfSize, node.y + halfSize, 5, halfSize, halfSize / 2);
                this.context.fill();
                this.context.stroke();
            } else {
                // Default to square
                this.context.fillRect(node.x, node.y, node.size, node.size);
                this.context.strokeRect(node.x, node.y, node.size, node.size);
            }

            // node icon, if exists
            if (node.icon) {
                const img = new Image();
                img.src = node.icon;
                await img.decode(); // Ensure the image is fully loaded before drawing
                const imgSize = Math.round(node.size * .75);
                const imgOffs = Math.ceil((node.size - imgSize) / 2);
                this.context.drawImage(img, node.x + imgOffs, node.y + imgOffs, imgSize,imgSize);
            }

            // Draw node label
            if (node.label) {
                this.context.fillStyle = this.textColor;
                this.context.font = `${this.textSize}px Arial`;
                this.context.textAlign = "center";
                this.context.textBaseline = "bottom";
                this.context.strokeStyle = this.borderColor;
                const centerX = node.x + halfSize;
                const centerY = node.y - 4;
                this.context.fillText(node.label, centerX, centerY);
            }
        }
    }

    private drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number): void {
        const step = Math.PI / spikes;
        this.context.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = cx + Math.cos(i * step) * radius;
            const y = cy + Math.sin(i * step) * radius;
            this.context.lineTo(x, y);
        }
        this.context.closePath();
    }

    private addEventListeners(): void {
        let isDragging = false; // Track if a node is being dragged

        this.wrapper.addEventListener("pointerdown", (event) => {
            //console.log('pointerdown');
            const { offsetX, offsetY } = event;
            isDragging = false;
            //this.selectedNode = null;
            if (this.selectedNode) {
                if (!(
                    offsetX >= this.selectedNode.x &&
                    offsetX <= this.selectedNode.x + this.selectedNode.size &&
                    offsetY >= this.selectedNode.y &&
                    offsetY <= this.selectedNode.y + this.selectedNode.size
                )) {
                    //console.log('unselect the node', this.selectedNode.id);
                    this.selectedNode.selected = false;
                    this.selectedNode = null;
                }
            }

            // Check if a node was clicked for dragging or selection
            for (const node of this.nodes) {
                //console.log('checking node', node.id);
                if (
                    offsetX >= node.x &&
                    offsetX <= node.x + node.size &&
                    offsetY >= node.y &&
                    offsetY <= node.y + node.size
                ) {
                    // unselect any edge
                    if (this.selectedEdge) {
                        //console.log('unselect the edge', this.selectedEdge.id);
                        this.selectedEdge.selected = false;
                        this.selectedEdge = null;
                    }
                    // check current selected node
                    const currentNode = this.nodes.find(node => node.id === this.selectedNode?.id);
                    if (currentNode && currentNode.id !== node.id) {
                        //console.log('unselect the node', currentNode.id);
                        currentNode.selected = false;
                        //console.log('unselect the node', node.id);
                        this.selectedNode = null;
                    }
                    // Select the node
                    node.selected = true;
                    this.selectedNode = node;
                    this.offsetX = offsetX - node.x;
                    this.offsetY = offsetY - node.y;
                    isDragging = true; // Prepare for dragging
                    //console.log('selecting node', node.id);
                    this.render();
                    return;
                }
            }

            // Check if an edge was clicked for selection
            for (const edge of this.edges) {
                const fromNode = this.nodes.find(node => node.id === edge.from);
                const toNode = this.nodes.find(node => node.id === edge.to);
                if (!fromNode || !toNode) continue;

                const startX = fromNode.x + fromNode.size / 2;
                const startY = fromNode.y + fromNode.size / 2;
                const endX = toNode.x + toNode.size / 2;
                const endY = toNode.y + toNode.size / 2;

                const distance = Math.abs(
                    ((endY - startY) * offsetX - (endX - startX) * offsetY + endX * startY - endY * startX) /
                    Math.sqrt((endY - startY) ** 2 + (endX - startX) ** 2)
                );

                if (distance < 5) {
                    // Toggle edge selection
                    if (this.selectedEdge === edge) {
                        this.selectedEdge = null;
                    } else {
                        this.selectedEdge = edge;
                    }
                    this.selectedNode = null; // Clear node selection
                    this.render();
                    return;
                }
            }

            // If neither a node nor an edge is clicked, clear selections
            this.selectedNode = null;
            this.selectedEdge = null;
            this.render();
        });

        this.wrapper.addEventListener("pointermove", (event) => {
            if (this.selectedNode && isDragging) {
                const { offsetX, offsetY } = event;
                this.selectedNode.x = offsetX - this.offsetX;
                this.selectedNode.y = offsetY - this.offsetY;
                this.render();
                //console.log("Nodes:", this.nodes);
                //console.log("Edges:", this.edges);
            }
        });

        this.wrapper.addEventListener("pointerup", () => {
            isDragging = false; // Stop dragging
            const nid = this.selectedNode ? this.selectedNode.id as string : '';
            const eid = this.selectedEdge ? this.selectedEdge.id as string : '';
            this.callBack({state:"up",node:nid, edge:eid});
        });

        this.wrapper.addEventListener("pointercancel", () => {
            isDragging = false; // Handle gesture cancellation (e.g., multitouch interruption)
        });

        if (window) {
            window.addEventListener("resize", () => {
                // Optionally re-center the canvas on resize
                this.resetView();
            });
        }
    }


}

export { DataPipes };
export type { NodeConfig, EdgeConfig };

