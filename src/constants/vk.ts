export const GROUP_ID = '220029226';
export const MENTION_PATTERN = new RegExp(
  String.raw`^(?:\[club${GROUP_ID}\|[^\]]+\])(?:[\s.,\'\"!?\-+]+|$)`,
  'i'
);