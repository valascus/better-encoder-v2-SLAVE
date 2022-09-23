import {spawn} from "child_process";
import * as fs from "fs";
import {DownloaderHelper, DownloaderHelperOptions} from "node-downloader-helper";
export const downloadHlsVideo = (url: string, output: string) => {

}
export const downloadMp4Video = (url: string, newFileOutput: string, options: DownloaderHelperOptions  ) => {

    const downloader = new DownloaderHelper(url, output);
}

export const encodeH264Hls = (input: string, output: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const ffmpeg = spawn('ffmpeg', [
            '-i', input,
            '-c:v', 'libx264',
            '-preset', 'veryfast',
            '-crf', '23',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-ac', '2',
            '-f', 'hls',
            '-hls_time', '10',
            '-hls_list_size', '0',
            '-hls_segment_filename', `${output}/%03d.ts`,
            `${output}/index.m3u8`
        ]);

        ffmpeg.stdout.on('data', (data) => {
            // get progress

        });

        ffmpeg.stderr.on('data', (data) => {
            // write to data to file
            fs.appendFileSync(`[${Date.now().toLocaleString('pt-PT')}] Input file: ${input} - Output file: ${output}.log`, data);
            reject(`Bad input file: ${input}`);
        });

        ffmpeg.on('close', () => {
            resolve();
        });

        ffmpeg.on('error', (err) => {
            console.log(`child process exited with error ${err}`);
            reject();
        });
    });
}