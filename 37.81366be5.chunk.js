(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"9pab":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a("HyFC"))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'को' {{time}}",long:"{{date}} 'को' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},CUe2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a("MFcU")),r=d(a("9pab")),i=d(a("WTYQ")),u=d(a("zuDI")),o=d(a("EBZM"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"hi",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},EBZM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a("loZk")),r=u(a("sCib")),i=u(a("zuDI"));function u(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^[०१२३४५६७८९]+/i,parsePattern:/^[०१२३४५६७८९]+/i,valueCallback:i.default.localeToNumber}),era:(0,r.default)({matchPatterns:{narrow:/^(ईसा-पूर्व|ईस्वी)/i,abbreviated:/^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,wide:/^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ति[1234]/i,wide:/^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,abbreviated:/^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,wide:/^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ज/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^न/i,/^दि/i],any:[/^जन/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^नव/i,/^दिस/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[रविसोममंगलबुधगुरुशुक्रशनि]/i,short:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,abbreviated:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,wide:/^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i],any:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,any:/^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^पूर्वाह्न/i,pm:/^अपराह्न/i,midnight:/^मध्य/i,noon:/^दो/i,morning:/सु/i,afternoon:/दो/i,evening:/शा/i,night:/रा/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},MFcU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n;a=a||{},n="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",r.default.numberToLocale(t));if(a.addSuffix)return a.comparison>0?n+"मे ":n+" पहले";return n};var n,r=(n=a("zuDI"))&&n.__esModule?n:{default:n};var i={lessThanXSeconds:{one:"१ सेकंड से कम",other:"{{count}} सेकंड से कम"},xSeconds:{one:"१ सेकंड",other:"{{count}} सेकंड"},halfAMinute:"आधा मिनट",lessThanXMinutes:{one:"१ मिनट से कम",other:"{{count}} मिनट से कम"},xMinutes:{one:"१ मिनट",other:"{{count}} मिनट"},aboutXHours:{one:"लगभग १ घंटा",other:"लगभग {{count}} घंटे"},xHours:{one:"१ घंटा",other:"{{count}} घंटे"},xDays:{one:"१ दिन",other:"{{count}} दिन"},aboutXMonths:{one:"लगभग १ महीना",other:"लगभग {{count}} महीने"},xMonths:{one:"१ महीना",other:"{{count}} महीने"},aboutXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"},xYears:{one:"१ वर्ष",other:"{{count}} वर्ष"},overXYears:{one:"१ वर्ष से अधिक",other:"{{count}} वर्ष से अधिक"},almostXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"}};e.exports=t.default},WTYQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){return n[e]};var n={lastWeek:"'पिछले' eeee p",yesterday:"'कल' p",today:"'आज' p",tomorrow:"'कल' p",nextWeek:"eeee 'को' p",other:"P"};e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var u=i[0],o=n.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(u.length)}}},e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),r=a||{},i=r.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=n.match(u);if(!o)return null;var d,l=o[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(f,(function(e){return e.test(n)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(f,(function(e){return e.test(n)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(l.length)}}},e.exports=t.default},zuDI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a("rwOc"))&&n.__esModule?n:{default:n};var i={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}};var u={localeToNumber:function(e){var t=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return i.number[e]}));return Number(t)},numberToLocale:function(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))},ordinalNumber:function(e){var t=u.localeToNumber(e),a=u.numberToLocale(t);switch(t%10){case 2:case 3:case 4:case 6:case 1:case 5:case 7:case 8:case 9:case 0:return a}},era:(0,r.default)({values:{narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्तू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्तू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultWidth:"wide",formattingValues:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultFormattingWidth:"wide"})},o=u;t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=37.81366be5.chunk.js.map