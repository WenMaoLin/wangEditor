/*
    menu - video
*/
import $ from '../../util/dom-core.js'
import { getRandom } from '../../util/util.js'
import Panel from '../panel.js'

// 构造函数
function Video(editor) {
    this.editor = editor
    this.$elem = $('<div class="w-e-menu"><i class="w-e-icon-play"></i></div>')
    this.type = 'panel'

    // 当前是否 active 状态
    this._active = false
}

// 原型
function Yi35(editor) {
    this.editor = editor;
    this.$elem = $('<div class="w-e-menu" >\n            <img style="padding-bottom:4px; opacity: 0.5; width: 18px" src="https://www.135editor.com/apple-touch-icon.png"></img>\n        </div>');
    this.type = 'click';

    // 当前是否 active 状态
    this._active = true;
}

// 原型
Yi35.prototype = {
    constructor: Yi35,

    // 点击事件
    onClick: function onClick(e) {
        window.open('https://www.135editor.com/')
    }
};

export default Yi35