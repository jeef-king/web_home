var ex = require('express');
var f = require('./fortune.js');
var app = ex();
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.use(ex.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
    res.type('text/plain');
    res.render('home3');
});
app.get('/about',function(req,res){
    //res.type('text/plain');
    res.render('about',{text:f.getF(),abc: f.db.test('sss1')});
});
app.get('/aa',function(req,res){
    //res.type('text/plain');
    res.render('aa',{f: f.getF()});
});
app.use(function(err,req,res,next){
    res.type('text/plain');
    res.status(404);
    console.log(err);
    res.render('404-not found');
});
app.listen(app.get('port'),function(){
    console.log('启动端口...'+app.get('port'));
});
console.log('testPC');