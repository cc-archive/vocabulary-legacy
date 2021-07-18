// This is the entrypoint for building Fonts.

import './styles/fonts.scss'; // Sass stylesheets, will be compiled

/* eslint-disable import/no-webpack-loader-syntax */
import ChevronUp from '!raw-loader!@/assets/icons/chevron-up.svg';
import ChevronDown from '!raw-loader!@/assets/icons/chevron-down.svg';
import ChevronLeft from '!raw-loader!@/assets/icons/chevron-left.svg';
import ChevronRight from '!raw-loader!@/assets/icons/chevron-right.svg';
import AngleUp from '!raw-loader!@/assets/icons/angle-up.svg';
import AngleDown from '!raw-loader!@/assets/icons/angle-down.svg';
import AngleLeft from '!raw-loader!@/assets/icons/angle-left.svg';
import AngleRight from '!raw-loader!@/assets/icons/angle-right.svg';
import CaretUp from '!raw-loader!@/assets/icons/caret-up.svg';
import CaretDown from '!raw-loader!@/assets/icons/caret-down.svg';
import CaretLeft from '!raw-loader!@/assets/icons/caret-left.svg';
import CaretRight from '!raw-loader!@/assets/icons/caret-right.svg';
import CcBy from '!raw-loader!@/assets/icons/cc-by.svg';
import CcHeart from '!raw-loader!@/assets/icons/cc-heart.svg';
import CcHeartFilled from '!raw-loader!@/assets/icons/cc-heart-filled.svg';
import CcLogo from '!raw-loader!@/assets/icons/cc-logo.svg';
import CcNc from '!raw-loader!@/assets/icons/cc-nc.svg';
import CcNcEu from '!raw-loader!@/assets/icons/cc-nc-eu.svg';
import CcNcJp from '!raw-loader!@/assets/icons/cc-nc-jp.svg';
import CcNd from '!raw-loader!@/assets/icons/cc-nd.svg';
import CcPd from '!raw-loader!@/assets/icons/cc-pd.svg';
import CcPdm from '!raw-loader!@/assets/icons/cc-pdm.svg';
import CcRemix from '!raw-loader!@/assets/icons/cc-remix.svg';
import CcSa from '!raw-loader!@/assets/icons/cc-sa.svg';
import CcSampling from '!raw-loader!@/assets/icons/cc-sampling.svg';
import CcSamplingPlus from '!raw-loader!@/assets/icons/cc-sampling-plus.svg';
import CcShare from '!raw-loader!@/assets/icons/cc-share.svg';
import CcZero from '!raw-loader!@/assets/icons/cc-zero.svg';
import Facebook from '!raw-loader!@/assets/icons/facebook.svg';
import Github from '!raw-loader!@/assets/icons/github.svg';
import Instagram from '!raw-loader!@/assets/icons/instagram.svg';
import Linkedin from '!raw-loader!@/assets/icons/linkedin.svg';
import Medium from '!raw-loader!@/assets/icons/medium.svg';
import Messenger from '!raw-loader!@/assets/icons/messenger.svg';
import Pinterest from '!raw-loader!@/assets/icons/pinterest.svg';
import Reddit from '!raw-loader!@/assets/icons/reddit.svg';
import Rss from '!raw-loader!@/assets/icons/rss.svg';
import Slack from '!raw-loader!@/assets/icons/slack.svg';
import Sms from '!raw-loader!@/assets/icons/sms.svg';
import Tumbler from '!raw-loader!@/assets/icons/tumbler.svg';
import Twitter from '!raw-loader!@/assets/icons/twitter.svg';
import Whatsapp from '!raw-loader!@/assets/icons/whatsapp.svg';
import Adjust from '!raw-loader!@/assets/icons/adjust.svg';
import Bars from '!raw-loader!@/assets/icons/bars.svg';
import BookmarkRegular from '!raw-loader!@/assets/icons/bookmark-regular.svg';
import BookmarkSolid from '!raw-loader!@/assets/icons/bookmark-solid.svg';
import Calendar from '!raw-loader!@/assets/icons/calendar.svg';
import Check from '!raw-loader!@/assets/icons/check.svg';
import CircleFilled from '!raw-loader!@/assets/icons/circle-filled.svg';
import CircleOutline from '!raw-loader!@/assets/icons/circle-outline.svg';
import Envelope from '!raw-loader!@/assets/icons/envelope.svg';
import Exclamation from '!raw-loader!@/assets/icons/exclamation.svg';
import ExternalLink from '!raw-loader!@/assets/icons/external-link.svg';
import Filter from '!raw-loader!@/assets/icons/filter.svg';
import Flag from '!raw-loader!@/assets/icons/flag.svg';
import Globe from '!raw-loader!@/assets/icons/globe.svg';
import Heart from '!raw-loader!@/assets/icons/heart.svg';
import Info from '!raw-loader!@/assets/icons/info.svg';
import Minus from '!raw-loader!@/assets/icons/minus.svg';
import Plus from '!raw-loader!@/assets/icons/plus.svg';
import Question from '!raw-loader!@/assets/icons/question.svg';
import Search from '!raw-loader!@/assets/icons/search.svg';
import Sliders from '!raw-loader!@/assets/icons/sliders.svg';
import Sort from '!raw-loader!@/assets/icons/sort.svg';
import Times from '!raw-loader!@/assets/icons/times.svg';

const iconGroups = {
  arrows: {
    chevrons: {
      'chevron-up': ChevronUp,
      'chevron-down': ChevronDown,
      'chevron-left': ChevronLeft,
      'chevron-right': ChevronRight,
    },
    angles: {
      'angle-up': AngleUp,
      'angle-down': AngleDown,
      'angle-left': AngleLeft,
      'angle-right': AngleRight,
    },
    carets: {
      'caret-up': CaretUp,
      'caret-down': CaretDown,
      'caret-left': CaretLeft,
      'caret-right': CaretRight,
    },
  },
  symbols: {
    shapes: {
      tick: Check,
      cross: Times,
      plus: Plus,
      minus: Minus,
      'circle-filled': CircleFilled,
      'circle-outline': CircleOutline,
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
      heart: Heart,
    },
  },
  'cc-licenses': {
    standard: {
      'cc-zero': CcZero,
      'cc-sa': CcSa,
      'cc-nc': CcNc,
      'cc-logo': CcLogo,
      'cc-pd': CcPd,
      'cc-by': CcBy,
      'cc-nd': CcNd,
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
      'cc-heart-filled': CcHeartFilled,
    },
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
    whatsapp: Whatsapp,
  },
};

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
  iconGroups,
};
