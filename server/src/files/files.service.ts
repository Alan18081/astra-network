import {Injectable} from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import {CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_FOLDER_NAME, CLOUD_NAME} from '../config';

@Injectable()
export class FilesService {
  cloudService = cloudinary;
  constructor() {
    this.cloudService.config({
      cloud_name: CLOUD_NAME,
      api_key: CLOUD_API_KEY,
      api_secret: CLOUD_API_SECRET
    })
  }

  saveFile(file): Promise<string> {
    return new Promise((resolve, reject) => {
      this.cloudService.v2.uploader.upload(
        file.path,
        { folder: CLOUD_FOLDER_NAME },
        (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      });
    }).then((res: any) => res.url);
  }
}