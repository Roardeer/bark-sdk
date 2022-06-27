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

export enum BarkLevelEnum {
  ACTIVE = 'active',
  TIME_SENSITIVE = 'timeSensitive',
  PASSIVE = 'passive',
}

export enum BarkSoundEnum {
  SILENCE = 'silence',
  ALARM = 'alarm',
  ANTICIPATE = 'anticipate',
  BELL = 'bell',
  BIRDSONG = 'birdsong',
  BLOOM = 'bloom',
  CALYPSO = 'calypso',
  CHIME = 'chime',
  CH_OO = 'choo',
  DESCENT = 'descent',
  ELECTRONIC = 'electronic',
  FANFARE = 'fanfare',
  GLASS = 'glass',
  GOTO_SLEEP = 'gotosleep',
  HEALTH_NOTIFICATION = 'healthnotification',
  HORN = 'horn',
  LADDER = 'ladder',
  MAIL_SENT = 'mailsent',
  MINUET = 'minuet',
  MULTIWAY_INVITATION = 'multiwayinvitation',
  NEW_MAIL = 'newmail',
  NEWSFLASH = 'newsflash',
  NOIR = 'noir',
  PAYMENT_SUCCESS = 'paymentsuccess',
  SHAKE = 'shake',
  SHERWOOD_FOREST = 'sherwoodforest',
  SPELL = 'spell',
  SUSPENSE = 'suspense',
  TELEGRAPH = 'TELEGRAPH',
  TIPTOES = 'tiptoes',
  TYPEWRITERS = 'typewriters',
  UPDATE = 'update',
}

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

export type BarkConfigKey = keyof BarkConfig;
