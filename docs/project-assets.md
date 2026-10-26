# Selected Work assets

Content and media metadata live in `src/data/projects.ts`. Files live in `public/projects/<project-id>/`.

| Project ID | Cover | Screenshots | Video |
| --- | --- | --- | --- |
| `cadira` | `cover.webp` | `screen-1.webp` through `screen-4.webp` | Pending |
| `reign-models` | `hero.webp` | `screen-1.webp` through `screen-4.webp` | Pending |
| `rumah-bisnis-mandiri` | `cover.webp` | `screen-1.webp` through `screen-7.webp` | Pending |
| `savvie` | `cover.webp` (frame extracted from the recording) | Pending | `demo.mp4` |

## Replace an existing asset

Replace the file at the same path. Keep the filename to avoid changing the UI. If the image aspect ratio changes, update its `width` and `height` in the project data. Covers for web projects are 1600 × 1000; the Savvie cover is a portrait video frame.

## Add a missing walkthrough

1. Put an H.264 MP4 at `public/projects/<project-id>/demo.mp4`, preferably with fast-start metadata.
2. Add `src: "/projects/<project-id>/demo.mp4"` to that project's `demo` object.
3. Keep `poster` or replace it with a new poster image.

The existing “Demo · soon” button and placeholder automatically become a playable video. Video uses native controls and loads only when the gallery opens.

## Add Savvie screenshots

1. Put real screenshots at `public/projects/savvie/screen-1.webp`, etc.
2. Update the `screenshots` array with captions and actual dimensions.
3. Remove `placeholder: true` from each completed entry.

The screenshot count and gallery controls update from the data. Placeholder paths are never requested while `placeholder` is true.

## Content still awaiting confirmation

Rumah Bisnis Mandiri's tech stack is intentionally empty until confirmed. No technologies or individual contribution claims have been invented. Savvie's stack is retained from the existing portfolio data and can be updated here if needed.

Original supplied files were read from `/Users/aldomarcelino/Downloads/Primary/ss-portfolio`; the website uses its own optimized copies and has no dependency on the Downloads folder.
