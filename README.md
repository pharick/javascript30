# javascript30

Solutions to the first 13 of the 30 vanilla-JavaScript browser challenges from Wes Bos's JavaScript30 course, January 2018. Plain HTML, CSS and ES2015 JavaScript with no framework and no build step; an ESLint 4 configuration (`eslint:recommended`, 2-space indent, single quotes, required semicolons, Unix line endings) is checked in.

## What it covers

Challenges present: 1-13. Challenges 14-30 are not in this repository.

| Folder | Challenge | Techniques |
|---|---|---|
| `1-drumkit` | JavaScript drum kit | `keydown` to `audio[data-key]` lookup, `currentTime = 0` before `play()`, `transitionend` to drop the pressed class, click delegation on the container |
| `2-clock` | CSS + JS clock | `Date` to hand angles (minute and hour hands advance continuously), `transform: rotate`, `setInterval` |
| `3-css-variables` | CSS variables | one `change` listener writes `--<property>` via `style.setProperty` using `data-property` / `data-units` |
| `4-cardio-array-1` | Array cardio 1 | `filter`, `map`, `sort`, `reduce` over inventors and names |
| `5-flex-gallery` | Flex panel gallery | flexbox panels; click handler walks up from `e.target` to the panel and toggles it |
| `6-ajax-type` | Ajax type-ahead | `fetch` of a cities JSON, live regex filtering of city/state and highlighted matches on `keyup` |
| `7-cardio-array-2` | Array cardio 2 | `some`, `every`, `find`, `findIndex`, `splice` |
| `8-canvas` | Fun with HTML5 canvas | mouse drawing on a full-window canvas, HSL hue cycling and oscillating line width |
| `9-dev-tools` | Dev tools tricks | console API: `%s`/`%c` formatting, `assert`, `group`, `count`, `time`, `table` |
| `10-multiple-checkboxes` | Hold shift to check | shift-click range selection by flipping an `inBetween` flag while iterating the checkboxes |
| `11-video-player` | Custom video player | play/pause, skip buttons via `data-skip`, volume and playback-rate sliders bound by `name`, progress bar with click and drag scrubbing, fullscreen request |
| `12-conami-code` | Key sequence detection | rolling buffer of the last N `key` values compared to a secret string |
| `13-slide-on-scroll` | Slide in on scroll | scroll listener reveals images once half of them is in the viewport |

## Notable exercises

- `11-video-player/videoplayer.js`: the largest piece - a `<video>` wrapped in custom controls; `handleRangeUpdate` sets `video[this.name]` so one handler serves both sliders, and scrubbing is a `mousedown`/`mousemove`/`mouseup` state machine on the `<progress>` element.
- `12-conami-code/index.html`: `pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)` keeps only the last N keys, so the check is a single `join` and compare.
- `10-multiple-checkboxes/multiple-checkboxes.js`: Gmail-style shift selection in 16 lines using `lastChecked` and a toggle flag.
- `1-drumkit/drumkit.js`: keyboard and mouse share `playSound`/`pickUpItem`; the pressed animation is released on `transitionend` rather than with a timer.
- `6-ajax-type/ajax-type.js`: `findMatches` builds a case-insensitive `RegExp` from the input and `displayMatches` renders the highlighted list with template strings.

## Running

Open any folder's `index.html` (or `4-cardio-array-1/boulevards.html`) in a browser; results of the two array-cardio challenges and of `9-dev-tools` appear in the console. `6-ajax-type`, `9-dev-tools` and `11-video-player` fetch data or video from external URLs and need network access.

To lint: `npm install` (installs ESLint 4 and `eslint-plugin-react` as dev dependencies), then `npx eslint .`. The `npm test` script is the npm placeholder and exits with an error.

## Notes

- The folder `12-conami-code` keeps the course's misspelling; the secret sequence is `wesbos`, as in the course, not the Konami sequence.
- Class names follow BEM (`drumkit__item_pressed`, `player__slider`).
- Early learning code kept as a record: 12 JS, 12 HTML and 8 CSS files, about 1 300 lines.
