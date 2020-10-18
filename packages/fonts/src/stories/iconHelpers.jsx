import ChevronUp from '../assets/svg/arrows/chevron-up.svg'
import ChevronRight from '../assets/svg/arrows/chevron-right.svg'
import ChevronDown from '../assets/svg/arrows/chevron-down.svg'
import ChevronLeft from '../assets/svg/arrows/chevron-left.svg'
import CaretUp from '../assets/svg/arrows/caret-up.svg'
import CaretRight from '../assets/svg/arrows/caret-right.svg'
import CaretDown from '../assets/svg/arrows/caret-down.svg'
import CaretLeft from '../assets/svg/arrows/caret-left.svg'
import AngleUp from '../assets/svg/arrows/angle-up.svg'
import AngleRight from '../assets/svg/arrows/angle-right.svg'
import AngleDown from '../assets/svg/arrows/angle-down.svg'
import AngleLeft from '../assets/svg/arrows/angle-left.svg'
import Tick from '../assets/svg/symbols/check.svg'
import Cross from '../assets/svg/symbols/times.svg'
import Plus from '../assets/svg/symbols/plus.svg'
import Minus from '../assets/svg/symbols/minus.svg'
import CircleFilled from '../assets/svg/symbols/circle-filled.svg'
import CircleOutline from '../assets/svg/symbols/circle-outline.svg'

import Globe from '../assets/svg/symbols/globe.svg'
import Info from '../assets/svg/symbols/info.svg'
import ExclamationCircle from '../assets/svg/symbols/exclamation.svg'
import ExternalLink from '../assets/svg/symbols/external-link.svg'
import Search from '../assets/svg/symbols/search.svg'
import Sort from '../assets/svg/symbols/sort.svg'
import Filter from '../assets/svg/symbols/filter.svg'
import Sliders from '../assets/svg/symbols/sliders.svg'
import Flag from '../assets/svg/symbols/flag.svg'
import Question from '../assets/svg/symbols/question.svg'
import Adjust from '../assets/svg/symbols/adjust.svg'
import BookmarkRegular from '../assets/svg/symbols/bookmark-regular.svg'
import BookmarkSolid from '../assets/svg/symbols/bookmark-solid.svg'
import Bars from '../assets/svg/symbols/bars.svg'
import Envelope from '../assets/svg/symbols/envelope.svg'
import RssSquare from '../assets/svg/symbols/rss-square.svg'
import Heart from '../assets/svg/symbols/heart.svg'

import CcZero from '../assets/svg/cc/cc-zero.svg'
import CcSa from '../assets/svg/cc/cc-sa.svg'
import CcNc from '../assets/svg/cc/cc-nc.svg'
import CcLogo from '../assets/svg/cc/cc-logo.svg'
import CcPd from '../assets/svg/cc/cc-pd.svg'
import CcBy from '../assets/svg/cc/cc-by.svg'
import CcNd from '../assets/svg/cc/cc-nd.svg'

import CcSampling from '../assets/svg/cc/cc-sampling.svg'
import CcSamplingPlus from '../assets/svg/cc/cc-sampling-plus.svg'
import CcRemix from '../assets/svg/cc/cc-remix.svg'
import CcShare from '../assets/svg/cc/cc-share.svg'
import CcNcEu from '../assets/svg/cc/cc-nc-eu.svg'
import CcNcJp from '../assets/svg/cc/cc-nc-jp.svg'
import CcPdm from '../assets/svg/cc/cc-pdm.svg'
import CcHeart from '../assets/svg/cc/cc-heart.svg'
import CcHeartFilled from '../assets/svg/cc/cc-heart-filled.svg'

const iconComponents = {
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'angle-up': AngleUp,
  'angle-down': AngleDown,
  'angle-right': AngleRight,
  'angle-left': AngleLeft,
  'caret-up': CaretUp,
  'caret-down': CaretDown,
  'caret-right': CaretRight,
  'caret-left': CaretLeft,
  tick: Tick,
  cross: Cross,
  plus: Plus,
  minus: Minus,
  'circle-filled': CircleFilled,
  'circle-outline': CircleOutline,
  globe: Globe,
  info: Info,
  'exclamation-circle': ExclamationCircle,
  'external-link': ExternalLink,
  search: Search,
  sort: Sort,
  filter: Filter,
  sliders: Sliders,
  flag: Flag,
  question: Question,
  adjust: Adjust,
  'bookmark-regular': BookmarkRegular,
  'bookmark-solid': BookmarkSolid,
  bars: Bars,
  envelope: Envelope,
  'rss-square': RssSquare,
  heart: Heart,
  'cc-zero': CcZero,
  'cc-sa': CcSa,
  'cc-nc': CcNc,
  'cc-logo': CcLogo,
  'cc-pd': CcPd,
  'cc-by': CcBy,
  'cc-nd': CcNd,
  'cc-sampling': CcSampling,
  'cc-sampling-plus': CcSamplingPlus,
  'cc-remix': CcRemix,
  'cc-share': CcShare,
  'cc-nc-eu': CcNcEu,
  'cc-nc-jp': CcNcJp,
  'cc-pdm': CcPdm,
  'cc-heart': CcHeart,
  'cc-heart-filled': CcHeartFilled
}

const iconGroups = {
  arrows: {
    chevrons: ['chevron-up', 'chevron-down', 'chevron-right', 'chevron-left'],
    carets: ['caret-up', 'caret-down', 'caret-right', 'caret-left'],
    angles: ['angle-up', 'angle-down', 'angle-right', 'angle-left']
  },
  symbols: {
    shapes: ['tick', 'cross', 'plus', 'minus', 'circle-filled', 'circle-outline'],
    hieroglyphs: ['globe', 'info', 'exclamation-circle', 'external-link', 'search',
      'sort', 'filter', 'sliders', 'flag', 'question', 'adjust', 'bookmark-regular',
      'bookmark-solid', 'bars', 'envelope', 'rss-square', 'heart']
  },
  ccLicenses: {
    standard: ['cc-zero', 'cc-sa', 'cc-nc', 'cc-logo', 'cc-pd', 'cc-by', 'cc-nd'],
    nonStandard: ['cc-sampling', 'cc-sampling-plus', 'cc-remix', 'cc-share', 'cc-nc-eu',
      'cc-nc-jp', 'cc-pdm', 'cc-heart', 'cc-heart-filled']
  }
}

const iconLink = ({ name }) => {
  return `@creativecommons/vocabulary/assets/svg/${name}.svg`
}

export { iconComponents, iconLink, iconGroups }
