export interface ChildProcess {
    exec(command: string, options: any[], callback: any): any;
    execFile(file: string, args: any[], options: any, callback: any): any;
    fork(modulePath: string, args: any[], options: any): any;
    spawn(command: string, args: any[], options: any): any;
    execFileSync(file: string, args: any[], options: any): any;
    execSync(command: string, options: any): any;
    spawnSync(command: string, args: any[], options: any): any;
}
