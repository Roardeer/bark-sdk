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
  sound: BarkSound;
  isArchive?: 1 | 0;
  icon: string;
  group: string;
  level: BarkLevel;
  url: string;
  copy: string;
  badge: number;
  autoCopy?: 1 | 0;
}

export type BarkConfigKey = keyof BarkConfig;
