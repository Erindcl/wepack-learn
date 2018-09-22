import tpl from './layer.html'; // 这样引入将模板中的代码作为字符串处理

function layer() {
    return {
        name: 'layer',
        tpl: tpl
    }
}

export default layer;