import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface Props {}
const Editor: FC<Props> = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit],
  });
  return (
    <div>
      <button
        onClick={() => {
          editor?.chain().focus().toggleBold().run();
        }}
      >
        Bold
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
