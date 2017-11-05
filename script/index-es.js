'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//父类
var praiseButton = function () {
	//构造方法,参数：点击次数，点击元素
	function praiseButton(num, element) {
		_classCallCheck(this, praiseButton);

		this.num = num;
		this.element = element;
	}

	_createClass(praiseButton, [{
		key: 'clickAction',
		value: function clickAction() {
			var _this = this;

			this.element.click(function () {
				//点击次数小于10时，置亮
				if (_this.num < 10) {
					_this.element.css('-webkit-filter', 'grayscale(0)');
					$('.index').addClass('num');
					_this.num = add(_this.num);
					setTimeout(function () {
						$('.index').removeClass('num');
					}, 1000);
				} else {
					_this.element.css('-webkit-filter', 'grayscale(1)');
					_this.num = 0;
				}
				console.log(_this.num);
			});
		}
	}]);

	return praiseButton;
}();
//子类


var Thumb = function (_praiseButton) {
	_inherits(Thumb, _praiseButton);

	function Thumb(num, element) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
	}

	return Thumb;
}(praiseButton);

exports.default = {
	Thumb: Thumb
};
