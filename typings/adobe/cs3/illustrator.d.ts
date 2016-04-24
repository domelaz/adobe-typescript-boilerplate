interface Application {
  activeDocument: Document;
  documents: Documents;
  open(filename: FileInstance): Document;
  userInteractionLevel: UserInteractionLevel;
}

interface Document {
  /**
   * The currently opened dataset.
   */
  activeDataset: DataSet;
  
  /**
   * The active layer in the document.
   */
  activeLayer: Layer;

  /**
   * The document’s current view.
   * 
   * @readonly
   */
  activeView: View;

  /**
   * The brushes contained in the document.
   *
   * @readonly
   */
  brushes: Brushes;

  /**
   * The list of character styles in this document.
   *
   * @readonly
   */
  characterStyles: CharacterStyles;

  /**
   * The compound path items contained in the document.
   *
   * @readonly
   */
  compoundPathItems: CompoundPathItems;

  /**
   * The boundary of the document’s cropping box for output, or `null` if no
   * value has been set.
   */
  cropBox: number[];

  /**
   * The style of the document’s cropping box.
   */
  cropStyle: CropOptions;

  /**
   * The datasets contained in the document.
   *
   * @readonly
   */
  dataSets: Datasets;

  /**
   * The color to use to fill new paths if defaultFilled is true.
   */
  defaultFillColor: Color;

  /**
   * If true, a new path should be filled.
   */
  defaultFilled: boolean;

  /**
   * If true, the art beneath a filled object should be overprinted by default.
   */
  defaultFillOverprint: boolean;

  graphicStyles: GraphicStyles;
  height: number;
  layers: Layers;
  name: string;
  parent: Application;
  rulerOrigin: Point;
  selection: PathItem[];
  activate(): void;
  close(options?: SaveOptions): void;
  saveAs(saveIn: FileInstance, options?: PDFSaveOptions): void;
  width: number;
}

interface Documents extends Props {
  /**
   * Creates a new document using optional parameters and returns a reference
   * to the new document.
   *
   * @example
   * // Creates a new document with an RGB color space
   * app.documents.add( DocumentColorSpace.RGB );
   *
   * @param {DocumentColorSpace} [colorSpace]
   * @param {number} [width]
   * @param {number} [height]
   * @returns {Document}
   */
  add(colorSpace?: DocumentColorSpace, width?: number, height?: number): Document;

  /**
   * Creates a new document using optional parameters and returns a reference
   * to the new document.
   *
   * @param {string} startupPreset
   * @param {DocumentPreset} presetSettings
   * @returns {Document}
   */
  addDocument(startupPreset: string, presetSettings: DocumentPreset): Document;

  /**
   * Gets the first element in the collection with the specified name.
   *
   * @param {string} name
   * @returns {Document}
   */
  getByName(name: string): Document;

  /**
   * Gets an element from the collection.
   *
   * @param {number} index
   * @returns {Document}
   */
  [index: number]: Document;
}

interface DocumentPreset {
  /**
   * The color space for the new document.
   *
   * @param {DocumentColorSpace} colorMode
   */
  colorMode: DocumentColorSpace;

  /**
   * The height in document points. Default: 792.0
   *
   * @param {number} height
   */
  height: number;

  /**
   * The preview mode for the new document.
   *
   * @param {DocumentPreviewMode} previewMode
   */
  previewMode: DocumentPreviewMode;

  /**
   * The raster resolution for the new document.
   *
   * @param {DocumentRasterResolution} rasterResolution
   */
  rasterResolution: DocumentRasterResolution;

  /**
   * The document title.
   *
   * @param {string} title
   */
  title: string;

  /**
   * The transparency grid color for the new document.
   *
   * @param {DocumentTransparencyGrid} transparencyGrid
   */
  transparencyGrid: DocumentTransparencyGrid;

  /**
   * The class name of the referenced object.
   *
   * @readonly
   */
  typename?: string;

  /**
   * The ruler units for the new document.
   *
   * @param {RulerUnits} units
   */
  units: RulerUnits;

  /**
   * The width in document points. Default: 612.0
   *
   * @param {number} width
   */
  width: number;
}

interface DocumentPresetConstructor {
  new(): DocumentPreset;
}

declare var DocumentPreset: DocumentPresetConstructor;

declare type XOrd = number;
declare type YOrd = number;
declare type Point = [XOrd, YOrd];

/**
 * Globals
 */
declare var app: Application;

interface Props {
  length: number;
  parent: any;
  typename: string;
}

/**
 * Generic collections
 */
interface Collection<T> {
  add(): T;
  getByName(name: string): T;
  length: number;
  parent: string; // @fixme Object
  removeAll(): void;
  typename: string;
}

interface GraphicStyles extends Collection<GraphicStyle> {} // @fixme no `add` here
interface Layers extends Collection<Layer> {}
interface PathItems extends Collection<PathItem> {}
interface PathPoints extends Collection<PathPoint> {}
interface PlacedItems extends Collection<PlacedItem> {}

interface GraphicStyle {
  name: string;
  parent: Document;
  typename: string;
  applyTo(artItem: PlacedItem): void;
  mergeTo(artItem: PathItem): void;
  remove();
}

interface Layer {
  name: string;
  parent: Document | Layer;
  pathItems: PathItems;
  placedItems: PlacedItems;
  zOrder(position: ZOrderMethod): void;
}

interface PathItem {
  pathPoints: PathPoints;
  position: number[];
}

interface PathPoint {
  anchor: number[];
  leftDirection: number[];
  rightDirection: number[];
  pointType: PointType;
}

declare class PDFSaveOptions {
  new(): PDFSaveOptions;
  acrobatLayers: boolean;
}

interface PlacedItem {
  file: FileInstance;
  height: number;
  parent: Layer;
  position: Point;
  remove(): void;
  resize(scaleX: number, scaleY: number, ...additionals: boolean[]): void; // @fixme incomplete
  width: number;
}

declare class CMYKColor {
  new(): CMYKColor;
  cyan: number;
  magenta: number;
  yellow: number;
  black: number;
}

/**
 * Enums
 */

/**
 * The color space of a document
 */
declare enum DocumentColorSpace {
  CMYK, RGB
}

/**
 * The document preview mode
 */
declare enum DocumentPreviewMode {
  DefaultPreview, PixelPreview, OverprintPreview
}

/**
 * The preset document raster resolution
 */
 declare enum DocumentRasterResolution {
   ScreenResolution, MediumResolution, HighResolution
 }

 /**
  * Document transparency grid colors
  */
declare enum DocumentTransparencyGrid {
  TransparencyGridNone, TransparencyGridLight, TransparencyGridMedium,
  TransparencyGridDark, TransparencyGridRed, TransparencyGridOrange,
  TransparencyGridGreen, TransparencyGridBlue, TransparencyGridPurple
}

declare enum PointType {
  CORNER, SMOOTH
}

declare enum SaveOptions {
  DONOTSAVECHANGES,
  PROMPTTOSAVECHANGES,
  SAVECHANGES
}

declare enum UserInteractionLevel {
  DONTDISPLAYALERTS
}

declare enum RulerUnits {
  Centimeters, Inches, Millimeters, Picas, Points, Qs, Pixels, Unknown
}

declare enum ZOrderMethod {
  SENDTOBACK
}
