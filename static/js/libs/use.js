(function(){var a={};define({version:"0.2.0",load:function(b,c,d,e){e||(e=require.rawConfig);var f=e.use&&e.use[b];if(!f)throw new TypeError("Module '"+b+"' is undefined or does not"+" have a `use` config. Make sure it exists, add a `use` config, or"+" don't use use! on it");a[b]={deps:f.deps||[],attach:f.attach},c(f.deps||[],function(){var a=arguments;c([b],function(){var b=f.attach;return e.isBuild?d():typeof b=="function"?d(b.apply(window,a)):d(window[b])})})},write:function(b,c,d){var e=a[c],f=e.deps,g={attach:null,deps:""};typeof attach=="function"?g.attach="return "+e.attach.toString()+";":g.attach="return typeof "+e.attach+' !== "undefined" ? '+e.attach+" : void 0",f.length&&(g.deps="'"+f.toString().split(",").join("','")+"'"),d(["define('",b,"!",c,"', ","[",g.deps,"],","function() {",g.attach,"}",");\n"].join(""))}})})()