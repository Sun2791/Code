const e=JSON.parse('{"key":"v-721cc88e","path":"/nio/moxing.html","title":"一文彻底理解Java IO模型（阻塞IO非阻塞IO/IO多路复用）","lang":"zh-CN","frontmatter":{"title":"一文彻底理解Java IO模型（阻塞IO非阻塞IO/IO多路复用）","shortTitle":"Java IO模型","category":["Java核心"],"tag":["Java NIO"],"description":"I/O 模型包括阻塞 I/O、非阻塞 I/O、多路复用、信号驱动和异步 I/O。阻塞 I/O 操作等待数据传输完成，非阻塞 I/O 操作不等待，可执行其他任务。多路复用适用于高并发和高吞吐量场景，信号驱动依赖信号通知应用程序。异步 I/O 由内核负责数据传输，应用程序无需等待。","author":"沉默王二","head":[["meta",{"name":"keywords","content":"IO模型, 阻塞IO, 非阻塞IO, 多路复用, 信号驱动, 异步IO,java,nio"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nio/moxing.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一文彻底理解Java IO模型（阻塞IO非阻塞IO/IO多路复用）"}],["meta",{"property":"og:description","content":"I/O 模型包括阻塞 I/O、非阻塞 I/O、多路复用、信号驱动和异步 I/O。阻塞 I/O 操作等待数据传输完成，非阻塞 I/O 操作不等待，可执行其他任务。多路复用适用于高并发和高吞吐量场景，信号驱动依赖信号通知应用程序。异步 I/O 由内核负责数据传输，应用程序无需等待。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java NIO"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底理解Java IO模型（阻塞IO非阻塞IO/IO多路复用）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[{"level":3,"title":"阻塞 IO 和非阻塞 IO","slug":"阻塞-io-和非阻塞-io","link":"#阻塞-io-和非阻塞-io","children":[]},{"level":3,"title":"内核空间和用户空间","slug":"内核空间和用户空间","link":"#内核空间和用户空间","children":[]},{"level":3,"title":"多路复用、信号驱动、异步 IO","slug":"多路复用、信号驱动、异步-io","link":"#多路复用、信号驱动、异步-io","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1661757542000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":11.55,"words":3466},"filePathRelative":"nio/moxing.md","localizedDate":"2022年8月29日","excerpt":"<h1> 12.6 Java IO模型</h1>\\n<p>Java 的 IO 分为两大类，一类是<a href=\\"https://javabetter.cn/io/shangtou.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">传统的 IO</a>（Blocking IO），一类是 <a href=\\"https://javabetter.cn/nio/nio-better-io.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">NIO</a> （New IO）。</p>\\n<p>传统的 IO 基于字节流和字符流，以阻塞式 IO 操作为主。常用的类有 FileInputStream、FileOutputStream、InputStreamReader、OutputStreamWriter 等。这些类在读写数据时，会导致执行线程阻塞，直到操作完成。</p>"}');export{e as data};
