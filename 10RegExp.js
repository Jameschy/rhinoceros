/**
 * Create By admins on 2020/10/23.
 */
var pattern=/s$/;

var cc='awdfegfes';
var bb='faetwgwgw';
console.log(pattern);

// 构造函数法,等价上面
var pattern2 = new RegExp('s$');
console.log(pattern2);


var aa="Javascript".search(/script/i);
console.log(aa);
var text="j'javascript'sss";

// 将text中含有的符合javascript的字符，替换成JavaScript
var txt = text.replace(/javascript/gi,"JavaScript");
console.log(txt);

var quote=/"([^"]*)"/g;
var xx=text.replace(quote,"``$1''")
console.log(xx);

var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit my Blog at http://www.example.com/~david";
var result = text.match(url);

if (result!=null){
    var fullurl=result[0];
    console.log(fullurl);

    var protocol=result[1];
    console.log(protocol);

    var host =result[2];
    console.log(host);

    var path =result[3];
    console.log(path);

    console.log(result);
}


var str = "1,2,3,4,5,6";

var txts=str.split(/\s*,\s*/);
console.log(txts);


