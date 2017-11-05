//父类
class praiseButton{
	//构造方法,参数：点击次数，点击元素
	constructor(num,element){
		this.num=num;
		this.element=element;
	}
	clickAction(){
		this.element.click(()=>{
			//点击次数小于10时，置亮
			if (this.num<10){
				this.element.css('-webkit-filter','grayscale(0)');
				$('#animation').addClass('num');
				this.num=add(this.num);
				setTimeout(function(){
					$('#animation').removeClass('num');
				},1000);
			}else{
				this.element.css('-webkit-filter','grayscale(1)');
				this.num=0;
			}
			console.log(this.num);
		})
	}
}
//子类
class Thumb extends praiseButton{
	constructor(num,element){
		super(num,element)
	}
}
export default{
	Thumb
}
