const sounds = [
  'silence',
  'alarm',
  'anticipate',
  'bell',
  'birdsong',
  'bloom',
  'calypso',
  'chime',
  'choo',
  'descent',
  'electronic',
  'fanfare',
  'glass',
  'gotosleep',
  'healthnotification',
  'horn',
  'ladder',
  'mailsent',
  'minuet',
  'multiwayinvitation',
  'newmail',
  'newsflash',
  'noir',
  'paymentsuccess',
  'shake',
  'sherwoodforest',
  'spell',
  'suspense',
  'telegraph',
  'tiptoes',
  'typewriters',
  'update',
] as const;

const level = ['active', 'timeSensitive', 'passive'] as const;

export type BarkSound = typeof sounds[number];

export type BarkLevel = typeof level[number];

export interface BarkConfig {
  body:	string;
  category:	string;
  device_key:	string;
  title?:string;
  level?:	string;
  badge?:	number;
  automaticallyCopy?:	string;
  copy?: string;
  sound?: string;
  icon?: string;
  group?: string;
  isArchive?: string;
  url?: string;
}
