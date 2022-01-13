import {Injectable} from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import {CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_FOLDER_NAME, CLOUD_NAME} from '../config';
import {InjectRepository} from '@nestjs/typeorm';
import {File} from './file.entity';
import {Repository} from 'typeorm';
import {Note} from '../notes/note.entity';

@Injectable()
export class FilesService {
  cloudService = cloudinary;
  constructor(
    @InjectRepository(File)
    private readonly filesRepository: Repository<File>
  ) {
    this.cloudService.config({
      cloud_name: CLOUD_NAME,
      api_key: CLOUD_API_KEY,
      api_secret: CLOUD_API_SECRET
    })
  }

  saveFile(file, noteId: number): Promise<File> {
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
    }).then(async (res: any) => {
      const newFile = {
        ...new File(),
        url: res.url,
        note: { id:  noteId} as Note
      };

      await this.filesRepository.save(newFile);
      return this.filesRepository.findOne(newFile.id);
    });
  }
}