(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"6N3H":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=(n=o("HyFC"))&&n.__esModule?n:{default:n};var u={date:(0,a.default)({formats:{full:"EEEE, dd. MMMM y",long:"dd. MMMM y",medium:"d. MMM y",short:"d. MM. yy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=u,t.exports=e.default},EcoP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o){var r=n,i="";(o=o||{}).addSuffix&&(o.comparison>0?(r=u,i+="čez "):(r=a,i+="pred "));if("string"==typeof r[t])i+=r[t];else{var l=function(t){switch(t%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}(e);i+=r[t][l].replace("{{count}}",e)}return i};var n={lessThanXSeconds:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"približno {{count}} ura",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"},xHours:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}},a={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},aboutXHours:{one:"približno {{count}} uro",two:"približno {{count}} urama",few:"približno {{count}} urami",other:"približno {{count}} urami"},xHours:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},xDays:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},aboutXMonths:{one:"približno {{count}} mesecem",two:"približno {{count}} mesecema",few:"približno {{count}} meseci",other:"približno {{count}} meseci"},xMonths:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},aboutXYears:{one:"približno {{count}} letom",two:"približno {{count}} letoma",few:"približno {{count}} leti",other:"približno {{count}} leti"},xYears:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},overXYears:{one:"več kot {{count}} letom",two:"več kot {{count}} letoma",few:"več kot {{count}} leti",other:"več kot {{count}} leti"},almostXYears:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"}},u={lessThanXSeconds:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"približno {{count}} uro",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"},xHours:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"},xMonths:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"},aboutXYears:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"},xYears:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"},almostXYears:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};t.exports=e.default},HyFC:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var o=e||{},n=o.width?String(o.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}},t.exports=e.default},KYSo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(o("EcoP")),a=l(o("6N3H")),u=l(o("wB8V")),r=l(o("T/oY")),i=l(o("tibx"));function l(t){return t&&t.__esModule?t:{default:t}}var c={code:"sl",formatDistance:n.default,formatLong:a.default,formatRelative:u.default,localize:r.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=c,t.exports=e.default},"T/oY":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=(n=o("rwOc"))&&n.__esModule?n:{default:n};var u={ordinalNumber:function(t){var e=Number(t);return String(e).concat(".")},era:(0,a.default)({values:{narrow:["pr. n. št.","po n. št."],abbreviated:["pr. n. št.","po n. št."],wide:["pred našim štetjem","po našem štetju"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. čet.","2. čet.","3. čet.","4. čet."],wide:["1. četrtletje","2. četrtletje","3. četrtletje","4. četrtletje"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,a.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["n","p","t","s","č","p","s"],short:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"več.",night:"noč"},wide:{am:"dop.",pm:"pop.",midnight:"polnoč",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"večer",night:"noč"}},defaultWidth:"wide",formattingValues:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zveč.",night:"ponoči"},wide:{am:"dop.",pm:"pop.",midnight:"opolnoči",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zvečer",night:"ponoči"}},defaultFormattingWidth:"wide"})};e.default=u,t.exports=e.default},loZk:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,o){var n=String(e),a=o||{},u=n.match(t.matchPattern);if(!u)return null;var r=u[0],i=n.match(t.parsePattern);if(!i)return null;var l=t.valueCallback?t.valueCallback(i[0]):i[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:n.slice(r.length)}}},t.exports=e.default},rwOc:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,o){var n,a=o||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=a.width?String(a.width):u;n=t.formattingValues[r]||t.formattingValues[u]}else{var i=t.defaultWidth,l=a.width?String(a.width):t.defaultWidth;n=t.values[l]||t.values[i]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},sCib:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,o){var n=String(e),a=o||{},u=a.width,r=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],i=n.match(r);if(!i)return null;var l,c=i[0],d=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var o=0;o<t.length;o++)if(e(t[o]))return o}(d,(function(t){return t.test(n)})):function(t,e){for(var o in t)if(t.hasOwnProperty(o)&&e(t[o]))return o}(d,(function(t){return t.test(n)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:n.slice(c.length)}}},t.exports=e.default},tibx:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("sCib"));function a(t){return t&&t.__esModule?t:{default:t}}var u={ordinalNumber:(0,a(o("loZk")).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{abbreviated:/^(pr\. n\. št\.|po n\. št\.)/i,wide:/^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|na[sš]em)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[čc]et\.?/i,wide:/^[1234]\. [čc]etrtletje/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"wide"}),day:(0,n.default)({matchPatterns:{narrow:/^[nptsčc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[cč]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[cč]/i,/^pe/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},defaultParseWidth:"any"})};e.default=u,t.exports=e.default},wB8V:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o,a){var u=n[t];if("function"==typeof u)return u(e);return u};var n={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'prejšnjo nedeljo ob' p";case 3:return"'prejšnjo sredo ob' p";case 6:return"'prejšnjo soboto ob' p";default:return"'prejšnji' EEEE 'ob' p"}},yesterday:"'včeraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};t.exports=e.default}}]);
//# sourceMappingURL=56.3b23812b.chunk.js.map