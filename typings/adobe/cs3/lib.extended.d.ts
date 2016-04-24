/**
 * Extended types definitions, used across different Adobe applications
 *
 * @see Illustrator CS3 JavaScript Reference.pdf
 */

/**
 * File and Folder Objects
 */
interface FileStatic {
  fs: string;
  decode(uri: string): string;
  encode(name: string): string;
  isEncodingAvailable(name: string): boolean;
  openDialog (prompt?: string, filter?: string, multiSelect?: boolean): FileInstance;
  saveDialog (prompt: string, filter?: string): FileInstance;
  // MacOS versions with filter functions
  openDialog (prompt?: string, filter?: (file: FileInstance) => boolean, multiSelect?: boolean): FileInstance;
  saveDialog (prompt: string, filter?: (file: FileInstance) => boolean): FileInstance;
}

interface FileInstance {
  absoluteURI: string;
  alias: boolean;
  created: Date;
  creator: string;
  displayName: string;
  encoding: string;
  eof: boolean;
  error: string;
  exists: boolean;
  fsName: string;
  fullName: string;
  hidden: boolean;
  length: number;
  lineFeed: string;
  modified: Date;
  name: string;
  parent: FolderInstance;
  path: string;
  readonly: boolean;
  relativeURI: string;
  type: string;
  changePath (path: string): boolean;
  close(): boolean;
  copy (target: string): boolean;
  copy (target: FileInstance): boolean;
  createAlias (path: string): boolean;
  execute(): boolean;
  getRelativeURI (basePath?: string): string;
  open (mode: "r"|"w"|"e", type?: string, creator?: string): boolean;
  openDlg (prompt?: string, filter?: string, multiSelect?: boolean): FileInstance; //@todo MacOS
  read (chars?: number): string;
  readch(): string;
  readln(): string;
  remove(): boolean;
  rename (newName: string): boolean;
  resolve(): FileInstance;
  saveDlg (prompt?: string, filter?: string): FileInstance; //@todo MaxOS
  seek (pos: number, mode?: number): boolean;
  tell(): number;
  write (text: string, ...optionalParams: string[]): boolean;
  writeln (text: string, ...optionalParams: string[]): boolean;
}

interface FileConstructor extends FileStatic {
  (path?: string): FileInstance;
  new(path?: string): FileInstance;
  prototype: FileInstance;
}

declare var File: FileConstructor;

interface FolderStatic {
}

interface FolderInstance {
  name: string;
  parent: FolderInstance;
}

interface FolderConstructor extends FolderStatic {
  new(path?: string): FolderInstance;
  prototype: FolderInstance;
}

declare var Folder: FolderConstructor;

/**
 * External Communication Tools
 */
declare var ExternalObject: {
  new(path: string): void;
}

interface HttpConnectionInstance {
  async: boolean;
  close(): boolean;
  execute(): boolean;
  pump(): boolean;
  status: number;
}

interface HttpConnectionConstructor extends HttpConnectionStatus {
  (url?: string): HttpConnectionInstance;
  new (url?: string): HttpConnectionInstance;
  prototype: HttpConnectionInstance;
}

interface HttpConnectionStatus {
  statusCompleted: boolean;
  statusIdle: boolean;
  statusRunning: boolean;
  statusSuspended: boolean;
  statusFailed: boolean;
}

declare var HttpConnection: HttpConnectionConstructor;

/**
 * User Notification Dialogs
 */
declare function alert(message: string, title?: string, errorIcon?: boolean): void;
declare function confirm(message: string, noAsDflt?: boolean, title?: string): boolean;
declare function prompt(mmessage: string, preset: string, title?: string): string | void;

/**
 * Dollar object
 */
declare var $: {
  build: number;
  buildDate: Date;
  engine: string;
  error: Error | string;
  fileName: string;
  flags: number;
  // @fixme global: Global;
  includePath: string;
  level: number;
  locale: string;
  localize: boolean;
  memCache: number;
  os: string;
  // @fixme screens: number[];
  stack: string;
  strict: boolean;
  version: string;
  about(): string;
  bp(condition?: string): void;
  // @fixme colorPicker(): number;
  evalFile(path: string, timeout?: number): any;
  gc(): void;
  getenv(name: string): string;
  setenv(name: string, value: string): void;
  sleep(milliseconds: number): void;
  write(message?: any, ...optionalParams: any[]): void;
  writeln(message?: any, ...optionalParams: any[]): void;
}
