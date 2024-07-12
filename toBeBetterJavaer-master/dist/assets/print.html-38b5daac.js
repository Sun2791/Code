import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,d as a,b as t,e}from"./app-f79160ec.js";const l={},r=n("h1",{id:"_4-3-打印数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-3-打印数组","aria-hidden":"true"},"#"),a(" 4.3 打印数组")],-1),u={href:"https://javabetter.cn/array/array.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<p>“是的，因此数组也就没有机会覆盖 <code>Object.toString()</code> 方法。如果尝试直接打印数组的话，输出的结果并不是我们预期的结果。”我接着三妹的话继续说。</p><p>“那怎么打印数组呢？”三妹心有灵犀地把今天的核心问题提了出来。</p><h3 id="为什么不能直接打印数组" tabindex="-1"><a class="header-anchor" href="#为什么不能直接打印数组" aria-hidden="true">#</a> 为什么不能直接打印数组</h3><p>“首先，我们来看一下，为什么不能直接打印数组，直接打印的话，会出现什么问题。”</p><p>来看这样一个例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String [] cmowers = {&quot;沉默&quot;,&quot;王二&quot;,&quot;一枚有趣的程序员&quot;};
System.out.println(cmowers);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序打印的结果是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Ljava.lang.String;@3d075dc0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>[Ljava.lang.String;</code> 表示字符串数组的 Class 名，@ 后面的是十六进制的 hashCode——这样的打印结果太“人性化”了，一般人表示看不懂！为什么会这样显示呢？查看一下 <code>java.lang.Object</code> 类的 <code>toString()</code> 方法就明白了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次证明，数组虽然没有显式定义成一个类，但它的确是一个对象，继承了祖先类 Object 的所有方法。</p><p>“哥，那为什么数组不单独定义一个类来表示呢？就像字符串 String 类那样呢？”三妹这个问题让人头大，但也好解释。</p><p>“一个合理的说法是 Java 将其隐藏了。假如真的存在这么一个类，就叫 Array.java 吧，我们假想一下它真实的样子，必须得有一个容器来存放数组的每一个元素，就像 String 类那样。”一边回答三妹，我一边打开了 String 类的源码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** The value is used for character storage. */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span> value<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“最终还是要用类似一种数组的形式来存放数组的元素，对吧？这就变得很没有必要了，不妨就把数组当做是一个没有形体的对象吧！”</p><p>“好了，不讨论这个了。”我怕话题扯远了，扯到我自己也答不出来就尴尬了，赶紧把三妹的思路拽了回来。</p><h3 id="stream-流打印-java-数组" tabindex="-1"><a class="header-anchor" href="#stream-流打印-java-数组" aria-hidden="true">#</a> stream 流打印 Java 数组</h3>`,17),k={href:"https://javabetter.cn/java8/stream.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>第一种形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二种形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三种形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印的结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>沉默
王二
一枚有趣的程序员
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m={href:"https://javabetter.cn/java8/Lambda.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="for-循环打印-java-数组" tabindex="-1"><a class="header-anchor" href="#for-循环打印-java-数组" aria-hidden="true">#</a> for 循环打印 Java 数组</h3><p>“当然了，也可以使用传统的方式，for 循环。甚至 for-each 也行。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cmowers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> cmowers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arrays-工具类打印-java-数组" tabindex="-1"><a class="header-anchor" href="#arrays-工具类打印-java-数组" aria-hidden="true">#</a> Arrays 工具类打印 Java 数组</h3>`,4),b={href:"https://javabetter.cn/common-tool/arrays.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"Arrays.toString()",-1),f=e(`<p>“当然没有了，我认为 <code>Arrays.toString()</code> 是打印数组的最佳方式，没有之一。”我的情绪有点激动。</p><p><code>Arrays.toString()</code> 可以将任意类型的数组转成字符串，包括基本类型数组和引用类型数组。该方法有多种重载形式。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用 <code>Arrays.toString()</code> 方法来打印数组再优雅不过了，就像，就像，就像蒙娜丽莎的微笑。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（三妹看到这么一副图的时候忍不住地笑了）</p><p>“三妹，你不要笑，来，怀揣着愉快的心情看一下代码示例。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> cmowers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;沉默&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;王二&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;一枚有趣的程序员&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序打印结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[沉默, 王二, 一枚有趣的程序员]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>哇，打印格式不要太完美，不多不少！完全是我们预期的结果：<code>[]</code> 表明是一个数组，<code>,</code> 点和空格用来分割元素。</p><h3 id="arrays工具类打印二维数组" tabindex="-1"><a class="header-anchor" href="#arrays工具类打印二维数组" aria-hidden="true">#</a> Arrays工具类打印二维数组</h3><p>“哥，那如果我想打印二维数组呢？”</p><p>“可以使用 <code>Arrays.deepToString()</code> 方法。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> deepArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;沉默&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王二&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;一枚有趣的程序员&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">deepToString</span><span class="token punctuation">(</span>deepArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[[沉默, 王二], [一枚有趣的程序员]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pojo-的打印规约" tabindex="-1"><a class="header-anchor" href="#pojo-的打印规约" aria-hidden="true">#</a> POJO 的打印规约</h3><p>“说到打印，三妹，哥给你提醒一点。阿里巴巴的 Java 开发手册上有这样一条规约，你看。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“什么是 POJO 呢，就是 Plain Ordinary Java Object 的缩写，一般在 Web 应用程序中建立一个数据库的映射对象时，我们称它为 POJO，这类对象不继承或不实现任何其它 Java 框架的类或接口。”</p><p>“对于这样的类，最好是重写一下它的 <code>toString()</code> 方法，方便查看这个对象到底包含了什么字段，好排查问题。”</p><p>“如果不重写的话，打印出来的 Java 对象就像直接打印数组的那样，一串谁也看不懂的字符序列。”</p><p>“可以借助 Intellij IDEA 生成重写的 <code>toString()</code> 方法，特别方便。”</p><p>“好的，哥，我记住了。以后遇到的话，我注意下。你去休息吧，我来敲一下你提到的这些代码，练一练。”</p><p>“OK，我走，我走。”</p><hr>`,27),j={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},y={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),x=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function S(w,q){const s=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[a("“哥，"),n("a",u,[a("之前听你说，数组也是一个对象"),t(s)]),a("，但 Java 中并未明确的定义这样一个类。”看来三妹有在用心地学习。")]),d,n("p",null,[a("“我们来看第一种打印数组的方法，使用时髦一点的"),n("a",k,[a("Stream 流"),t(s)]),a("。”")]),v,n("p",null,[a("没错，这三种方式都可以轻松胜任本职工作，并且显得有点高大上，毕竟用到了 Stream，以及 "),n("a",m,[a("lambda 表达式"),t(s)]),a("。")]),g,n("p",null,[a("“哥，你难道忘了"),n("a",b,[a("上一篇"),t(s)]),a("在讲 Arrays 工具类的时候，提到过另外一种方法 "),h,a(" 吗？”三妹看我一直说不到点子上，有点着急了。")]),f,n("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),n("a",j,[a("二哥的 Java 进阶之路"),t(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",y,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(s)])]),_,x])}const O=p(l,[["render",S],["__file","print.html.vue"]]);export{O as default};
