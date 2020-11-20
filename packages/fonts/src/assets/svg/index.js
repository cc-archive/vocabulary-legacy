/* eslint-disable import/no-webpack-loader-syntax */
import ChevronUp from './chevron-up.svg'
import ChevronDown from './chevron-down.svg'
import ChevronLeft from './chevron-left.svg'
import ChevronRight from './chevron-right.svg'
import AngleUp from './angle-up.svg'
import AngleDown from './angle-down.svg'
import AngleLeft from './angle-left.svg'
import AngleRight from './angle-right.svg'
import CaretUp from './caret-up.svg'
import CaretDown from './caret-down.svg'
import CaretLeft from './caret-left.svg'
import CaretRight from './caret-right.svg'
import CcBy from './cc-by.svg'
import CcHeart from './cc-heart.svg'
import CcHeartFilled from './cc-heart-filled.svg'
import CcLogo from './cc-logo.svg'
import CcNc from './cc-nc.svg'
import CcNcEu from './cc-nc-eu.svg'
import CcNcJp from './cc-nc-jp.svg'
import CcNd from './cc-nd.svg'
import CcPd from './cc-pd.svg'
import CcPdm from './cc-pdm.svg'
import CcRemix from './cc-remix.svg'
import CcSa from './cc-sa.svg'
import CcSampling from './cc-sampling.svg'
import CcSamplingPlus from './cc-sampling-plus.svg'
import CcShare from './cc-share.svg'
import CcZero from './cc-zero.svg'
import Facebook from './facebook.svg'
import Github from './github.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Medium from './medium.svg'
import Messenger from './messenger.svg'
import Pinterest from './pinterest.svg'
import Reddit from './reddit.svg'
import Rss from './rss.svg'
import Slack from './slack.svg'
import Sms from './sms.svg'
import Tumbler from './tumbler.svg'
import Twitter from './twitter.svg'
import Whatsapp from './whatsapp.svg'
import Adjust from './adjust.svg'
import Bars from './bars.svg'
import BookmarkRegular from './bookmark-regular.svg'
import BookmarkSolid from './bookmark-solid.svg'
import Calendar from './calendar.svg'
import Check from './check.svg'
import CircleFilled from './circle-filled.svg'
import CircleOutline from './circle-outline.svg'
import Envelope from './envelope.svg'
import Exclamation from './exclamation.svg'
import ExternalLink from './external-link.svg'
import Filter from './filter.svg'
import Flag from './flag.svg'
import Globe from './globe.svg'
import Heart from './heart.svg'
import Info from './info.svg'
import Minus from './minus.svg'
import Plus from './plus.svg'
import Question from './question.svg'
import Search from './search.svg'
import Sliders from './sliders.svg'
import Sort from './sort.svg'
import Times from './times.svg'

const angles = [ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  AngleUp, AngleDown, AngleLeft, AngleRight,
  CaretUp, CaretDown, CaretLeft, CaretRight]
const cc = [CcBy, CcHeart, CcHeartFilled, CcLogo, CcNc,
  CcNcEu, CcNcJp, CcNd, CcPd, CcPdm, CcRemix,
  CcSa, CcSampling, CcSamplingPlus, CcShare, CcZero]
const symbols = [Whatsapp, Adjust, Bars, BookmarkRegular, BookmarkSolid,
  Calendar, Check, CircleFilled, CircleOutline, Envelope,
  Exclamation, ExternalLink, Filter, Flag, Globe, Heart,
  Info, Minus, Plus, Question, Search, Sliders, Sort, Times]
const socialMedia = [Facebook, Github, Instagram, Linkedin, Medium, Messenger,
  Pinterest, Reddit, Rss, Slack, Sms, Tumbler, Twitter]

const iconGroups = {
  arrows: {
    chevrons: {
      'chevron-up': ChevronUp,
      'chevron-down': ChevronDown,
      'chevron-left': ChevronLeft,
      'chevron-right': ChevronRight
    },
    angles: {
      'angle-up': AngleUp,
      'angle-down': AngleDown,
      'angle-left': AngleLeft,
      'angle-right': AngleRight
    },
    carets: {
      'caret-up': CaretUp,
      'caret-down': CaretDown,
      'caret-left': CaretLeft,
      'caret-right': CaretRight
    }
  },
  symbols: {
    shapes: {
      tick: Check,
      cross: Times,
      plus: Plus,
      minus: Minus,
      'circle-filled': CircleFilled,
      'circle-outline': CircleOutline
    },
    hieroglyphs: {
      globe: Globe,
      info: Info,
      exclamation: Exclamation,
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
      rss: Rss,
      heart: Heart
    }
  },
  'cc-licenses': {
    standard: {
      'cc-zero': CcZero,
      'cc-sa': CcSa,
      'cc-nc': CcNc,
      'cc-logo': CcLogo,
      'cc-pd': CcPd,
      'cc-by': CcBy,
      'cc-nd': CcNd
    },
    'non-standard': {
      'cc-sampling': CcSampling,
      'cc-sampling-plus': CcSamplingPlus,
      'cc-remix': CcRemix,
      'cc-share': CcShare,
      'cc-nc-eu': CcNcEu,
      'cc-nc-jp': CcNcJp,
      'cc-pd-alt': CcPdm,
      'cc-heart': CcHeart,
      'cc-heart-filled': CcHeartFilled
    }
  },
  'social-media': {
    facebook: Facebook,
    github: Github,
    instagram: Instagram,
    linkedin: Linkedin,
    medium: Medium,
    messenger: Messenger,
    pinterest: Pinterest,
    reddit: Reddit,
    rss: Rss,
    slack: Slack,
    sms: Sms,
    tumbler: Tumbler,
    twitter: Twitter,
    whatsapp: Whatsapp
  }
}

const iconFiles = {
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'angle-up': AngleUp,
  'angle-down': AngleDown,
  'angle-left': AngleLeft,
  'angle-right': AngleRight,
  'caret-up': CaretUp,
  'caret-down': CaretDown,
  'caret-left': CaretLeft,
  'caret-right': CaretRight,
  tick: Check,
  cross: Times,
  plus: Plus,
  minus: Minus,
  'circle-filled': CircleFilled,
  'circle-outline': CircleOutline,
  globe: Globe,
  info: Info,
  exclamation: Exclamation,
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
  'cc-pd-alt': CcPdm,
  'cc-heart': CcHeart,
  'cc-heart-filled': CcHeartFilled,
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  medium: Medium,
  messenger: Messenger,
  pinterest: Pinterest,
  reddit: Reddit,
  rss: Rss,
  slack: Slack,
  sms: Sms,
  tumbler: Tumbler,
  twitter: Twitter,
  whatsapp: Whatsapp
}

export {
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  AngleUp, AngleDown, AngleLeft, AngleRight,
  CaretUp, CaretDown, CaretLeft, CaretRight,
  CcBy, CcHeart, CcHeartFilled, CcLogo, CcNc,
  CcNcEu, CcNcJp, CcNd, CcPd, CcPdm, CcRemix,
  CcSa, CcSampling, CcSamplingPlus, CcShare, CcZero,
  Facebook, Github, Instagram, Linkedin, Medium, Messenger,
  Pinterest, Reddit, Rss, Slack, Sms, Tumbler, Twitter,
  Whatsapp, Adjust, Bars, BookmarkRegular, BookmarkSolid,
  Calendar, Check, CircleFilled, CircleOutline, Envelope,
  Exclamation, ExternalLink, Filter, Flag, Globe, Heart,
  Info, Minus, Plus, Question, Search, Sliders, Sort, Times,
  angles, cc, symbols, socialMedia, iconFiles, iconGroups
}
