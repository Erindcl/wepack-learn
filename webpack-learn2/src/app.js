import './css/common.css';
import './components/layer/layer.less';
import Layer from './components/layer/layer.js';

const App = function() {
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name: 'xiaohe',
        arr: ['oppo', 'huawei', 'xiaomi']
    }); // 向函数中传入了参数 供其在模板中使用
}

new App()