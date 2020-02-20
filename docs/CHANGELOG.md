[![Build Status](https://travis-ci.org/DJStarCOM/bootstrap-iconpicker-latest.svg?branch=master)](https://travis-ci.org/DJStarCOM/bootstrap-iconpicker-latest)
[![Code Climate](https://codeclimate.com/github/DJStarCOM/bootstrap-iconpicker-latest/badges/gpa.svg)](https://codeclimate.com/github/DJStarCOM/bootstrap-iconpicker-latest)
[![npm](https://img.shields.io/npm/v/bootstrap-iconpicker-latest.svg)](https://npmjs.org/package/bootstrap-iconpicker-latest)
[![Bower](https://img.shields.io/bower/v/bootstrap-iconpicker-latest.svg)](https://bower.io/search/?q=bootstrap-iconpicker-latest)
[![Release](https://img.shields.io/github/release/DJStarCOM/bootstrap-iconpicker-latest.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/releases)
[![Tag](https://img.shields.io/github/tag/DJStarCOM/bootstrap-iconpicker-latest.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/tags)
[![Issues](https://img.shields.io/github/issues/DJStarCOM/bootstrap-iconpicker-latest.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/issues?q=is%3Aopen)
[![Issues](https://img.shields.io/badge/license-MIT-red.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/blob/master/LICENSE)

# [Bootstrap-Iconpicker v1.11.0](https://djstarcom.github.io/bootstrap-iconpicker-latest/)
![Iconpicker](../bootstrap-iconpicker_4x.png)

A simple iconpicker for Bootstrap 3.x and 4.x.

## Table of contents
- [What's next](#whats-next)
- [Changelog](#changelog)

## What´s next
- [ ] Support for multiple versions (v1.3.x) of [Weather Icons](https://erikflowers.github.io/weather-icons/).
- [ ] Support for versions (v5.2.x, v5.1.x, and v5.0.x) of [Font Awesome Icons](https://fontawesome.io/).
- [ ] Support for versions (v8.x, v7.x, v6.x, and v5.x) of [Octicons](https://octicons.github.com/).
- [ ] Support for versions (v4.4.1, and v3.x) of [Ionicons](https://ionicons.com/).
- [ ] Support for versions (v3.2.0) of [Flag Icons](https://flag-icon-css.lip.is/).

## Changelog
- [![v1.12.0](https://img.shields.io/badge/zip-v1.12.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.12.0.zip). (2020-Feb-20)
    - Support versions of Font Awesome Icons 5 (Pro). (v5.12.0_pro)

- [![v1.11.0](https://img.shields.io/badge/zip-v1.11.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.11.0.zip). (2019-Dec-13)
    - Add seperate iconsets for FontAwesome 5.
      - This matches the pattern used by the other icon sets: Providing iconClass and iconClassFix and removing them from the icon strings..
    - Add method setVersion
      - To set the icon set version with javascript, implementing the missing setVersion method

- [![v1.10.0](https://img.shields.io/badge/zip-v1.10.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.11.0.zip). (2018-Oct-10)    
    - Support for [Bootstrap 4.x](https://getbootstrap.com/).
    - Support for multiple versions of [Font Awesome Icons (Free and Pro)](https://fontawesome.io/). (v5.3.1, v5.3.1_pro)
    - Support for [Weather Icons](https://erikflowers.github.io/weather-icons/). (v2.0.10)    
    - Change default options:            
        - `arrowNextIconClass` = `fas fa-arrow-right` (Previous value: `glyphicon glyphicon-arrow-right`)
        - `arrowPrevIconClass` = `fas fa-arrow-left` (Previous value: `glyphicon glyphicon-arrow-left`)
        - `iconset` = `fontawesome5` (Previous value: `glyphicon`)
        - `unselectedClass` = `btn-secondary`. (Previous value: `btn-default`)
    - Add file `bootstrap-iconpicker.bundle.min.js`, this file includes `bootstrap-iconpicker-iconset-all.min.js` and `bootstrap-iconpicker.min.js` files.

- [![v1.9.0](https://img.shields.io/badge/zip-v1.9.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.9.0.zip). (2017-Jul-27)
    - Includes all iconset files in file `bootstrap-iconpicker-iconset-all.js`.
    - Add option `iconsetVersion`.
    - Support for [Flag Icons](https://flag-icon-css.lip.is/). (v2.8.0)
    - Support for multiple versions of [Typicons](https://typicons.com). (v2.0.9, v2.0.8, v2.0.7, v2.0.5, v2.0.4, v2.0.3, v2.0.2, v2.0.1)
    - Support for multiple versions of [Octicons](https://octicons.github.com/). (v4.4.0, v4.3.0, v4.2.1, v4.2.0, v4.1.1, v4.1.0, v4.0.0, v3.5.0, v3.4.1, v3.4.0, v3.3.0, v3.2.0, v3.1.0, v3.0.0, v2.4.1, v2.4.0, v2.3.0, v2.2.2, v2.2.1, v2.2.0, v2.1.2, v2.1.1, v2.1.0, v2.0.2, v2.0.1, v2.0.0)
    - Support for multiple versions of [Material Design Icons](https://zavoloklom.github.io/material-design-iconic-font/). (v2.2.0, v2.1.2, v2.1.1, v2.1.0, v2.0.2, v2.0.1, v2.0.0)
    - Support for [Ionicons](https://ionicons.com/). (v2.0.1 @[ibrahimyilmaz7](https://github.com/ibrahimyilmaz7))
- [![v1.8.2](https://img.shields.io/badge/zip-v1.8.2-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.8.2.zip). (2017-Jul-19)
    - Fix navigation to invalid pages.
    - Filling search/hidden inputs. @[s-belichenko-sold](https://github.com/s-belichenko-sold)
    - Search and filter case insensitive. @[mahmoud-asadi](https://github.com/mahmoud-asadi)
    - Support for [Bootstrap 3.3.7](https://getbootstrap.com/).
    - Update license to [MIT](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/blob/master/LICENSE).
- [![v1.8.1](https://img.shields.io/badge/zip-v1.8.1-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.8.1.zip). (2017-Jul-18)
    - Support for [npm](https://www.npmjs.com) install.
- [![v1.8.0](https://img.shields.io/badge/zip-v1.8.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.8.0.zip). (2017-Jul-18)
    - Fix for case, when there are no icons, and count is displayed, as '1 - 0 of 0 '. @[joews](https://github.com/joews).
    - Support for multiple versions of [Font Awesome Icons](https://fontawesome.io/). (v4.7.0, v4.6.0, v4.5.0, v4.4.0, v4.3.0 @[michaelbilcot](https://github.com/michaelbilcot))
- [![v1.7.0](https://img.shields.io/badge/zip-v1.7.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.7.0.zip). (2015-Jun-01)
    - Support for button and div tags.
    - All `iconset` includes the empty icon value.
    - Option `rows` accepts the value 0 to indicate all rows.
    - Add options:
        - `align`
        - `header`
        - `footer`
    - Add methods:
        - `setAlign`
        - `setHeader`
        - `setFooter`
    - Support for [Material Design Icons](https://zavoloklom.github.io/material-design-iconic-font/). (v1.1.1)
- [![v1.6.0](https://img.shields.io/badge/zip-v1.6.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.6.0.zip). (2014-Nov-01)
    - Restructure `iconset` configuration.
    - Option `iconset` accepts `String` and `Object` (Limit your `iconset` option).
    - Add options:
        - `arrowPrevIconClass`
        - `arrowNextIconClass`
        - `labelHeader`
        - `labelFooter`
    - Add methods:
        - `setArrowClass`
        - `setArrowPrevIconClass`
        - `setArrowNextIconClass`
        - `setCols`
        - `setIconset`
        - `setLabelHeader`
        - `setLabelFooter`
        - `setPlacement`
        - `setRows`
        - `setSearch`
        - `setSearchText`
        - `setSelectedClass`
        - `setUnselectedClass`
    - Support for 6 more icon fonts:
        - [Elusive Icons](https://press.codes/downloads/elusive-icons-webfont/). (v2.0.0)
        - [Ionicons](https://ionicons.com/). (v1.5.2)
        - [Map Icons](https://map-icons.com/). (v2.1.0)
        - [Octicons](https://octicons.github.com/). (v2.1.2)
        - [Typicons](https://typicons.com). (v2.0.6)
        - [Weather Icons](https://erikflowers.github.io/weather-icons/). (v1.2.0)
- [![v1.5.0](https://img.shields.io/badge/zip-v1.5.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.5.0.zip). (2014-Oct-19)
    - Add search field.
- [![v1.4.0](https://img.shields.io/badge/zip-v1.4.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.4.0.zip). (2014-Oct-17)
    - Support for customization of the component.
- [![v1.3.1](https://img.shields.io/badge/zip-v1.3.1-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.3.1.zip). (2014-Oct-16)
    - Bind `body` `click` to solve issues for ajax loaded pages. @[crlcu](https://github.com/crlcu).
- [![v1.3.0](https://img.shields.io/badge/zip-v1.3.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.3.0.zip). (2014-Oct-16)
    - Support for multiple versions of [Font Awesome Icons](https://fontawesome.io/). (v4.2.0, v4.1.0, v4.0.0)
- [![v1.2.1](https://img.shields.io/badge/zip-v1.2.1-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.2.1.zip). (2014-Jun-27)
    - Add `.iconpicker-popover` class. @[jwhitfieldseed](https://github.com/jwhitfieldseed)
- [![v1.2.0](https://img.shields.io/badge/zip-v1.2.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.2.0.zip). (2014-Jan-20)
    - Add the method `setIcon`.
- [![v1.1.0](https://img.shields.io/badge/zip-v1.1.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.1.0.zip). (2013-Dec-16)
    - Dispatch `change` event when an iconpicker is changed. @[promatik](https://github.com/promatik)
- [![v1.0.1](https://img.shields.io/badge/zip-v1.0.1-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/v1.0.1.zip). (2013-Nov-20)
    - Reducing the size of the source file.
- [![v1.0.0](https://img.shields.io/badge/zip-v1.0.0-blue.svg)](https://github.com/DJStarCOM/bootstrap-iconpicker-latest/archive/1.0.0.zip). (2013-Nov-19)
    - Version initial.
