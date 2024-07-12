const e=JSON.parse('{"key":"v-f63181d6","path":"/redis/xuebeng-chuantou-jichuan.html","title":"简单聊聊缓存雪崩、穿透、击穿","lang":"zh-CN","frontmatter":{"category":["数据库"],"tag":["Redis"],"description":"简单聊聊缓存雪崩、穿透、击穿 大家好，我是二哥呀。作为后端开发，我想缓存是大家再熟悉不过的东西了。 本文会介绍出现缓存雪崩、穿透和击穿的业务背景、解决方案和对业务可靠性处理。事先说明，最佳解决方案一定需要结合实际业务调整，不同业务的处理不完全相同 其实我在网上也看过不少关于缓存雪崩、穿透、击穿介绍，不知道是不是大家所做业务的不同，发现有不少小伙伴有以下疑问，比如： 加随机时间过期后，如果访问时间刚好就是加了随机时间后的数据，这样岂不是白加了随机时间？ 热点数据不过期，那岂不是有越来越多的脏数据？","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/redis/xuebeng-chuantou-jichuan.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"简单聊聊缓存雪崩、穿透、击穿"}],["meta",{"property":"og:description","content":"简单聊聊缓存雪崩、穿透、击穿 大家好，我是二哥呀。作为后端开发，我想缓存是大家再熟悉不过的东西了。 本文会介绍出现缓存雪崩、穿透和击穿的业务背景、解决方案和对业务可靠性处理。事先说明，最佳解决方案一定需要结合实际业务调整，不同业务的处理不完全相同 其实我在网上也看过不少关于缓存雪崩、穿透、击穿介绍，不知道是不是大家所做业务的不同，发现有不少小伙伴有以下疑问，比如： 加随机时间过期后，如果访问时间刚好就是加了随机时间后的数据，这样岂不是白加了随机时间？ 热点数据不过期，那岂不是有越来越多的脏数据？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简单聊聊缓存雪崩、穿透、击穿\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"1. 缓存雪崩","slug":"_1-缓存雪崩","link":"#_1-缓存雪崩","children":[{"level":3,"title":"1.1 业务场景举例","slug":"_1-1-业务场景举例","link":"#_1-1-业务场景举例","children":[]},{"level":3,"title":"1.2 解决方案","slug":"_1-2-解决方案","link":"#_1-2-解决方案","children":[]}]},{"level":2,"title":"2. 缓存击穿","slug":"_2-缓存击穿","link":"#_2-缓存击穿","children":[{"level":3,"title":"2.1 业务场景举例","slug":"_2-1-业务场景举例","link":"#_2-1-业务场景举例","children":[]},{"level":3,"title":"2.2 解决方案","slug":"_2-2-解决方案","link":"#_2-2-解决方案","children":[]},{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]},{"level":2,"title":"3. 缓存穿透","slug":"_3-缓存穿透","link":"#_3-缓存穿透","children":[{"level":3,"title":"3.1 业务场景举例","slug":"_3-1-业务场景举例","link":"#_3-1-业务场景举例","children":[]},{"level":3,"title":"3.2 解决方案","slug":"_3-2-解决方案","link":"#_3-2-解决方案","children":[]}]},{"level":2,"title":"4. 业务可靠性处理","slug":"_4-业务可靠性处理","link":"#_4-业务可靠性处理","children":[]}],"git":{"createdTime":1648690334000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":6.86,"words":2058},"filePathRelative":"redis/xuebeng-chuantou-jichuan.md","localizedDate":"2022年3月31日","excerpt":"<h1> 简单聊聊缓存雪崩、穿透、击穿</h1>\\n<p>大家好，我是二哥呀。作为后端开发，我想缓存是大家再熟悉不过的东西了。</p>\\n<p>本文会介绍<strong>出现缓存雪崩、穿透和击穿的业务背景、解决方案和对业务可靠性处理</strong>。事先说明，最佳解决方案一定需要结合实际业务调整，不同业务的处理不完全相同</p>\\n<p>其实我在网上也看过不少关于缓存雪崩、穿透、击穿介绍，不知道是不是大家所做业务的不同，发现有不少小伙伴有以下疑问，比如：</p>\\n<ul>\\n<li>加随机时间过期后，如果访问时间刚好就是加了随机时间后的数据，这样岂不是白加了随机时间？</li>\\n<li>热点数据不过期，那岂不是有越来越多的脏数据？</li>\\n</ul>","autoDesc":true}');export{e as data};
