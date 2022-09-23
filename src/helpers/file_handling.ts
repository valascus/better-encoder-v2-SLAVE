import path from 'path'

type FilePathInfo = {
    dirname: string,
    filename: string,
}

export const getFilenameAndPathFromFullPath = (fullPath:string) => {
    return {
        filename: path.basename(fullPath),
        dirname: path.dirname(fullPath)
    }
}

export const get
