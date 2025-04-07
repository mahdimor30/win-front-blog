"use client";

import type React from "react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/utils";

type Comment = {
  id: string
  author: string
  content: string
  date: string
}

export function CommentSection({ blogId }: { blogId: string }) {
  // In a real app, you would fetch comments from a database
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "علی محمدی",
      content: "مقاله عالی بود! ممنون از اشتراک‌گذاری.",
      date: new Date().toISOString(),
    },
    {
      id: "2",
      author: "سارا احمدی",
      content: "از این پست خیلی چیزها یاد گرفتم. منتظر مطالب بیشتری مثل این هستم.",
      date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim() || !author.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: author.trim(),
      content: newComment.trim(),
      date: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="mt-8 space-y-8">
      <h2 className="text-2xl font-bold">نظرات ({comments.length})</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            نام
          </label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="نام شما"
            required
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            نظر
          </label>
          <Textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="نظر خود را بنویسید..."
            className="min-h-[100px]"
            required
          />
        </div>

        <Button type="submit">ارسال نظر</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.author}</span>
                <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

