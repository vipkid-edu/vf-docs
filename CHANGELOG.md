# v0.8.0

1. 增加富文本 [使用与示例](https://vipkid-edu.github.io/vf-docs/gui/richLabel.html)

1. 增加音频采集 [使用与示例](https://vipkid-edu.github.io/vf-docs/gui/audioRecorder.html)

1. 增加移动设备动作与方向获取 [使用与示例](https://vipkid-edu.github.io/vf-docs/gui/device.html)

1. 增加Loader的CDN切换 
    ```
    vf.utils.FailureRetry[0] = 3;  // 设置失败次数

    // 加载过程中会自动识别扩展名，并调用CDNS对应字段进行加载
    vf.utils.CDNS.default = [url1,url2]; // 设置CDN数组
    vf.utils.CDNS.image = [url1,url2];  // 设置CDN数组
    vf.utils.CDNS.media = [url1,url2]; // 设置CDN数组

    ```

1. 增加动画效果 - 抖动 

    ```
    vf.gui.Animation.play("jitter", displayobject, { rotation: 3, vertical: 5 }, 1000, this.callBack.bind(this));
    ```

1. 增加同步加载函数 `vf.utils.redFileSync`


    ```
    // 接口适用于非媒体文件加载（js，json,text）,或后端服务请求
    async function load(){
        const urls = ['url1','url2'];
        urls.forEach(value=>{
            const data = await vf.utils.readFileSync(value, {}).catch((value) => { console.log('异常'); });
            if(data){
                console.log(data);
            }
        });
    }
    ```

    ```
    // GUI模块或插件
    async function load(){
        const cls = await vf.utils.readFileSync(url, { moduleName: '插件类名' }).catch((e: IEvent) => {
            console.log('异常'); });
        });
        if(cls){
            const plug = new cls();
        }
    }

    ```

1. 增加字体粗细枚举值 `vf.gui.Enum.FontWeight`

    ```
    const label = new vf.gui.Label();
    label.style.fontWeight = vf.gui.Enum.FontWeight.bold;
    ```
1. 统一文件后缀获取函数 `vf.utils.getExtension`

    ```
    vf.utils.getExtension('https://www.xxx.com/name.png') // png
    ```

1. 增加三阶贝塞尔虚线、椭圆虚线、矩形(圆角)虚线设置

1. 拆分星形组件为：
    1. 星形组件 [使用与示例](https://vipkid-edu.github.io/vf-docs/gui/star.html)
    1. 正多边形组件 [使用与示例](https://vipkid-edu.github.io/vf-docs/gui/polygon.html)

1. 完善语音评测组件

1. 修复设置背景后，取消背景并设置背景位置时抖动

1. 修复图形部分参数设置不能立即生效问题