import * as React from 'react';

import { EmojiStyle } from '../../types/exposedTypes';

import { GetEmojiUrl, ViewOnlyEmoji } from './Emoji';

export function ExportedEmoji({
  unified,
  size = 32,
  emojiStyle = EmojiStyle.APPLE,
  lazyLoad = false,
  getEmojiUrl,
  crossOrigin,
}: {
  unified: string;
  emojiStyle?: EmojiStyle;
  size?: number;
  lazyLoad?: boolean;
  getEmojiUrl?: GetEmojiUrl;
  crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined;
}) {
  if (!unified) {
    return null;
  }

  return (
    <ViewOnlyEmoji
      unified={unified}
      size={size}
      emojiStyle={emojiStyle}
      lazyLoad={lazyLoad}
      getEmojiUrl={getEmojiUrl}
      crossOrigin={crossOrigin}
    />
  );
}
