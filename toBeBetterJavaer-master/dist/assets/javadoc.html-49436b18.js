import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,a,d as e,b as s,e as t}from"./app-f79160ec.js";const l={},d=t(`<h1 id="_3-2-java注释" tabindex="-1"><a class="header-anchor" href="#_3-2-java注释" aria-hidden="true">#</a> 3.2 Java注释</h1><p>“二哥，Java 中的注释好像真没什么可讲的，我已经提前预习了，不过是单行注释，多行注释，还有文档注释。”三妹的脸上泛着甜甜的笑容，她竟然提前预习了接下来要学习的知识，有一种“士别三日，当刮目相看”的感觉。</p><p>“注释的种类确实不多，但还是挺有意思的，且听哥来给你说道说道。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_01、单行注释" tabindex="-1"><a class="header-anchor" href="#_01、单行注释" aria-hidden="true">#</a> 01、单行注释</h3><p>单行注释通常用于解释方法内某单行代码的作用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span> <span class="token comment">// age 用于表示年龄</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但如果写在行尾的话，其实是不符合阿里巴巴的开发规约的</strong>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正确的单行注释如上图中所说，在被注释语句上方另起一行，使用 <code>//</code> 注释。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// age 用于表示年龄</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_02、多行注释" tabindex="-1"><a class="header-anchor" href="#_02、多行注释" aria-hidden="true">#</a> 02、多行注释</h3><p>多行注释使用的频率其实并不高，通常用于解释一段代码的作用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
age 用于表示年纪
name 用于表示姓名
*/</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 <code>/*</code> 开始，以 <code>*/</code> 结束，但不如用多个 <code>//</code> 来得痛快，因为 <code>*</code> 和 <code>/</code> 不在一起，敲起来麻烦。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// age 用于表示年纪</span>
<span class="token comment">// name 用于表示姓名</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03、文档注释" tabindex="-1"><a class="header-anchor" href="#_03、文档注释" aria-hidden="true">#</a> 03、文档注释</h3><p>文档注释可用在三个地方，类、字段和方法，用来解释它们是干嘛的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信搜索「沉默王二」，回复 Java
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 姓名
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * main 方法作为程序的入口
     *
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> 参数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：在 Intellij IDEA 中，按下 <code>/**</code> 后敲下回车键就可以自动添加文档注释的格式，<code>*/</code> 是自动补全的。</p><p>接下来，我们来看看如何通过 javadoc 命令生成代码文档。</p><p><strong>第一步</strong>，在该类文件上右键，找到「Open in Terminal」 可以打开命令行窗口。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>第二步</strong>，执行 javadoc 命令 <code>javadoc Demo.java -encoding utf-8</code>。<code>-encoding utf-8</code> 可以保证中文不发生乱码。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>**第三步，**执行 <code>ls -l</code> 命令就可以看到生成代码文档时产生的文件，主要是一些可以组成网页的 html、js 和 css 文件。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>第四步</strong>，执行 <code>open index.html</code> 命令可以通过默认的浏览器打开文档注释。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「Demo」，可以查看到该类更具体的注释文档。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_04、文档注释的注意事项" tabindex="-1"><a class="header-anchor" href="#_04、文档注释的注意事项" aria-hidden="true">#</a> 04、文档注释的注意事项</h3><p>1）<code>javadoc</code> 命令只能为 public 和 protected 修饰的字段、方法和类生成文档。</p><p>default 和 private 修饰的字段和方法的注释将会被忽略掉。因为我们本来就不希望这些字段和方法暴露给调用者。</p><p>如果类不是 public 的话，javadoc 会执行失败。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2）文档注释中可以嵌入一些 HTML 标记，比如说段落标记 <code>&lt;p&gt;</code>，超链接标记 <code>&lt;a&gt;&lt;/a&gt;</code> 等等，但不要使用标题标记，比如说 <code>&lt;h1&gt;</code>，因为 javadoc 会插入自己的标题，容易发生冲突。</p><p>3）文档注释中可以插入一些 <code>@</code> 注解，比如说 <code>@see</code> 引用其他类，<code>@version</code> 版本号，<code>@param</code> 参数标识符，<code>@author</code> 作者标识符，<code>@deprecated</code> 已废弃标识符，等等。</p><h3 id="_05、注释规约" tabindex="-1"><a class="header-anchor" href="#_05、注释规约" aria-hidden="true">#</a> 05、注释规约</h3><p>1）类、字段、方法必须使用文档注释，不能使用单行注释和多行注释。因为注释文档在 IDE 编辑窗口中可以悬浮提示，提高编码效率。</p>`,40),p={href:"https://javabetter.cn/string/immutable.html",target:"_blank",rel:"noopener noreferrer"},v=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-09.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),u={href:"https://javabetter.cn/oo/abstract.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>3）所有的类都必须添加创建者和创建日期。</p><p>Intellij IDEA 中可以在「File and Code Templates」中设置。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/fourteen-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>语法如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* 微信搜索「沉默王二」，回复 Java
* @author 沉默王二
* @date \${DATE}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置好后，在新建一个类的时候就可以自动生成了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 微信搜索「沉默王二」，回复 Java
 *
 * <span class="token keyword">@author</span> 沉默王二
 * <span class="token keyword">@date</span> 2020/11/16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),g={href:"https://javabetter.cn/basic-extra-meal/enum.html",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,"5）代码修改的同时，注释也要进行相应的修改。",-1),k=a("p",null,"“好了，三妹，关于 Java 中的注释就先说这么多吧。”转动了一下僵硬的脖子后，我对三妹说。“记住一点，注释是程序固有的一部分。”",-1),h=a("ul",null,[a("li",null,"第一、注释要能够准确反映设计思想和代码逻辑;"),a("li",null,"第二、注释要能够描述业务含 义，使别的程序员能够迅速了解到代码背后的信息。")],-1),f=a("p",null,"完全没有注释的大段代码对于阅读者形同 天书，注释是给自己看的，即使隔很长时间，也能清晰理解当时的思路;注释也是给继任者看 的，使其能够快速接替自己的工作。",-1),_=a("hr",null,null,-1),j={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},x={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},w=a("p",null,[e("微信搜 "),a("strong",null,"沉默王二"),e(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),e(" 即可免费领取。")],-1),y=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function J(z,I){const n=o("ExternalLinkIcon");return c(),r("div",null,[d,a("p",null,[e("比如说，在使用 "),a("a",p,[e("String 类"),s(n)]),e("的时候，鼠标悬停在 String 上时可以得到以下提示。")]),v,a("p",null,[e("2）所有的"),a("a",u,[e("抽象方法"),s(n)]),e("(包括接口中的方法)必须要用 Javadoc 注释、除了返回值、参数、 异常说明外，还必须指出该方法做什么事情，实现什么功能。")]),m,a("p",null,[e("4）所有的"),a("a",g,[e("枚举"),s(n)]),e("类型字段必须要有注释，说明每个数据项的用途。")]),b,k,h,f,_,a("p",null,[e("GitHub 上标星 10000+ 的开源知识库《"),a("a",j,[e("二哥的 Java 进阶之路"),s(n)]),e("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",x,[e("太赞了，GitHub 上标星 10000+ 的 Java 教程"),s(n)])]),w,y])}const S=i(l,[["render",J],["__file","javadoc.html.vue"]]);export{S as default};
