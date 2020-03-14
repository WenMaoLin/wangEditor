/*
    menu - video
*/
import $ from '../../util/dom-core.js'
import { getRandom } from '../../util/util.js'
import Panel from '../panel.js'

// 构造函数
function Mixiu(editor) {
    this.editor = editor;
    this.$elem = $('<div class="w-e-menu" >\n            <img style="padding-bottom:4px; opacity: 0.5; width: 18px" src="https://stc.xiumi.us/images/316e42.xiumi_logo_40.png"></img>\n        </div>');
    this.type = 'click';

    // 当前是否 active 状态
    this._active = true;
}

// 原型
Mixiu.prototype = {
    constructor: Mixiu,

    // 点击事件
    onClick: function onClick(e) {
        window.open('https://xiumi.us/studio/v5#/paper/for/new/cube/0')
    }
};
export default Mixiu