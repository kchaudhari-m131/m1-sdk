import * as _ from 'lodash';
import { MediaTypes } from './constants';

export class Utils {

  public static verifyFileType(file: File, supportedFiles: string[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const blob = file;
      const ext = file.type.split('/')[1];
      const fileReader = new FileReader();
      const self = this;

      fileReader.onload = (e: any) => {
        try {
          const arr = (new Uint8Array( e.target.result as ArrayBuffer)).subarray(0, 4);
          let header = '';
          for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }
          let mime = 'unknown'
          if (header == '89504e47') {
            mime = 'image/png';
          }
          else if (header == '4d4d002a' || header.startsWith('49492a0')) {
            mime = 'image/tiff'
          }
          else if (header == '25504446') {
            mime = 'application/pdf';
          }
          else if (header.startsWith('ffd8ff')) {
            mime = 'image/jpeg';
          }
          else if (header.startsWith('424d')) {
            mime = 'image/bmp';
          }
          else if (header == '52494646' || header.startsWith('5249')) {
            mime = 'image/webp';
          }
          else if (header == '0010' || header.startsWith('0010')) {
            mime = 'image/ico';
          }
          else if ((header == '3c3f786d' || header.startsWith('3c')) && file?.type != 'text/xml') {
            mime = 'image/svg';
          }
          else if (header == '64617461' || header == '59656172' || file?.type == 'text/csv') {
            mime = 'text/csv';
          }
          else if ((header == '3c3f786d' || header.startsWith('3c3f')) && file?.type == 'text/xml') {
            mime = 'text/xml';
          }
          else if (header.startsWith('504b34')) {
            mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          }
          else if (header.startsWith('d0cf11e0')) {
            mime = 'application/vnd.ms-excel';
          }

          const fileType = _.findKey(MediaTypes, function(item : any) { return item === mime; });
          if (mime === 'unknown' || !fileType || !supportedFiles.includes(`.${fileType?.toLowerCase()}`)) {
            resolve(false);
          } else {
            resolve(true);
          }
        } catch (err) {
          reject(err);
        }
      };
      fileReader.readAsArrayBuffer(blob);
    });
  }

  public static convertDate() {
    const date = new Date();
    let day = date.getDate().toString();
    let month = date.getMonth().toString();
    month = month + 1;
    if ((String(day)).length == 1) {
      day = '0' + day;
    }
    if ((String(month)).length == 1) {
      month = '0' + month;
    }
    return date.getFullYear() + '' + month + '' + day;
  }

}
