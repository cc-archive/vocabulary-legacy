/* eslint-disable import/no-webpack-loader-syntax */
import ChevronUp from './arrows/chevron-up.svg?inline'
import ChevronDown from './arrows/chevron-down.svg?inline'
import ChevronLeft from './arrows/chevron-left.svg?inline'
import ChevronRight from './arrows/chevron-right.svg?inline'
import AngleUp from './arrows/angle-up.svg?inline'
import AngleDown from './arrows/angle-down.svg?inline'
import AngleLeft from './arrows/angle-left.svg?inline'
import AngleRight from './arrows/angle-right.svg?inline'
import CaretUp from './arrows/caret-up.svg?inline'
import CaretDown from './arrows/caret-down.svg?inline'
import CaretLeft from './arrows/caret-left.svg?inline'
import CaretRight from './arrows/caret-right.svg?inline'
import CcBy from './cc/cc-by.svg?inline'
import CcHeart from './cc/cc-heart.svg?inline'
import CcHeartFilled from './cc/cc-heart-filled.svg?inline'
import CcLogo from './cc/cc-logo.svg?inline'
import CcNc from './cc/cc-nc.svg?inline'
import CcNcEu from './cc/cc-nc-eu.svg?inline'
import CcNcJp from './cc/cc-nc-jp.svg?inline'
import CcNd from './cc/cc-nd.svg?inline'
import CcPd from './cc/cc-pd.svg?inline'
import CcPdm from './cc/cc-pdm.svg?inline'
import CcRemix from './cc/cc-remix.svg?inline'
import CcSa from './cc/cc-sa.svg?inline'
import CcSampling from './cc/cc-sampling.svg?inline'
import CcSamplingPlus from './cc/cc-sampling-plus.svg?inline'
import CcShare from './cc/cc-share.svg?inline'
import CcZero from './cc/cc-zero.svg?inline'
import Facebook from './social-media/facebook.svg?inline'
import Github from './social-media/github.svg?inline'
import Instagram from './social-media/instagram.svg?inline'
import Linkedin from './social-media/linkedin.svg?inline'
import Medium from './social-media/medium.svg?inline'
import Messenger from './social-media/messenger.svg?inline'
import Pinterest from './social-media/pinterest.svg?inline'
import Reddit from './social-media/reddit.svg?inline'
import Rss from './social-media/rss.svg?inline'
import Slack from './social-media/slack.svg?inline'
import Sms from './social-media/sms.svg?inline'
import Tumbler from './social-media/tumbler.svg?inline'
import Twitter from './social-media/twitter.svg?inline'
import Whatsapp from './social-media/whatsapp.svg?inline'
import Adjust from './symbols/adjust.svg?inline'
import Bars from './symbols/bars.svg?inline'
import BookmarkRegular from './symbols/bookmark-regular.svg?inline'
import BookmarkSolid from './symbols/bookmark-solid.svg?inline'
import Calendar from './symbols/calendar.svg?inline'
import Check from './symbols/check.svg?inline'
import CircleFilled from './symbols/circle-filled.svg?inline'
import CircleOutline from './symbols/circle-outline.svg?inline'
import Envelope from './symbols/envelope.svg?inline'
import Exclamation from './symbols/exclamation.svg?inline'
import ExternalLink from './symbols/external-link.svg?inline'
import Filter from './symbols/filter.svg?inline'
import Flag from './symbols/flag.svg?inline'
import Globe from './symbols/globe.svg?inline'
import Heart from './symbols/heart.svg?inline'
import Info from './symbols/info.svg?inline'
import Minus from './symbols/minus.svg?inline'
import Plus from './symbols/plus.svg?inline'
import Question from './symbols/question.svg?inline'
import Search from './symbols/search.svg?inline'
import Sliders from './symbols/sliders.svg?inline'
import Sort from './symbols/sort.svg?inline'
import Times from './symbols/times.svg?inline'

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
