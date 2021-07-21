/* eslint-disable import/no-webpack-loader-syntax */
import chevronUp from '!raw-loader!@/assets/icons/chevron-up.svg';
import chevronDown from '!raw-loader!@/assets/icons/chevron-down.svg';
import chevronLeft from '!raw-loader!@/assets/icons/chevron-left.svg';
import chevronRight from '!raw-loader!@/assets/icons/chevron-right.svg';
import angleUp from '!raw-loader!@/assets/icons/angle-up.svg';
import angleDown from '!raw-loader!@/assets/icons/angle-down.svg';
import angleLeft from '!raw-loader!@/assets/icons/angle-left.svg';
import angleRight from '!raw-loader!@/assets/icons/angle-right.svg';
import caretUp from '!raw-loader!@/assets/icons/caret-up.svg';
import caretDown from '!raw-loader!@/assets/icons/caret-down.svg';
import caretLeft from '!raw-loader!@/assets/icons/caret-left.svg';
import caretRight from '!raw-loader!@/assets/icons/caret-right.svg';
import ccBy from '!raw-loader!@/assets/icons/cc-by.svg';
import ccHeart from '!raw-loader!@/assets/icons/cc-heart.svg';
import ccHeartFilled from '!raw-loader!@/assets/icons/cc-heart-filled.svg';
import ccLogo from '!raw-loader!@/assets/icons/cc-logo.svg';
import ccNc from '!raw-loader!@/assets/icons/cc-nc.svg';
import ccNcEu from '!raw-loader!@/assets/icons/cc-nc-eu.svg';
import ccNcJp from '!raw-loader!@/assets/icons/cc-nc-jp.svg';
import ccNd from '!raw-loader!@/assets/icons/cc-nd.svg';
import ccPd from '!raw-loader!@/assets/icons/cc-pd.svg';
import ccPdm from '!raw-loader!@/assets/icons/cc-pdm.svg';
import ccRemix from '!raw-loader!@/assets/icons/cc-remix.svg';
import ccSa from '!raw-loader!@/assets/icons/cc-sa.svg';
import ccSampling from '!raw-loader!@/assets/icons/cc-sampling.svg';
import ccSamplingPlus from '!raw-loader!@/assets/icons/cc-sampling-plus.svg';
import ccShare from '!raw-loader!@/assets/icons/cc-share.svg';
import ccZero from '!raw-loader!@/assets/icons/cc-zero.svg';
import facebook from '!raw-loader!@/assets/icons/facebook.svg';
import github from '!raw-loader!@/assets/icons/github.svg';
import instagram from '!raw-loader!@/assets/icons/instagram.svg';
import linkedin from '!raw-loader!@/assets/icons/linkedin.svg';
import medium from '!raw-loader!@/assets/icons/medium.svg';
import messenger from '!raw-loader!@/assets/icons/messenger.svg';
import pinterest from '!raw-loader!@/assets/icons/pinterest.svg';
import reddit from '!raw-loader!@/assets/icons/reddit.svg';
import rss from '!raw-loader!@/assets/icons/rss.svg';
import slack from '!raw-loader!@/assets/icons/slack.svg';
import sms from '!raw-loader!@/assets/icons/sms.svg';
import tumbler from '!raw-loader!@/assets/icons/tumbler.svg';
import twitter from '!raw-loader!@/assets/icons/twitter.svg';
import whatsapp from '!raw-loader!@/assets/icons/whatsapp.svg';
import adjust from '!raw-loader!@/assets/icons/adjust.svg';
import bars from '!raw-loader!@/assets/icons/bars.svg';
import bookmarkRegular from '!raw-loader!@/assets/icons/bookmark-regular.svg';
import bookmarkSolid from '!raw-loader!@/assets/icons/bookmark-solid.svg';
import calendar from '!raw-loader!@/assets/icons/calendar.svg';
import check from '!raw-loader!@/assets/icons/check.svg';
import circleFilled from '!raw-loader!@/assets/icons/circle-filled.svg';
import circleOutline from '!raw-loader!@/assets/icons/circle-outline.svg';
import envelope from '!raw-loader!@/assets/icons/envelope.svg';
import exclamation from '!raw-loader!@/assets/icons/exclamation.svg';
import externalLink from '!raw-loader!@/assets/icons/external-link.svg';
import filter from '!raw-loader!@/assets/icons/filter.svg';
import flag from '!raw-loader!@/assets/icons/flag.svg';
import globe from '!raw-loader!@/assets/icons/globe.svg';
import heart from '!raw-loader!@/assets/icons/heart.svg';
import info from '!raw-loader!@/assets/icons/info.svg';
import minus from '!raw-loader!@/assets/icons/minus.svg';
import plus from '!raw-loader!@/assets/icons/plus.svg';
import question from '!raw-loader!@/assets/icons/question.svg';
import search from '!raw-loader!@/assets/icons/search.svg';
import sliders from '!raw-loader!@/assets/icons/sliders.svg';
import sort from '!raw-loader!@/assets/icons/sort.svg';
import times from '!raw-loader!@/assets/icons/times.svg';

export const iconGroups = {
  arrows: {
    chevrons: {
      chevronUp,
      chevronDown,
      chevronLeft,
      chevronRight,
    },
    angles: {
      angleUp,
      angleDown,
      angleLeft,
      angleRight,
    },
    carets: {
      caretUp,
      caretDown,
      caretLeft,
      caretRight,
    },
  },
  symbols: {
    shapes: {
      plus,
      minus,
      circleFilled,
      circleOutline,
      tick: check,
      cross: times,
    },
    hieroglyphs: {
      calendar,
      globe,
      info,
      exclamation,
      externalLink,
      search,
      sort,
      filter,
      sliders,
      flag,
      question,
      adjust,
      bookmarkRegular,
      bookmarkSolid,
      bars,
      envelope,
      rss,
      heart,
    },
  },
  'cc-licenses': {
    standard: {
      ccZero,
      ccSa,
      ccNc,
      ccLogo,
      ccPd,
      ccBy,
      ccNd,
    },
    'non-standard': {
      ccSampling,
      ccSamplingPlus,
      ccRemix,
      ccShare,
      ccNcEu,
      ccNcJp,
      ccPdm,
      ccHeart,
      ccHeartFilled,
    },
  },
  'social-media': {
    facebook,
    github,
    instagram,
    linkedin,
    medium,
    messenger,
    pinterest,
    reddit,
    rss,
    slack,
    sms,
    tumbler,
    twitter,
    whatsapp,
  },
};
