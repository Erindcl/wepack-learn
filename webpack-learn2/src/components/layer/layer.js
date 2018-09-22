import tpl from './layer.tpl'; // 此处将模板导入 导入的是模板编译后形成的一个函数

function layer() {
    return {
        name: 'layer',
        tpl: tpl // 此处的tpl为一个函数
    }
}

export default layer;