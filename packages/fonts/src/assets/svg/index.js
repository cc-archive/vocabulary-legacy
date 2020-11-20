/* eslint-disable import/no-webpack-loader-syntax */
import ChevronUp from '!raw-loader!./chevron-up.svg'
import ChevronDown from '!raw-loader!./chevron-down.svg'
import ChevronLeft from '!raw-loader!./chevron-left.svg'
import ChevronRight from '!raw-loader!./chevron-right.svg'
import AngleUp from '!raw-loader!./angle-up.svg'
import AngleDown from '!raw-loader!./angle-down.svg'
import AngleLeft from '!raw-loader!./angle-left.svg'
import AngleRight from '!raw-loader!./angle-right.svg'
import CaretUp from '!raw-loader!./caret-up.svg'
import CaretDown from '!raw-loader!./caret-down.svg'
import CaretLeft from '!raw-loader!./caret-left.svg'
import CaretRight from '!raw-loader!./caret-right.svg'
import CcBy from '!raw-loader!./cc-by.svg'
import CcHeart from '!raw-loader!./cc-heart.svg'
import CcHeartFilled from '!raw-loader!./cc-heart-filled.svg'
import CcLogo from '!raw-loader!./cc-logo.svg'
import CcNc from '!raw-loader!./cc-nc.svg'
import CcNcEu from '!raw-loader!./cc-nc-eu.svg'
import CcNcJp from '!raw-loader!./cc-nc-jp.svg'
import CcNd from '!raw-loader!./cc-nd.svg'
import CcPd from '!raw-loader!./cc-pd.svg'
import CcPdm from '!raw-loader!./cc-pdm.svg'
import CcRemix from '!raw-loader!./cc-remix.svg'
import CcSa from '!raw-loader!./cc-sa.svg'
import CcSampling from '!raw-loader!./cc-sampling.svg'
import CcSamplingPlus from '!raw-loader!./cc-sampling-plus.svg'
import CcShare from '!raw-loader!./cc-share.svg'
import CcZero from '!raw-loader!./cc-zero.svg'
import Facebook from '!raw-loader!./facebook.svg'
import Github from '!raw-loader!./github.svg'
import Instagram from '!raw-loader!./instagram.svg'
import Linkedin from '!raw-loader!./linkedin.svg'
import Medium from '!raw-loader!./medium.svg'
import Messenger from '!raw-loader!./messenger.svg'
import Pinterest from '!raw-loader!./pinterest.svg'
import Reddit from '!raw-loader!./reddit.svg'
import Rss from '!raw-loader!./rss.svg'
import Slack from '!raw-loader!./slack.svg'
import Sms from '!raw-loader!./sms.svg'
import Tumbler from '!raw-loader!./tumbler.svg'
import Twitter from '!raw-loader!./twitter.svg'
import Whatsapp from '!raw-loader!./whatsapp.svg'
import Adjust from '!raw-loader!./adjust.svg'
import Bars from '!raw-loader!./bars.svg'
import BookmarkRegular from '!raw-loader!./bookmark-regular.svg'
import BookmarkSolid from '!raw-loader!./bookmark-solid.svg'
import Calendar from '!raw-loader!./calendar.svg'
import Check from '!raw-loader!./check.svg'
import CircleFilled from '!raw-loader!./circle-filled.svg'
import CircleOutline from '!raw-loader!./circle-outline.svg'
import Envelope from '!raw-loader!./envelope.svg'
import Exclamation from '!raw-loader!./exclamation.svg'
import ExternalLink from '!raw-loader!./external-link.svg'
import Filter from '!raw-loader!./filter.svg'
import Flag from '!raw-loader!./flag.svg'
import Globe from '!raw-loader!./globe.svg'
import Heart from '!raw-loader!./heart.svg'
import Info from '!raw-loader!./info.svg'
import Minus from '!raw-loader!./minus.svg'
import Plus from '!raw-loader!./plus.svg'
import Question from '!raw-loader!./question.svg'
import Search from '!raw-loader!./search.svg'
import Sliders from '!raw-loader!./sliders.svg'
import Sort from '!raw-loader!./sort.svg'
import Times from '!raw-loader!./times.svg'

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
