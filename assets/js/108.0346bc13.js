(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{361:function(t,a,e){"use strict";e.r(a);var s=e(28),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"v0-8-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-x"}},[t._v("#")]),t._v(" v0.8.x")]),t._v(" "),e("h2",{attrs:{id:"v0-8-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-9"}},[t._v("#")]),t._v(" v0.8.9")]),t._v(" "),e("p",[t._v("修复信令异常")]),t._v(" "),e("h2",{attrs:{id:"v0-8-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-8"}},[t._v("#")]),t._v(" v0.8.8")]),t._v(" "),e("p",[t._v("修复插件项目无法引用显示对象。\n修复语言文件被当作字符处理。\n修复Spine骨骼动画无法自动播放。 "),e("a",{attrs:{href:""}},[t._v("//s.vipkidstatic.com/vf/plugin/spine/0.0.10.js")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"v0-8-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-6"}},[t._v("#")]),t._v(" v0.8.6")]),t._v(" "),e("p",[t._v("修复插件被加载后，再次加载异常。")]),t._v(" "),e("h2",{attrs:{id:"v0-8-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-5"}},[t._v("#")]),t._v(" v0.8.5")]),t._v(" "),e("p",[t._v("为Launcher可以创建GUI项目，移动部分接口：")]),t._v(" "),e("p",[t._v("移动player中窗口适配接口到gui.utils.calculateUpdatePlayerSize\n移动player中的设置交互DOM元素接口到gui.utils.setInteractiveElement")]),t._v(" "),e("p",[t._v("修复动画跳转gotoStop gotoPlay失效。\n修复场景动画切换时显示异常。\n修复骨骼动画连续播放时上次骨骼不重置。")]),t._v(" "),e("h2",{attrs:{id:"v0-8-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-0"}},[t._v("#")]),t._v(" v0.8.0")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("增加富文本 "),e("a",{attrs:{href:"https://vipkid-edu.github.io/vf-docs/gui/richLabel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用与示例"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("增加音频采集 "),e("a",{attrs:{href:"https://vipkid-edu.github.io/vf-docs/gui/audioRecorder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用与示例"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("增加移动设备动作与方向获取 "),e("a",{attrs:{href:"https://vipkid-edu.github.io/vf-docs/gui/device.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用与示例"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("增加Loader的CDN切换")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vf.utils.FailureRetry[0] = 3;  // 设置失败次数\n\n// 加载过程中会自动识别扩展名，并调用CDNS对应字段进行加载\nvf.utils.CDNS.default = [url1,url2]; // 设置CDN数组\nvf.utils.CDNS.image = [url1,url2];  // 设置CDN数组\nvf.utils.CDNS.media = [url1,url2]; // 设置CDN数组\n\n")])])])]),t._v(" "),e("li",[e("p",[t._v("增加动画效果 - 抖动")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('vf.gui.Animation.play("jitter", displayobject, { rotation: 3, vertical: 5 }, 1000, this.callBack.bind(this));\n')])])])]),t._v(" "),e("li",[e("p",[t._v("增加同步加载函数 "),e("code",[t._v("vf.utils.redFileSync")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 接口适用于非媒体文件加载（js，json,text）,或后端服务请求\nasync function load(){\n    const urls = ['url1','url2'];\n    urls.forEach(value=>{\n        const data = await vf.utils.readFileSync(value, {}).catch((value) => { console.log('异常'); });\n        if(data){\n            console.log(data);\n        }\n    });\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// GUI模块或插件\nasync function load(){\n    const cls = await vf.utils.readFileSync(url, { moduleName: '插件类名' }).catch((e: IEvent) => {\n        console.log('异常'); });\n    });\n    if(cls){\n        const plug = new cls();\n    }\n}\n\n")])])])]),t._v(" "),e("li",[e("p",[t._v("增加字体粗细枚举值 "),e("code",[t._v("vf.gui.Enum.FontWeight")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const label = new vf.gui.Label();\nlabel.style.fontWeight = vf.gui.Enum.FontWeight.bold;\n")])])])]),t._v(" "),e("li",[e("p",[t._v("统一文件后缀获取函数 "),e("code",[t._v("vf.utils.getExtension")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vf.utils.getExtension('https://www.xxx.com/name.png') // png\n")])])])]),t._v(" "),e("li",[e("p",[t._v("增加三阶贝塞尔虚线、椭圆虚线、矩形(圆角)虚线设置")])]),t._v(" "),e("li",[e("p",[t._v("拆分星形组件为：")]),t._v(" "),e("ol",[e("li",[t._v("星形组件 "),e("a",{attrs:{href:"https://vipkid-edu.github.io/vf-docs/gui/star.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用与示例"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("正多边形组件 "),e("a",{attrs:{href:"https://vipkid-edu.github.io/vf-docs/gui/polygon.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用与示例"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("完善语音评测组件")])]),t._v(" "),e("li",[e("p",[t._v("修复设置背景后，取消背景并设置背景位置时抖动")])]),t._v(" "),e("li",[e("p",[t._v("修复图形部分参数设置不能立即生效问题")])])]),t._v(" "),e("h2",{attrs:{id:"兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容"}},[t._v("#")]),t._v(" 兼容")]),t._v(" "),e("p",[t._v("本次更新后，"),e("code",[t._v("圆形 Circle")]),t._v("组件可能出现兼容问题， 删除属性"),e("code",[t._v("radius")]),t._v(",width代替radius")]),t._v(" "),e("blockquote",[e("p",[t._v("本次更新研发人员，相关问题可以找对应人员：@杨啸 @杨杰会 @王海阔")])])])}),[],!1,null,null,null);a.default=r.exports}}]);