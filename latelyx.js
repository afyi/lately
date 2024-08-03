/**
 * LatelyX.js
 *
 * @name LatelyX
 * @version 1.0.2 (2024.08.04)
 * @author  alex.xu
 * @url https://github.com/afyi/latelyx
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * 基于LateLyX 2.5.2, 原项目地址：https://tokinx.github.io/lately/，原作者：Tokin (Tokinx)
 * 
 */
(() => {
  window.Lately = new function () {
    this.lang = { second: "秒", minute: "分钟", hour: "小时", day: "天", month: "个月", year: "年", ago: "前", error: "NaN", yestoday: "昨天", tda: "前天" };
    const format = (date) => {
      // 算一下和今天相距多少了
      const diff = Math.floor(Math.abs(Date.now() - date) / 1000);
      // 获取年月日
      const dt = new function () { this.year = date.getFullYear() == (new Date()).getFullYear() ? '' : `date.getFullYear()/`, this.month = (date.getMonth() + 1).toString().padStart(2, '0') + '/', this.day = date.getDate().toString().padStart(2, '0'), this.hours = date.getHours().toString().padStart(2, '0') + ':', this.minutes = date.getMinutes().toString().padStart(2, '0'); };
      // 取3天内的时间，超过3天以上的就不再美化
      if (diff > 60 * 60 * 24 * 3) return `${dt.year}${dt.month}${dt.day} ${dt.hours}${dt.minutes}`;
      const floor = (num, _lang) => Math.floor(num) + _lang,
        obj = new function () { this.second = (Date.now() - date.getTime()) / 1000; this.minute = this.second / 60; this.hour = this.minute / 60; this.day = this.hour / 24; this.month = this.day / 30 },
        key = Object.keys(obj).reverse().find(_ => obj[_] >= 1), day = floor(obj[key], this.lang[key]);
      // 返回错误或者格式化时间
      return key ? (_day(day) + (diff > 60 * 60 * 24 ? ` ${dt.hours}${dt.minutes}` : this.lang.ago)) : this.lang.error;
    };
    const _val = (date) => {
      date = new Date(date && (typeof date === 'number' ? date : date.replace(/-/g, '/').replace('T', ' ')));
      return isNaN(date.getTime()) ? false : date.getTime();
    };

    const _day = daystr => daystr == '1天' ? this.lang.yestoday : (daystr == '2天' ? this.lang.tda : daystr);

    return {
      init: (element = ".datetime", lang = "") => {
        if (lang) this.lang = lang;
        for (let el of document.querySelectorAll(element)) {
          const date = _val(el.innerHTML) || 0;
          if (!date || el.classList.contains('datetimed')) continue;
          el.title = new Date(date).toLocaleString(), el.innerHTML = format(new Date(date)), el.classList.add('datetimed');
        }
      }
    }
  }
})();