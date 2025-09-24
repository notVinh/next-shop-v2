"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ImageResize from "tiptap-extension-resize-image";
import ToolBar from "@/components/adminUI/EditorUI/ToolBar";

type TipTapProps = {
  content?: string;
  handleSubmit?: (content: string) => void;
};

export default function TipTap({ content }: TipTapProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3",
        },
      }),
      Highlight,
      Image,
      ImageResize,
    ],
    content: "<p className='text-gray-300'>" + content + "</p>",
    editorProps: {
      attributes: {
        class:
          "min-h-[156px] w-full h-[400px] border rounded-md bg-white py-2 px-3 overflow-y-auto focus:outline-none flex-1 ",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      // onChange(editor.getHTML());
    },
  });

  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
