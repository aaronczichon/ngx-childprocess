import { ElectronWindow } from '../typings/index';
import { ChildProcess } from './childProcess.interface';

declare const window: ElectronWindow;

export class ChildProcessService {
    private _child_process: any;

    private get child_process(): any {
        if (!this._child_process) {
            this._child_process = window.require ? window.require('child_process') : null;
        }
        return this._child_process;
    }

    /**
     * determines if SPA is running in Electron
     * @returns {boolean}
     */
    public get isElectronApp(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    public get childProcess(): ChildProcess {
        return <ChildProcess>this.child_process ? this.child_process : null;
    }

}
