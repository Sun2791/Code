import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,d as s,b as e,e as p}from"./app-f79160ec.js";const i={},u=p(`<h1 id="_5-21-java枚举-enum" tabindex="-1"><a class="header-anchor" href="#_5-21-java枚举-enum" aria-hidden="true">#</a> 5.21 Java枚举（enum）</h1><p>“今天我们来学习枚举吧，三妹！”我说，“同学让你去她家玩了两天，感觉怎么样呀？”</p><p>“心情放松了不少。”三妹说，“可以开始学 Java 了，二哥。”</p><p>“OK。”</p><p>“枚举（enum），是 Java 1.5 时引入的关键字，它表示一种特殊类型的类，继承自 java.lang.Enum。”</p><p>“我们来新建一个枚举 PlayerType。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">PlayerType</span> <span class="token punctuation">{</span>
    <span class="token constant">TENNIS</span><span class="token punctuation">,</span>
    <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span>
    <span class="token constant">BASKETBALL</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“二哥，我没看到有继承关系呀！”</p><p>“别着急，看一下反编译后的字节码，你就明白了。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">PlayerType</span> <span class="token keyword">extends</span> <span class="token class-name">Enum</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PlayerType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>$<span class="token constant">VALUES</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PlayerType</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">)</span><span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>com<span class="token operator">/</span>cmower<span class="token operator">/</span>baeldung<span class="token operator">/</span>enum1<span class="token operator">/</span><span class="token class-name">PlayerType</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">PlayerType</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">PlayerType</span> <span class="token constant">TENNIS</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">PlayerType</span> <span class="token constant">FOOTBALL</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">PlayerType</span> <span class="token constant">BASKETBALL</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">PlayerType</span> $<span class="token constant">VALUES</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> 
    <span class="token punctuation">{</span>
        <span class="token constant">TENNIS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlayerType</span><span class="token punctuation">(</span><span class="token string">&quot;TENNIS&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">FOOTBALL</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlayerType</span><span class="token punctuation">(</span><span class="token string">&quot;FOOTBALL&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">BASKETBALL</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlayerType</span><span class="token punctuation">(</span><span class="token string">&quot;BASKETBALL&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        $<span class="token constant">VALUES</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PlayerType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token constant">TENNIS</span><span class="token punctuation">,</span> <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span> <span class="token constant">BASKETBALL</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“看到没？Java 编译器帮我们做了很多隐式的工作，不然手写一个枚举就没那么省心省事了。”</p><ul><li>要继承 Enum 类；</li><li>要写构造方法；</li><li>要声明静态变量和数组；</li><li>要用 static 块来初始化静态变量和数组；</li><li>要提供静态方法，比如说 <code>values()</code> 和 <code>valueOf(String name)</code>。</li></ul><p>“确实，作为开发者，我们的代码量减少了，枚举看起来简洁明了。”三妹说。</p><p>“既然枚举是一种特殊的类，那它其实是可以定义在一个类的内部的，这样它的作用域就可以限定于这个外部类中使用。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">PlayerType</span> type<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">PlayerType</span> <span class="token punctuation">{</span>
        <span class="token constant">TENNIS</span><span class="token punctuation">,</span>
        <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span>
        <span class="token constant">BASKETBALL</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isBasketballPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">PlayerType</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setType</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PlayerType 就相当于 Player 的内部类。</p><p>由于枚举是 final 的，所以可以确保在 Java 虚拟机中仅有一个常量对象，基于这个原因，我们可以使用“==”运算符来比较两个枚举是否相等，参照 <code>isBasketballPlayer()</code> 方法。</p><p>“那为什么不使用 <code>equals()</code> 方法判断呢？”三妹问。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Player<span class="token punctuation">.</span>PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“我来给你解释下。”</p><p>“==”运算符比较的时候，如果两个对象都为 null，并不会发生 <code>NullPointerException</code>，而 <code>equals()</code> 方法则会。</p><p>另外， “==”运算符会在编译时进行检查，如果两侧的类型不匹配，会提示错误，而 <code>equals()</code> 方法则不会。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/enum/enum-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“枚举还可用于 switch 语句，和基本数据类型的用法一致。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>playerType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">TENNIS</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;网球运动员费德勒&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">FOOTBALL</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;足球运动员C罗&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BASKETBALL</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;篮球运动员詹姆斯&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">UNKNOWN</span><span class="token operator">:</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;未知&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                <span class="token string">&quot;运动员类型: &quot;</span> <span class="token operator">+</span> playerType<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“如果枚举中需要包含更多信息的话，可以为其添加一些字段，比如下面示例中的 name，此时需要为枚举添加一个带参的构造方法，这样就可以在定义枚举时添加对应的名称了。”我继续说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">PlayerType</span> <span class="token punctuation">{</span>
    <span class="token function">TENNIS</span><span class="token punctuation">(</span><span class="token string">&quot;网球&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FOOTBALL</span><span class="token punctuation">(</span><span class="token string">&quot;足球&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">BASKETBALL</span><span class="token punctuation">(</span><span class="token string">&quot;篮球&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token class-name">PlayerType</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“get 了吧，三妹？”</p><p>“嗯，比较好理解。”</p><p>“那接下来，我就来说点不一样的。”</p><p>“来吧，我准备好了。”</p>`,31),k={href:"https://javabetter.cn/collection/gailan.html",target:"_blank",rel:"noopener noreferrer"},r=p(`<p>“因为 EnumSet 是一个抽象类，所以创建 EnumSet 时不能使用 new 关键字。不过，EnumSet 提供了很多有用的静态工厂方法。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/enum/enum-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“来看下面这个例子，我们使用 <code>noneOf()</code> 静态工厂方法创建了一个空的 PlayerType 类型的 EnumSet；使用 <code>allOf()</code> 静态工厂方法创建了一个包含所有 PlayerType 类型的 EnumSet。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnumSetTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">PlayerType</span> <span class="token punctuation">{</span>
        <span class="token constant">TENNIS</span><span class="token punctuation">,</span>
        <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span>
        <span class="token constant">BASKETBALL</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">EnumSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PlayerType</span><span class="token punctuation">&gt;</span></span> enumSetNone <span class="token operator">=</span> <span class="token class-name">EnumSet</span><span class="token punctuation">.</span><span class="token function">noneOf</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumSetNone<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">EnumSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PlayerType</span><span class="token punctuation">&gt;</span></span> enumSetAll <span class="token operator">=</span> <span class="token class-name">EnumSet</span><span class="token punctuation">.</span><span class="token function">allOf</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumSetAll<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“来看一下输出结果。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token constant">TENNIS</span><span class="token punctuation">,</span> <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span> <span class="token constant">BASKETBALL</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有了 EnumSet 后，就可以使用 Set 的一些方法了，见下图。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/enum/enum-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“除了 EnumSet，还有 EnumMap，是一个专门针对枚举类型的 Map 接口的实现类，它可以将枚举常量作为键来使用。EnumMap 的效率比 HashMap 还要高，可以直接通过数组下标（枚举的 ordinal 值）访问到元素。”</p><p>“和 EnumSet 不同，EnumMap 不是一个抽象类，所以创建 EnumMap 时可以使用 new 关键字。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">EnumMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PlayerType</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> enumMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EnumMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了 EnumMap 对象后就可以使用 Map 的一些方法了，见下图。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/enum/enum-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,13),d={href:"https://javabetter.cn/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">EnumMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PlayerType</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> enumMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EnumMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
enumMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">,</span><span class="token string">&quot;篮球运动员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
enumMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">FOOTBALL</span><span class="token punctuation">,</span><span class="token string">&quot;足球运动员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
enumMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">TENNIS</span><span class="token punctuation">,</span><span class="token string">&quot;网球运动员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enumMap<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">PlayerType</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“来看一下输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{TENNIS=网球运动员, FOOTBALL=足球运动员, BASKETBALL=篮球运动员}
篮球运动员
true
篮球运动员
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“除了以上这些，《Effective Java》这本书里还提到了一点，如果要实现单例的话，最好使用枚举的方式。”我说。</p><p>“等等二哥，单例是什么？”三妹没等我往下说，就连忙问道。</p><p>“单例（Singleton）用来保证一个类仅有一个对象，并提供一个访问它的全局访问点，在一个进程中。因为这个类只有一个对象，所以就不能再使用 <code>new</code> 关键字来创建新的对象了。”</p><p>“Java 标准库有一些类就是单例，比如说 Runtime 这个类。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Runtime</span> runtime <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“Runtime 类可以用来获取 Java 程序运行时的环境。”</p><p>“关于单例，懂了些吧？”我问三妹。</p><p>“噢噢噢噢。”三妹点了点头。</p><p>“通常情况下，实现单例并非易事，来看下面这种写法。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span> 
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),m={href:"https://javabetter.cn/thread/volatile.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://javabetter.cn/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">EasySingleton</span><span class="token punctuation">{</span>
    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“就这？”三妹睁大了眼睛。</p>`,2),g={href:"https://javabetter.cn/io/Serializbale.html",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"“好了，关于枚举就讲这么多吧，三妹，你把这些代码都手敲一遍吧！”",-1),T=n("p",null,"“好勒，这就安排。二哥，你去休息吧。”",-1),f=n("p",null,"“嗯嗯。”讲了这么多，必须跑去抽烟机那里安排一根华子了。",-1),h=n("hr",null,null,-1),S={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},E={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),j=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function _(A,B){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[s("“EnumSet 是一个专门针对枚举类型的 "),n("a",k,[s("Set 接口"),e(a)]),s("（后面会讲）的实现类，它是处理枚举类型数据的一把利器，非常高效。”我说，“从名字上就可以看得出，EnumSet 不仅和 Set 有关系，和枚举也有关系。”")]),r,n("p",null,[s("和 "),n("a",d,[s("HashMap"),e(a)]),s("（后面会讲）的使用方法大致相同，来看下面的例子。")]),v,n("p",null,[s("“要用到 "),n("a",m,[s("volatile"),e(a)]),s("、"),n("a",b,[s("synchronized"),e(a)]),s(" 关键字等等，但枚举的出现，让代码量减少到极致。”")]),y,n("p",null,[s("“对啊，枚举默认实现了 "),n("a",g,[s("Serializable 接口"),e(a)]),s("，因此 Java 虚拟机可以保证该类为单例，这与传统的实现方式不大相同。传统方式中，我们必须确保单例在反序列化期间不能创建任何新实例。”我说。")]),w,T,f,h,n("p",null,[s("GitHub 上标星 10000+ 的开源知识库《"),n("a",S,[s("二哥的 Java 进阶之路"),e(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",E,[s("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(a)])]),L,j])}const O=t(i,[["render",_],["__file","enum.html.vue"]]);export{O as default};
