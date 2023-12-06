export const UploadFailure: any = {
  TWN_EDR: {
    UPLOAD_FAILURE: 'EDR submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'Maximum 10 file can be uploaded',
  },
  PAYSTUB_FILE: {
    UPLOAD_FAILURE: 'Paystubs submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'Maximum 10 files can be uploaded',
  },
  TRANSCRIPT_FILE: {
    UPLOAD_FAILURE: 'Transcripts submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'You can upload only upto 10 transcripts',
    MEDIA_TYPE_CONFLICT: 'Files should be of the same format',
  },
  INSURANCE_POLICY: {
    UPLOAD_FAILURE: 'Insurance policy submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'Maximum 10 file can be uploaded',
  },
  W2_FILE: {
    UPLOAD_FAILURE: 'W2 File submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'Maximum 10 file can be uploaded',
  },
  COMPANY_ICON_FILE: {
    UPLOAD_FAILURE: 'Icon submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'You can upload only 1 icon',
    MEDIA_TYPE_CONFLICT: 'Files should be of the same format',
  },
  COMPANY_LOGO_FILE: {
    UPLOAD_FAILURE: 'Logo submission failed, please try again.',
    FILE_LENGTH_EXCEEDED: 'You can upload only 1 logo',
    MEDIA_TYPE_CONFLICT: 'Files should be of the same format',
  },
};

export enum BSGrid {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export const ImageMap: any = {
'vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx-icon.svg',
'vnd.ms-excel': 'xls-icon.svg'
};

export const FileExtensionMap: any = {
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-excel': 'xls'
};

export const MediaTypes: any = {
  JPEG: 'image/jpeg',
  JPG: 'image/jpg',
  PNG: 'image/png',
  TIFF: 'image/tiff',
  TIF: 'image/tif',
  BMP: 'image/bmp',
  PDF: 'application/pdf',
  WEBP: 'image/webp',
  ICO: 'image/ico',
  SVG: 'image/svg', 
  XML: 'text/xml',
  XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS: 'application/vnd.ms-excel',
  CSV: 'text/csv'
};
