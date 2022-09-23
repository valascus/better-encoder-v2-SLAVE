import {DownloaderHelperOptions} from "node-downloader-helper";

export interface SourceDownloadOptionsInterface {
    // stream can be done later :p
    type: 'file' | 'stream',
    fileDownloadOptions?: DownloaderHelperOptions,
    streamDownloadOptions?: null
}