<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Prerender only the explicitly listed public, visitor-independent pages to avoid per-request rendering without capturing private data.
- Serve lossless WebP copies of the original PNG artwork; retain original files and verify pixel equality when regenerating to preserve appearance.
- Gate carousel image sources until their container approaches the viewport so skipped below-fold content does not compete with the main image.
- Observe the carousel's parent section to prepare its unique images eagerly near the viewport, prioritize the first visible images, and start its animation only after all unique sources settle; native lazy-loading alone cannot prepare horizontally offscreen slides reliably.
