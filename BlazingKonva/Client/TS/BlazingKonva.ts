/// Root Konva interop functions for Razor

/// When using the output JS for WASM you'll need to remove this line from the output .js file and manually reference the konva.js library in html
import Konva from "../node_modules/konva";

/// Initializes the target <div> element with the Kanva object.
/// Optional width and height can be specified. If not passed, then the offsetWidth & offsetHeight will be used
/// Returns the initialized first Konva.Stage
export function InitKonva(targetElementID: string, optionalCanvasWidth?: number, optionalCanvasHeight?: number): Konva.Stage {
    var targetElement = document.getElementById(targetElementID);
    if (targetElement == null)
        return;

    var renderWidth = optionalCanvasWidth ?? targetElement.offsetWidth;
    var renderHeight = optionalCanvasHeight ?? targetElement.offsetHeight;

    return new Konva.Stage({
        container: targetElementID,
        width: renderWidth,
        height: renderHeight
    });
}

/// Creates a new Konva.Layer object, adds it to the parent element and returns reference
export function CreateLayer(parentKonvaObj: Konva.Stage | Konva.Group): Konva.Layer {
    var layer = new Konva.Layer();
    Add(parentKonvaObj, layer);

    return layer;
}

/// Creates a new Konva.Group object, adds it to the parent element and returns reference
export function CreateGroup(parentKonvaObj: Konva.Stage | Konva.Group | Konva.Layer): Konva.Group {
    var group = new Konva.Group();
    Add(parentKonvaObj, group);

    return group;
}

/// Add/Appends a child element to the parent. Parent & child should be a valid Konva element
/// Parent = Konva.Stage, Konva.Layer, Konva.Group
/// Child = Konva.Layer, Konva.Group, Konva.Shape
export function Add(parentKonvaObj: Konva.Stage | Konva.Layer | Konva.Group, childKonvaObj): void {
    parentKonvaObj.add(childKonvaObj);
}