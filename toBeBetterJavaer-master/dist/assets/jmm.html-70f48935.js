import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as p,c as i,a,d as e,b as t,e as r}from"./app-f79160ec.js";const l={},d=a("h1",{id:"第七节-java的内存模型-jmm",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第七节-java的内存模型-jmm","aria-hidden":"true"},"#"),e(" 第七节：Java的内存模型（JMM）")],-1),c=a("p",null,"某年某月的某一天，小二去蚂蚁金服面试了，一上来，面试官老王就问他：『说说什么是 Java 的内存模型(JMM)吧？』",-1),h={href:"https://javabetter.cn/jvm/neicun-jiegou.html",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"老王会心一笑，露出一道光芒，略带轻蔑地打断了小王，说：『好了，今天的面试先到这里了，回去等通知吧』",-1),b=a("p",null,"一听到等通知这句话，小二心里知道，这场面试大概率是凉凉了。为什么呢？小二很是不解。",-1),u={href:"https://javabetter.cn/thread/jmm.html",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"Java内存",-1),m=r('<p>Java 内存模型（Java Memory Model，JMM）定义了 Java 程序中的变量、线程如何和主存以及工作内存进行交互的规则。它主要涉及到多线程环境下的共享变量可见性、指令重排等问题，是理解并发编程中的关键概念。</p><p>并发编程的线程之间存在两个问题：</p><ul><li>线程间如何通信？即：线程之间以何种机制来交换信息</li><li>线程间如何同步？即：线程以何种机制来控制不同线程间发生的相对顺序</li></ul><p>有两种并发模型可以解决这两个问题：</p><ul><li>消息传递并发模型</li><li>共享内存并发模型</li></ul><p>这两种模型之间的区别如下图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-a610752d-ef73-47f2-b02c-6954eb3d62bf.png" alt="两种并发模型的比较" tabindex="0" loading="lazy"><figcaption>两种并发模型的比较</figcaption></figure><p><strong>Java 使用的是共享内存并发模型</strong>。</p><h2 id="java-内存模型" tabindex="-1"><a class="header-anchor" href="#java-内存模型" aria-hidden="true">#</a> Java 内存模型</h2><h3 id="什么是共享变量" tabindex="-1"><a class="header-anchor" href="#什么是共享变量" aria-hidden="true">#</a> 什么是共享变量？</h3><p>先来看一下运行时数据区，相信大家一点都不陌生：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-0b9e4b1e-90e2-41bb-be89-f65e3a10fa08.png" alt="Java运行时数据区域" tabindex="0" loading="lazy"><figcaption>Java运行时数据区域</figcaption></figure><p>对于每一个线程来说，栈都是私有的，而堆是共有的。</p><p>也就是说，在栈中的变量（局部变量、方法定义的参数、异常处理的参数）不会在线程之间共享，也就不会有内存可见性的问题，也不受内存模型的影响。而在堆中的变量是共享的，一般称之为共享变量。</p>',14),v={href:"https://javabetter.cn/thread/thread-bring-some-problem.html",target:"_blank",rel:"noopener noreferrer"},M=a("strong",null,"堆中的共享变量",-1),J=r('<h3 id="内存可见性问题是如何发生的" tabindex="-1"><a class="header-anchor" href="#内存可见性问题是如何发生的" aria-hidden="true">#</a> 内存可见性问题是如何发生的？</h3><p>那可能就有小伙伴会问：<strong>既然堆是共享的，为什么在堆中会有内存不可见问题</strong>？</p><p>这是因为现代计算机为了高效，往往会在高速缓存区中缓存共享变量，因为 CPU 访问缓存区比访问内存要快得多。</p><blockquote><p>线程之间的共享变量存在于主存中，每个线程都有一个私有的本地内存，存储了该线程的读、写共享变量的副本。本地内存是 Java 内存模型的一个抽象概念，并不真实存在。它涵盖了缓存、写缓冲区、寄存器等。</p></blockquote><p>Java 线程之间的通信由 Java 内存模型（简称 JMM）控制，从抽象的角度来说，JMM 定义了线程和主存之间的抽象关系。JMM 的抽象示意图如图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-f02219aa-e762-4df0-ac08-6f4cceb535c2.jpg" alt="JMM抽象示意图" tabindex="0" loading="lazy"><figcaption>JMM抽象示意图</figcaption></figure><p>从图中可以看出：</p><ol><li>所有的共享变量都存在主存中。</li><li>每个线程都保存了一份该线程使用到的共享变量的副本。</li><li>如果线程 A 与线程 B 之间要通信的话，必须经历下面 2 个步骤： <ol><li>线程 A 将本地内存 A 中更新过的共享变量刷新到主存中去。</li><li>线程 B 到主存中去读取线程 A 之前已经更新过的共享变量。</li></ol></li></ol><p><strong>所以，线程 A 无法直接访问线程 B 的工作内存，线程间通信必须经过主存。</strong></p><p>注意，根据 JMM 的规定，<strong>线程对共享变量的所有操作都必须在自己的本地内存中进行，不能直接从主存中读取</strong>。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jmm-20230823201006.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>主内存：Java堆中对象实例数据部分，对应于物理硬件的内存</li><li>工作内存：Java栈中的部分区域，优先存储于寄存器和高速缓存</li></ul><p>所以线程 B 并不是直接去主存中读取共享变量的值，而是先在本地内存 B 中找到这个共享变量，发现这个共享变量已经被更新了，然后本地内存 B 去主存中读取这个共享变量的新值，并拷贝到本地内存 B 中，最后线程 B 再读取本地内存 B 中的新值。</p><h3 id="如何保证内存可见性" tabindex="-1"><a class="header-anchor" href="#如何保证内存可见性" aria-hidden="true">#</a> 如何保证内存可见性？</h3><p>那么怎么知道这个共享变量的被其他线程更新了呢？这就是 JMM 的功劳了，也是 JMM 存在的必要性之一。<strong>JMM 通过控制主存与每个线程的本地内存之间的交互，来提供内存可见性保证</strong>。</p>',15),_={href:"https://javabetter.cn/thread/volatile.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://javabetter.cn/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},k=r('<p>在更底层，JMM 通过内存屏障来实现内存的可见性以及禁止重排序。为了程序员更方便地理解，设计者提出了 happens-before 的概念（下文会细讲），它更加简单易懂，从而避免了程序员为了理解内存可见性而去学习复杂的重排序规则，以及这些规则的具体实现方法。</p><h3 id="jmm-与-java-运行时内存区域的区别" tabindex="-1"><a class="header-anchor" href="#jmm-与-java-运行时内存区域的区别" aria-hidden="true">#</a> JMM 与 Java 运行时内存区域的区别</h3><p>前面提到了 JMM 和 Java 运行时内存区域的划分，这两者既有差别又有联系：</p><ul><li><p>区别</p><p>两者是不同的概念。JMM 是抽象的，他是用来描述一组规则，通过这个规则来控制各个变量的访问方式，围绕原子性、有序性、可见性等展开。而 Java 运行时内存的划分是具体的，是 JVM 运行 Java 程序时必要的内存划分。</p></li><li><p>联系</p><p>都存在私有数据区域和共享数据区域。一般来说，JMM 中的主存属于共享数据区域，包含了堆和方法区；同样，JMM 中的本地内存属于私有数据区域，包含了程序计数器、本地方法栈、虚拟机栈。</p></li></ul><p>总结一下：</p><p>Java 运行时内存区域描述的是在 JVM 运行时，如何将内存划分为不同的区域，并且每个区域的功能和工作机制。主要包括以下几个部分：</p>',6),B=a("li",null,"方法区：存储了每一个类的结构信息，如运行时常量池、字段和方法数据、构造方法和普通方法的字节码内容。",-1),x=a("li",null,"堆：几乎所有的对象实例以及数组都在这里分配内存。这是 Java 内存管理的主要区域。",-1),A=a("li",null,"栈：每一个线程有一个私有的栈，每一次方法调用都会创建一个新的栈帧，用于存储局部变量、操作数栈、动态链接、方法出口等信息。所有的栈帧都是在方法调用和方法执行完成之后创建和销毁的。",-1),y={href:"https://javabetter.cn/oo/native-method.html",target:"_blank",rel:"noopener noreferrer"},z=a("li",null,"程序计数器：每个线程都有一个独立的程序计数器，用于指示当前线程执行到了字节码的哪一行。",-1),C=r(`<p>Java 内存模型 (JMM) 主要针对的是多线程环境下，如何在主内存与工作内存之间安全地执行操作。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jmm-20230823200720.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>它涵盖的主题包括变量的可见性、指令重排、原子操作等，旨在解决由于多线程并发编程带来的一些问题。</p><ul><li>可见性：当一个线程修改了共享变量的值，这个新值对于其他线程来说可以立即知道。</li><li>原子性：一个或多个操作在整个过程中，不会被其他的线程或者操作所打断，这些操作是一个整体，要么都执行，要么都不执行。</li><li>有序性：程序执行的顺序按照代码的先后顺序执行的。</li></ul><h2 id="jmm-与重排序" tabindex="-1"><a class="header-anchor" href="#jmm-与重排序" aria-hidden="true">#</a> JMM 与重排序</h2><p>前面提到了，JMM 定义了多线程之间如何互相交互的规则，主要目的是为了解决由于编译器优化、处理器优化和缓存系统等导致的可见性、原子性和有序性。</p><p>那我们接下来就来聊聊重排序以及它所带来的顺序问题。</p><h3 id="为什么指令重排可以提高性能" tabindex="-1"><a class="header-anchor" href="#为什么指令重排可以提高性能" aria-hidden="true">#</a> 为什么指令重排可以提高性能？</h3><p>大家都知道，计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令做重排。</p><p>那可能有小伙伴就要问：<strong>为什么指令重排序可以提高性能？</strong></p><p>简单地说，每一个指令都会包含多个步骤，每个步骤可能使用不同的硬件。因此，<strong>流水线技术</strong>产生了，它的原理是指令 1 还没有执行完，就可以开始执行指令 2，而不用等到指令 1 执行结束后再执行指令 2，这样就大大提高了效率。</p><p>但是，流水线技术最害怕<strong>中断</strong>，恢复中断的代价是比较大的，所以我们要想尽办法不让流水线中断。指令重排就是减少中断的一种技术。</p><p>我们分析一下下面这段代码的执行情况：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>a <span class="token operator">=</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
d <span class="token operator">=</span> e <span class="token operator">-</span> f <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>先加载 b、c（<strong>注意，有可能先加载 b，也有可能先加载 c</strong>），但是在执行 <code>add(b,c)</code> 的时候，需要等待 b、c 装载结束才能继续执行，也就是需要增加停顿，那么后面的指令（加载 e 和 f）也会有停顿，这就降低了计算机的执行效率。</p><p>为了减少停顿，我们可以在加载完 b 和 c 后把 e 和 f 也加载了，然后再去执行 <code>add(b,c)</code>，这样做对程序（串行）是没有影响的，但却减少了停顿。</p><p>换句话说，既然 <code>add(b,c)</code> 需要停顿，那还不如去做一些有意义的事情（加载 e 和 f）。</p><p>综上所述，<strong>指令重排对于提高 CPU 性能十分必要，但也带来了乱序的问题。</strong></p><h3 id="重排序有哪几种" tabindex="-1"><a class="header-anchor" href="#重排序有哪几种" aria-hidden="true">#</a> 重排序有哪几种？</h3><p>指令重排一般分为以下三种：</p><ul><li><p><strong>编译器优化重排</strong>，编译器在<strong>不改变单线程程序语义</strong>的前提下，重新安排语句的执行顺序。</p></li><li><p><strong>指令并行重排</strong>，现代处理器采用了指令级并行技术来将多条指令重叠执行。如果<strong>不存在数据依赖性</strong>(即后一个执行的语句无需依赖前面执行的语句的结果)，处理器可以改变语句对应的机器指令的执行顺序。</p></li><li><p><strong>内存系统重排</strong>，由于处理器使用缓存和读写缓存冲区，这使得加载(load)和存储(store)操作看上去可能是在乱序执行，因为三级缓存的存在，导致内存与缓存的数据同步存在时间差。</p></li></ul><p><strong>指令重排可以保证串行语义一致，但是没有义务保证多线程间的语义也一致</strong>。所以在多线程下，指令重排序可能会导致一些问题。</p><h2 id="jmm-与顺序一致性模型" tabindex="-1"><a class="header-anchor" href="#jmm-与顺序一致性模型" aria-hidden="true">#</a> JMM 与顺序一致性模型</h2><p>当程序未正确同步的时候，就可能存在数据竞争。</p><blockquote><p>数据竞争：在一个线程中写一个变量，在另一个线程读同一个变量，并且写和读没有通过同步来排序。</p></blockquote><p>如果程序中包含了数据竞争，那么运行的结果往往充满了<strong>不确定性</strong>，比如读发生在了写之前，可能就会读到错误的值；如果一个线程能够正确同步，那么就不存在数据竞争。</p><p>Java 内存模型（JMM）对于正确同步多线程程序的内存一致性做了以下保证：<strong>如果程序是正确同步的，程序的执行将具有顺序一致性</strong>。即程序的执行结果和该程序在顺序一致性模型中执行的结果相同。</p>`,27),V={href:"https://javabetter.cn/thread/volatile.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://javabetter.cn/oo/final.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://javabetter.cn/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},q=r(`<p>如果我们开发者没有正确使用<code>volatile</code>、<code>final</code>、<code>synchronized</code> 等关键字，那么即便是使用了同步，JMM 也不会有内存可见性的保证，很可能会导致程序出错，并且不可重现，很难排查。</p><h3 id="什么是顺序一致性模型" tabindex="-1"><a class="header-anchor" href="#什么是顺序一致性模型" aria-hidden="true">#</a> 什么是顺序一致性模型？</h3><p>顺序一致性模型是一个<strong>理想化的理论参考模型</strong>，它为程序提供了极强的内存可见性保证。顺序一致性模型有两大特性：</p><ul><li>一个线程中的所有操作必须按照程序的顺序（即 Java 代码的顺序）来执行。</li><li>不管程序是否同步，所有线程都只能看到一个单一的操作执行顺序。即在顺序一致性模型中，每个操作必须是<strong>原子性的，且立刻对所有线程可见</strong>。</li></ul><p>为了理解这两个特性，我们举个例子，假设有两个线程 A 和 B 并发执行，线程 A 有 3 个操作，他们在程序中的顺序是 A1-&gt;A2-&gt;A3，线程 B 也有 3 个操作，B1-&gt;B2-&gt;B3。</p><p>假设<strong>正确使用了同步</strong>，A 线程的 3 个操作执行后释放锁，B 线程获取同一个锁。那么在<strong>顺序一致性模型</strong>中的执行效果如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-9ce5973e-6100-41e6-96b8-29ddb738e7f8.png" alt="正确同步图" tabindex="0" loading="lazy"><figcaption>正确同步图</figcaption></figure><p>操作的执行整体上有序，并且两个线程都只能看到这个执行顺序。</p><h3 id="jmm-为什么不保证顺序一致性" tabindex="-1"><a class="header-anchor" href="#jmm-为什么不保证顺序一致性" aria-hidden="true">#</a> JMM 为什么不保证顺序一致性？</h3><p>假设<strong>没有使用同步</strong>，那么在<strong>顺序一致性模型</strong>中的执行效果如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-6357c025-a6e0-4c89-939d-040e549fac12.png" alt="没有正确同步图" tabindex="0" loading="lazy"><figcaption>没有正确同步图</figcaption></figure><p>操作的执行整体上无序，但是两个线程都只能看到这个执行顺序。之所以可以得到这个保证，是因为顺序一致性模型中的<strong>每个操作必须立即对任意线程可见</strong>。</p><p><strong>但是 JMM 没有这样的保证。</strong></p><p>比如，在当前线程把写过的数据缓存在本地内存中，在没有刷新到主存之前，这个写操作仅对当前线程可见；从其他线程的角度来观察，这个写操作根本没有被当前线程所执行。</p><p>只有当前线程把本地内存中写过的数据刷新到主存之后，这个写操作才对其他线程可见。在这种情况下，当前线程和其他线程看到的执行顺序是不一样的。</p><p>在顺序一致性模型中，所有操作完全按照程序的顺序串行执行。但是 JMM 中，临界区内（同步块或同步方法中）的代码可以发生重排序（但不允许临界区内的代码“逃逸”到临界区之外，因为会破坏锁的内存语义）。</p><p>虽然线程 A 在临界区做了重排序，但是因为锁的特性，线程 B 无法观察到线程 A 在临界区的重排序。这种重排序既提高了执行效率，又没有改变程序的执行结果。</p><p>同时，JMM 会在退出临界区和进入临界区做特殊的处理，使得在临界区内程序获得与顺序一致性模型相同的内存视图。</p><p><strong>由此可见，JMM 的具体实现方针是：在不改变（正确同步的）程序执行结果的前提下，尽量为编译期和处理器的优化打开方便之门</strong>。</p><p>对于未同步的多线程，JMM 只提供<strong>最小安全性</strong>：线程读取到的值，要么是之前某个线程写入的值，要么是默认值，不会无中生有。</p><p>为了实现这个安全性，JVM 在堆上分配对象时，首先会对内存空间清零，然后才会在上面分配对象（这两个操作是同步的）。</p><p><strong>JMM 没有保证未同步程序的执行结果与该程序在顺序一致性中执行结果一致。因为如果要保证执行结果一致，那么 JMM 需要禁止大量的优化，对程序的执行性能会产生很大的影响。</strong></p><p>未同步程序在 JMM 和顺序一致性内存模型中的执行特性有如下差异：</p><ol><li>顺序一致性保证单线程内的操作会按程序的顺序执行；JMM 不保证单线程内的操作会按程序的顺序执行。（因为重排序，但是 JMM 保证单线程下的重排序不影响执行结果）</li><li>顺序一致性模型保证所有线程只能看到一致的操作执行顺序，而 JMM 不保证所有线程能看到一致的操作执行顺序。（因为 JMM 不保证所有操作立即可见）</li><li>顺序一致性模型保证对所有的内存读写操作都具有原子性，而 JMM 不保证对 64 位的 long 型和 double 型变量的写操作具有原子性。</li></ol><h2 id="jmm-与-happens-before" tabindex="-1"><a class="header-anchor" href="#jmm-与-happens-before" aria-hidden="true">#</a> JMM 与 happens-before</h2><p>一方面，我们开发者需要 JMM 提供一个强大的内存模型来编写代码；另一方面，编译器和处理器希望 JMM 对它们的束缚越少越好，这样它们就可以尽可能多的做优化来提高性能，希望的是一个弱的内存模型。</p><p>JMM 考虑了这两种需求，并且找到了平衡点，对编译器和处理器来说，<strong>只要不改变程序的执行结果（单线程程序和正确同步了的多线程程序），编译器和处理器怎么优化都行。</strong></p><p>对于我们开发者来说，JMM 提供了<strong>happens-before 规则</strong>（JSR-133 规范），满足了我们的诉求——<strong>简单易懂，并且提供了足够强的内存可见性保证。</strong> 换言之，我们开发者只要遵循 happens-before 规则，那么我们写的程序就能保证在 JMM 中具有强的内存可见性。</p><p>JMM 使用 happens-before 的概念来定制两个操作之间的执行顺序。这两个操作可以在一个线程内，也可以是不同的线程种。</p><p>happens-before 关系的定义如下：</p><ol><li>如果一个操作 happens-before 另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。</li><li><strong>两个操作之间存在 happens-before 关系，并不意味着 Java 平台的具体实现必须要按照 happens-before 关系指定的顺序来执行。如果重排序之后的执行结果，与按 happens-before 关系来执行的结果一致，那么 JMM 也允许这样的重排序。</strong></li></ol><p>happens-before 关系本质上和 as-if-serial 语义是一回事。</p><p>as-if-serial 语义保证单线程内重排序后的执行结果和程序代码本身应有的结果是一致的，happens-before 关系保证正确同步的多线程程序的执行结果不被重排序改变。</p><p>总之，<strong>如果操作 A happens-before 操作 B，那么操作 A 在内存上所做的操作对操作 B 都是可见的，不管它们在不在一个线程。</strong></p><h3 id="happens-before-关系有哪些" tabindex="-1"><a class="header-anchor" href="#happens-before-关系有哪些" aria-hidden="true">#</a> happens-before 关系有哪些？</h3><p>在 Java 中，有以下天然的 happens-before 关系：</p><ul><li>程序顺序规则：一个线程中的每一个操作，happens-before 于该线程中的任意后续操作。</li><li>监视器锁规则：对一个锁的解锁，happens-before 于随后对这个锁的加锁。</li><li>volatile 变量规则：对一个 volatile 域的写，happens-before 于任意后续对这个 volatile 域的读。</li><li>传递性：如果 A happens-before B，且 B happens-before C，那么 A happens-before C。</li><li>start 规则：如果线程 A 执行操作 <code>ThreadB.start()</code>启动线程 B，那么 A 线程的 <code>ThreadB.start()</code>操作 happens-before 于线程 B 中的任意操作。</li><li>join 规则：如果线程 A 执行操作 <code>ThreadB.join()</code>并成功返回，那么线程 B 中的任意操作 happens-before 于线程 A 从 <code>ThreadB.join()</code>操作成功返回。</li></ul><p>举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// A操作</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// B操作</span>
<span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span><span class="token comment">// C 操作</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上介绍的 happens-before 规则，假如只有一个线程，那么不难得出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1&gt; A happens-before B
2&gt; B happens-before C
3&gt; A happens-before C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，真正在执行指令的时候，其实 JVM 有可能对操作 A &amp; B 进行重排序，因为无论先执行 A 还是 B，他们都对对方是可见的，并且不影响执行结果。</p><p>如果这里发生了重排序，这在视觉上违背了 happens-before 原则，但是 JMM 是允许这样的重排序的。</p><p>所以，我们只关心 happens-before 规则，不用关心 JVM 到底是怎样执行的。只要确定操作 A happens-before 操作 B 就行了。</p><p>重排序有两类，JMM 对这两类重排序有不同的策略：</p><ul><li>会改变程序执行结果的重排序，比如 A -&gt; C，JMM 要求编译器和处理器都禁止这种重排序。</li><li>不会改变程序执行结果的重排序，比如 A -&gt; B，JMM 对编译器和处理器不做要求，允许这种重排序。</li></ul><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li>Java 内存模型（JMM）定义了 Java 程序中的变量、线程如何和主存以及工作内存进行交互的规则。它主要涉及到多线程环境下的共享变量可见性、指令重排等问题，是理解并发编程中的关键概念。</li><li>Java 内存模型（JMM）主要针对的是多线程环境下，如何在主内存与工作内存之间安全地执行操作。</li><li>Java 运行时内存区域描述的是在 JVM 运行时，如何将内存划分为不同的区域，并且每个区域的功能和工作机制。主要包括方法区、堆、栈、本地方法栈、程序计数器。</li><li>指令重排是为了提高 CPU 性能，但是可能会导致一些问题，比如多线程环境下的内存可见性问题。</li><li>happens-before 规则是 JMM 提供的强大的内存可见性保证，只要遵循 happens-before 规则，那么我们写的程序就能保证在 JMM 中具有强的内存可见性。</li></ul>`,48),w={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},L={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},S=a("hr",null,null,-1),N={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},E={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},I=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/wangzhe-thread-20230904125125.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function R(G,H){const n=s("ExternalLinkIcon");return p(),i("div",null,[d,c,a("p",null,[e("小二内心狂喜，不假思索地答道：『Java 内存主要分为五大块："),a("a",h,[e("堆、方法区、虚拟机栈、本地方法栈、PC 寄存器"),t(n)]),e("，balabala……』")]),g,b,a("p",null,[e("回到宿舍翻了翻《"),a("a",u,[e("二哥的 Java 进阶之路并发编程篇"),t(n)]),e("》，小二才恍然大悟，原来自己弄错了概念，面试官是想考察 JMM，但是小二一听到"),f,e("这几个关键字就开始背Java 运行时内存区域的八股文了，害，Java 内存模型(JMM)和 Java 运行时内存区域的区别可大着呢。")]),m,a("p",null,[e("所以，"),a("a",v,[e("内存可见性"),t(n)]),e("针对的是"),M,e("。")]),J,a("p",null,[e("Java 中的 "),a("a",_,[e("volatile 关键字"),t(n)]),e("可以保证多线程操作共享变量的可见性以及禁止指令重排序，"),a("a",j,[e("synchronized 关键字"),t(n)]),e("不仅保证可见性，同时也保证了原子性（互斥性）。")]),k,a("ul",null,[B,x,A,a("li",null,[e("本地方法栈：与栈类似，不过本地方法栈为 JVM 使用到的 "),a("a",y,[e("native 方法"),t(n)]),e("服务。")]),z]),C,a("p",null,[e("这里的同步包括使用 "),a("a",V,[e("volatile"),t(n)]),e("、"),a("a",P,[e("final"),t(n)]),e("、"),a("a",T,[e("synchronized"),t(n)]),e(" 等关键字实现的同步。")]),q,a("blockquote",null,[a("p",null,[e("编辑：沉默王二，编辑前的内容部分来源于朋友雷小帅的开源仓库 "),a("a",w,[e("Java 八股文"),t(n)]),e("，强烈推荐。部分内容来源于朋友小七萤火虫开源的这个仓库："),a("a",L,[e("深入浅出 Java 多线程"),t(n)]),e("，强烈推荐。")])]),S,a("p",null,[e("GitHub 上标星 10000+ 的开源知识库《"),a("a",N,[e("二哥的 Java 进阶之路"),t(n)]),e("》第二份 PDF 《"),a("a",E,[e("并发编程小册"),t(n)]),e("》终于来了！包括线程的基本概念和使用方法、Java的内存模型、sychronized、volatile、CAS、AQS、ReentrantLock、线程池、并发容器、ThreadLocal、生产者消费者模型等面试和开发必须掌握的内容，共计 15 万余字，200+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",U,[e("太赞了，二哥的并发编程进阶之路.pdf"),t(n)])]),a("p",null,[a("a",D,[e("加入二哥的编程星球"),t(n)]),e("，在星球的第二个置顶帖「"),a("a",F,[e("知识图谱"),t(n)]),e("」里就可以获取 PDF 版本。")]),I])}const O=o(l,[["render",R],["__file","jmm.html.vue"]]);export{O as default};
