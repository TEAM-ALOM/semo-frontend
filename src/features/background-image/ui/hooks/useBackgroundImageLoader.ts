import { useState, useEffect } from 'react';
import { FALLBACK_BACKGROUND_URL } from '../../model/backgroundImages';
import { fetchImageWithFallback } from '../../service/fetchImageWithFallback';
import { getRandomImageUrl } from '../../service/getRandomImageUrl';

export const useBackgroundImageLoader = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');
  const [isImageReady, setIsImageReady] = useState<boolean>(false);

  useEffect(() => {
    const imageUrl = getRandomImageUrl();
    setBackgroundImageUrl(imageUrl);

    fetchImageWithFallback({
      imageUrl,
      onSuccess: () => setIsImageReady(true),
      onError: () => {
        setBackgroundImageUrl(FALLBACK_BACKGROUND_URL);
        setIsImageReady(true);
      },
    });
  }, []);

  return { backgroundImageUrl, isImageReady };
};
