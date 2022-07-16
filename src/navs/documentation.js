import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [
    pages['getting-started'],
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/installation/,
    },
    pages['core-concepts'],
  ],
  Array: [
    pages['array-boil'],
    pages['array-cluster'],
    pages['array-first'],
    pages['array-last'],
    pages['array-flat'],
    pages['array-fork'],
    pages['array-group'],
    pages['array-intersects'],
    pages['array-iterate'],
    pages['array-max'],
    pages['array-min'],
    pages['array-merge'],
    pages['array-sum'],
    pages['array-sort'],
    pages['array-replace'],
    pages['array-replace-or-append'],
    pages['array-objectify'],
    pages['array-select'],
    pages['array-unique'],
    pages['array-range'],
    pages['array-sift'],
  ],
  Async: [
    pages['async-map'],
    pages['async-reduce'],
    pages['async-defer'],
    pages['async-retry'],
    pages['async-sleep'],
    pages['async-try'],
  ],
  Curry: [
    pages['curry-chain'],
    pages['curry-compose'],
    pages['curry-partial'],
    pages['curry-partob'],
    pages['curry-proxied'],
    pages['curry-memo'],
  ],
  Number: [
    pages['number-to-int'],
    pages['number-to-float'],
  ],
  Object: [
    pages['object-shake'],
    pages['object-map-keys'],
    pages['object-map-values'],
    pages['object-map-entries'],
    pages['object-invert'],
    pages['object-lowerize'],
    pages['object-upperize'],
    pages['object-listify'],
    pages['object-pick'],
    pages['object-omit'],
    pages['object-get'],
  ],
  Typed: [
    pages['typed-is-symbol'],
    pages['typed-is-array'],
    pages['typed-is-object'],
    pages['typed-is-function'],
    pages['typed-is-string'],
    pages['typed-is-number'],
    pages['typed-is-empty'],
  ],
  Series: [
    pages['series-series'],
  ],
  String: [
    pages['string-camal'],
    pages['string-snake'],
    pages['string-dash'],
    pages['string-template'],
    pages['string-capitalize'],
  ],
  Random: [
    pages['random-draw'],
    pages['random-shuffle'],
    pages['random-random'],
    pages['random-uid'],
  ],
}
