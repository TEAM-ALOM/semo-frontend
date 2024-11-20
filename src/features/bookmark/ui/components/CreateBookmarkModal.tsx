import { useEffect } from 'react';
import { useMockBookmarkList } from '../hooks/useMockBookmark';

interface CreateBookmarkModalProps {
  close: () => void;
}
export const CreateBookmarkModal = ({ close }: CreateBookmarkModalProps) => {
  const [_, setMockBookmarkList] = useMockBookmarkList();
  // todo mutation 으로 변경

  useEffect(() => {
    const title = prompt('title 입력');
    const url = prompt('url 입력');
    if (!title || !url) {
      return;
    }
    setMockBookmarkList(prev => [
      ...prev,
      {
        title: title || '',
        url: url || '',
        id: Date.now().toString(),
      },
    ]);
  }, [setMockBookmarkList]);

  return (
    <div>
      <button onClick={close}>닫기</button>
      {/* title 입력인풋  */}
      {/* url 입력인풋 */}
      {/* 저장 버튼  */}
    </div>
  );
};
