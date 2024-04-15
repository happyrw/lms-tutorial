import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 }})
        .onUploadComplete(() => {}),
    courseAttachment: f(["text", "image", "audio", "video", "pdf"])
        .onUploadComplete(() => {}),
    chapterVideo: f({ video: { maxFileSize: "512GB", maxFileCount: 1 }})
        .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;