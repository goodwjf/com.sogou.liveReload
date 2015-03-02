# com.sogou.liveReload
##使用说明：
[liveReload.sext](https://github.com/goodwjf/com.sogou.liveReload/tree/master/sext/liveReload.sext)
直接安装可以作为web AuotReload sogou浏览器插件使用，
应用于web开发 监控 html js css 包括引入的外部资源发生改变的时候自动刷新页面；
但不支持 SogouExplorer Extension 的开发 因为无法监视 background 部分 如需要只能手动配置
copy liveBgPage.js,在background.html底部植入以下代码:
```bash
     <!-- liveBgPage 考虑执行顺序 必须放置最好一个script标签后 -->
     <script src="js/liveBgPage.js"></script>
```
具体可参考[liveReload2_bg.sext](https://github.com/goodwjf/com.sogou.liveReload/tree/master/sext/liveReload2_bg.sext)

如果是`SogouExplorer Extension `的开发其实还有更好的选择，这里推荐一个更智能的工具：
[generator-sogou](https://github.com/goodwjf/generator-sogou) 
 
> ####generator-sogou
其基于 [Yeoman](http://yeoman.io)需运行在node环境上，它的主要功能自动化创建SogouExplorer Extension，
实时刷新插件 包括 background部分，自动打包发布sext 省去了很多目录文件操作，这种无趣的事情就交给 generator-sogou 吧！
 
## License

MIT





