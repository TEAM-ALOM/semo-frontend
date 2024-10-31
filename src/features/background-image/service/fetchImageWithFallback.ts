interface FetchImageWithFallbackParams {
  imageUrl: string;
  onSuccess: () => void;
  onError: () => void;
}

export const fetchImageWithFallback = ({
  imageUrl,
  onSuccess,
  onError,
}: FetchImageWithFallbackParams) => {
  const img = new Image();
  img.src = imageUrl;
  img.onload = onSuccess;
  img.onerror = onError;
};
