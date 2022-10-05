import{_ as s,c as n,o as a,a as e}from"./app.f97f91c0.js";const D=JSON.parse('{"title":"promise","description":"","frontmatter":{},"headers":[],"relativePath":"articles/javascript/promise\u89E3\u8BFB.md"}'),l={name:"articles/javascript/promise\u89E3\u8BFB.md"},p=e(`<h1 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-hidden="true">#</a></h1><h5 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h5><p><a href="https://wangdoc.com/es6/promise.html" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0\u7684Promise\u5BF9\u8C61</a></p><h4 id="promise-\u7684\u542B\u4E49" tabindex="-1">Promise \u7684\u542B\u4E49 <a class="header-anchor" href="#promise-\u7684\u542B\u4E49" aria-hidden="true">#</a></h4><p>Promise \u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848,\u6BD4\u4F20\u7EDF\u7684\u89E3\u51B3\u65B9\u6848\u2014\u2014\u56DE\u8C03\u51FD\u6570\u548C\u4E8B\u4EF6\u2014\u2014\u66F4\u5408\u7406\u548C\u66F4\u5F3A\u5927\u3002 \u7B80\u5355\u6765\u8BF4promise\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\u91CC\u9762\u6709\u5404\u79CD\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C \u4ECE\u8BED\u6CD5\u4E0A\u8BF4\uFF0CPromise \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4ECE\u5B83\u53EF\u4EE5\u83B7\u53D6\u5F02\u6B65\u64CD\u4F5C\u7684\u6D88\u606F\u3002Promise \u63D0\u4F9B\u7EDF\u4E00\u7684 API\uFF0C\u5404\u79CD\u5F02\u6B65\u64CD\u4F5C\u90FD\u53EF\u4EE5\u7528\u540C\u6837\u7684\u65B9\u6CD5\u8FDB\u884C\u5904\u7406\u3002</p><h4 id="promise-\u7684\u72B6\u6001" tabindex="-1">Promise \u7684\u72B6\u6001 <a class="header-anchor" href="#promise-\u7684\u72B6\u6001" aria-hidden="true">#</a></h4><p>\uFF081\uFF09\u5BF9\u8C61\u7684\u72B6\u6001\u4E0D\u53D7\u5916\u754C\u5F71\u54CD\u3002Promise\u5BF9\u8C61\u4EE3\u8868\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6709\u4E09\u79CD\u72B6\u6001\uFF1Apending\uFF08\u8FDB\u884C\u4E2D\uFF09\u3001fulfilled\uFF08\u5DF2\u6210\u529F\uFF09\u548Crejected\uFF08\u5DF2\u5931\u8D25\uFF09\u3002\u53EA\u6709\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u51B3\u5B9A\u5F53\u524D\u662F\u54EA\u4E00\u79CD\u72B6\u6001\uFF0C\u4EFB\u4F55\u5176\u4ED6\u64CD\u4F5C\u90FD\u65E0\u6CD5\u6539\u53D8\u8FD9\u4E2A\u72B6\u6001\u3002\u8FD9\u4E5F\u662FPromise\u8FD9\u4E2A\u540D\u5B57\u7684\u7531\u6765\uFF0C\u5B83\u7684\u82F1\u8BED\u610F\u601D\u5C31\u662F\u201C\u627F\u8BFA\u201D\uFF0C\u8868\u793A\u5176\u4ED6\u624B\u6BB5\u65E0\u6CD5\u6539\u53D8\u3002 \uFF082\uFF09\u4E00\u65E6\u72B6\u6001\u6539\u53D8\uFF0C\u5C31\u4E0D\u4F1A\u518D\u53D8\uFF0C\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C\u3002Promise\u5BF9\u8C61\u7684\u72B6\u6001\u6539\u53D8\uFF0C\u53EA\u6709\u4E24\u79CD\u53EF\u80FD\uFF1A\u4ECEpending\u53D8\u4E3Afulfilled\u548C\u4ECEpending\u53D8\u4E3Arejected\u3002\u53EA\u8981\u8FD9\u4E24\u79CD\u60C5\u51B5\u53D1\u751F\uFF0C\u72B6\u6001\u5C31\u51DD\u56FA\u4E86\uFF0C\u4E0D\u4F1A\u518D\u53D8\u4E86\uFF0C\u4F1A\u4E00\u76F4\u4FDD\u6301\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u8FD9\u65F6\u5C31\u79F0\u4E3A resolved\uFF08\u5DF2\u5B9A\u578B\uFF09\u3002\u5982\u679C\u6539\u53D8\u5DF2\u7ECF\u53D1\u751F\u4E86\uFF0C\u4F60\u518D\u5BF9Promise\u5BF9\u8C61\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570\uFF0C\u4E5F\u4F1A\u7ACB\u5373\u5F97\u5230\u8FD9\u4E2A\u7ED3\u679C\u3002\u8FD9\u4E0E\u4E8B\u4EF6\uFF08Event\uFF09\u5B8C\u5168\u4E0D\u540C\uFF0C\u4E8B\u4EF6\u7684\u7279\u70B9\u662F\uFF0C\u5982\u679C\u4F60\u9519\u8FC7\u4E86\u5B83\uFF0C\u518D\u53BB\u76D1\u542C\uFF0C\u662F\u5F97\u4E0D\u5230\u7ED3\u679C\u7684\u3002</p><h4 id="promise\u7684\u7F3A\u70B9" tabindex="-1">Promise\u7684\u7F3A\u70B9 <a class="header-anchor" href="#promise\u7684\u7F3A\u70B9" aria-hidden="true">#</a></h4><p>\u9996\u5148\uFF0C\u65E0\u6CD5\u53D6\u6D88Promise\uFF0C\u4E00\u65E6\u65B0\u5EFA\u5B83\u5C31\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u65E0\u6CD5\u4E2D\u9014\u53D6\u6D88\u3002\u5176\u6B21\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570\uFF0CPromise\u5185\u90E8\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u4E0D\u4F1A\u53CD\u5E94\u5230\u5916\u90E8\u3002\u7B2C\u4E09\uFF0C\u5F53\u5904\u4E8Epending\u72B6\u6001\u65F6\uFF0C\u65E0\u6CD5\u5F97\u77E5\u76EE\u524D\u8FDB\u5C55\u5230\u54EA\u4E00\u4E2A\u9636\u6BB5\uFF08\u521A\u521A\u5F00\u59CB\u8FD8\u662F\u5373\u5C06\u5B8C\u6210\uFF09</p><h4 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h4><p>ES6 \u89C4\u5B9A\uFF0CPromise\u5BF9\u8C61\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u7528\u6765\u751F\u6210Promise\u5B9E\u4F8B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (/* \u5F02\u6B65\u64CD\u4F5C\u6210\u529F */){</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Promise\u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u4E24\u4E2A\u53C2\u6570\u5206\u522B\u662Fresolve\u548Creject\u3002\u5B83\u4EEC\u662F\u4E24\u4E2A\u51FD\u6570\uFF0C\u7531 JavaScript \u5F15\u64CE\u63D0\u4F9B\uFF0C\u4E0D\u7528\u81EA\u5DF1\u90E8\u7F72\u3002<br> resolve\u51FD\u6570\u7684\u4F5C\u7528\u662F\uFF0C\u5C06Promise\u5BF9\u8C61\u7684\u72B6\u6001\u4ECE\u201C\u672A\u5B8C\u6210\u201D\u53D8\u4E3A\u201C\u6210\u529F\u201D\uFF08\u5373\u4ECE pending \u53D8\u4E3A resolved\uFF09\uFF0C\u5728\u5F02\u6B65\u64CD\u4F5C\u6210\u529F\u65F6\u8C03\u7528\uFF0C\u5E76\u5C06\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u51FA\u53BB\uFF1Breject\u51FD\u6570\u7684\u4F5C\u7528\u662F\uFF0C\u5C06Promise\u5BF9\u8C61\u7684\u72B6\u6001\u4ECE\u201C\u672A\u5B8C\u6210\u201D\u53D8\u4E3A\u201C\u5931\u8D25\u201D\uFF08\u5373\u4ECE pending \u53D8\u4E3A rejected\uFF09\uFF0C\u5728\u5F02\u6B65\u64CD\u4F5C\u5931\u8D25\u65F6\u8C03\u7528\uFF0C\u5E76\u5C06\u5F02\u6B65\u64CD\u4F5C\u62A5\u51FA\u7684\u9519\u8BEF\uFF0C\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u51FA\u53BB<br> Promise\u5B9E\u4F8B\u751F\u6210\u4EE5\u540E\uFF0C\u53EF\u4EE5\u7528then\u65B9\u6CD5\u5206\u522B\u6307\u5B9Aresolved\u72B6\u6001\u548Crejected\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">promise.then(function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u6210\u529F\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">}, function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5931\u8D25\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E24\u4E2A\u51FD\u6570\u90FD\u662F\u53EF\u9009\u7684\uFF0C\u4E0D\u4E00\u5B9A\u8981\u63D0\u4F9B\u3002\u5B83\u4EEC\u90FD\u63A5\u53D7Promise\u5BF9\u8C61\u4F20\u51FA\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u3002</p><p>Promise \u65B0\u5EFA\u540E\u5C31\u4F1A\u7ACB\u5373\u6267\u884C\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;Promise&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;resolved.&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;Hi!&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">// Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">// Hi!</span></span>
<span class="line"><span style="color:#A6ACCD;">// resolved</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u5E38\u7528api" tabindex="-1">\u5E38\u7528Api <a class="header-anchor" href="#\u5E38\u7528api" aria-hidden="true">#</a></h4><h5 id="promise-prototype-then" tabindex="-1">Promise.prototype.then() <a class="header-anchor" href="#promise-prototype-then" aria-hidden="true">#</a></h5><p>Promise \u5B9E\u4F8B\u5177\u6709then\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0Cthen\u65B9\u6CD5\u662F\u5B9A\u4E49\u5728\u539F\u578B\u5BF9\u8C61Promise.prototype\u4E0A\u7684\u3002\u5B83\u7684\u4F5C\u7528\u662F\u4E3A Promise \u5B9E\u4F8B\u6DFB\u52A0\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u524D\u9762\u8BF4\u8FC7\uFF0Cthen\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662Fresolved\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Frejected\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5B83\u4EEC\u90FD\u662F\u53EF\u9009\u7684\u3002 then\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684Promise\u5B9E\u4F8B\uFF08\u6CE8\u610F\uFF0C\u4E0D\u662F\u539F\u6765\u90A3\u4E2APromise\u5B9E\u4F8B\uFF09\u3002\u56E0\u6B64\u53EF\u4EE5\u91C7\u7528\u94FE\u5F0F\u5199\u6CD5\uFF0C\u5373then\u65B9\u6CD5\u540E\u9762\u518D\u8C03\u7528\u53E6\u4E00\u4E2Athen\u65B9\u6CD5\u3002<br> \u793A\u4F8B\u4EE3\u7801:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">getJSON(&quot;/posts.json&quot;).then(function(json) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return json.post;</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(function(post) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4F7F\u7528then\u65B9\u6CD5\uFF0C\u4F9D\u6B21\u6307\u5B9A\u4E86\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5B8C\u6210\u4EE5\u540E\uFF0C\u4F1A\u5C06\u8FD4\u56DE\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u5165\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570<br> \u91C7\u7528\u94FE\u5F0F\u7684then\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E00\u7EC4\u6309\u7167\u6B21\u5E8F\u8C03\u7528\u7684\u56DE\u8C03\u51FD\u6570\u3002\u8FD9\u65F6\uFF0C\u524D\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6709\u53EF\u80FD\u8FD4\u56DE\u7684\u8FD8\u662F\u4E00\u4E2APromise\u5BF9\u8C61\uFF08\u5373\u6709\u5F02\u6B65\u64CD\u4F5C\uFF09\uFF0C\u8FD9\u65F6\u540E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5C31\u4F1A\u7B49\u5F85\u8BE5Promise\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u624D\u4F1A\u88AB\u8C03\u7528</p><p>\u793A\u4F8B\u4EE3\u7801:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">getJSON(&quot;/post/1.json&quot;).then(function(post) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return getJSON(post.commentURL);</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(function (comments) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;resolved: &quot;, comments);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, function (err){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;rejected: &quot;, err);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">getJSON(&quot;/post/1.json&quot;).then(</span></span>
<span class="line"><span style="color:#A6ACCD;">  post =&gt; getJSON(post.commentURL)</span></span>
<span class="line"><span style="color:#A6ACCD;">).then(</span></span>
<span class="line"><span style="color:#A6ACCD;">  comments =&gt; console.log(&quot;resolved: &quot;, comments),</span></span>
<span class="line"><span style="color:#A6ACCD;">  err =&gt; console.log(&quot;rejected: &quot;, err)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7B2C\u4E00\u4E2Athen\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u7684\u662F\u53E6\u4E00\u4E2APromise\u5BF9\u8C61\u3002\u8FD9\u65F6\uFF0C\u7B2C\u4E8C\u4E2Athen\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5C31\u4F1A\u7B49\u5F85\u8FD9\u4E2A\u65B0\u7684Promise\u5BF9\u8C61\u72B6\u6001\u53D1\u751F\u53D8\u5316\u3002\u5982\u679C\u53D8\u4E3Aresolved\uFF0C\u5C31\u8C03\u7528\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u72B6\u6001\u53D8\u4E3Arejected\uFF0C\u5C31\u8C03\u7528\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p><h5 id="promise-prototype-catch" tabindex="-1">Promise.prototype.catch() <a class="header-anchor" href="#promise-prototype-catch" aria-hidden="true">#</a></h5><p>Promise.prototype.catch()\u65B9\u6CD5\u662F.then(null, rejection)\u6216.then(undefined, rejection)\u7684\u522B\u540D\uFF0C\u7528\u4E8E\u6307\u5B9A\u53D1\u751F\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">getJSON(&#39;/posts.json&#39;).then(function(posts) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5904\u7406 getJSON \u548C \u524D\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u8FD0\u884C\u65F6\u53D1\u751F\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;\u53D1\u751F\u9519\u8BEF\uFF01&#39;, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CgetJSON()\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u5982\u679C\u8BE5\u5BF9\u8C61\u72B6\u6001\u53D8\u4E3Aresolved\uFF0C\u5219\u4F1A\u8C03\u7528then()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF1B\u5982\u679C\u5F02\u6B65\u64CD\u4F5C\u629B\u51FA\u9519\u8BEF\uFF0C\u72B6\u6001\u5C31\u4F1A\u53D8\u4E3Arejected\uFF0C\u5C31\u4F1A\u8C03\u7528catch()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5904\u7406\u8FD9\u4E2A\u9519\u8BEF\u3002\u53E6\u5916\uFF0Cthen()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u8FD0\u884C\u4E2D\u629B\u51FA\u9519\u8BEF\uFF0C\u4E5F\u4F1A\u88ABcatch()\u65B9\u6CD5\u6355\u83B7\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">p.then((val) =&gt; console.log(&#39;fulfilled:&#39;, val))</span></span>
<span class="line"><span style="color:#A6ACCD;">  .catch((err) =&gt; console.log(&#39;rejected&#39;, err));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">p.then((val) =&gt; console.log(&#39;fulfilled:&#39;, val))</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(null, (err) =&gt; console.log(&quot;rejected:&quot;, err));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B:<br> promise\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u5C31\u88ABcatch()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u5199\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">const promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  throw new Error(&#39;test&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">promise.catch(function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">// Error: test</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5199\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#A6ACCD;">const promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;test&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">promise.catch(function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5199\u6CD5\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;">const promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  reject(new Error(&#39;test&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">promise.catch(function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C Promise \u72B6\u6001\u5DF2\u7ECF\u53D8\u6210resolved\uFF0C\u518D\u629B\u51FA\u9519\u8BEF\u662F\u65E0\u6548\u7684\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(&#39;ok&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  throw new Error(&#39;test&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">promise</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(function(value) { console.log(value) })</span></span>
<span class="line"><span style="color:#A6ACCD;">  .catch(function(error) { console.log(error) });</span></span>
<span class="line"><span style="color:#A6ACCD;">// ok</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Promise \u4F1A\u5403\u6389\u9519\u8BEF \u610F\u601D\u5C31\u662F\u5185\u90E8\u7684\u9519\u8BEF\u4E0D\u5F71\u54CD\u5916\u90E8\u4EE3\u7801\u7684\u6267\u884C promise\u5C3D\u7BA1\u63D0\u793A\u9519\u8BEF\u4F46\u662F\u7A0B\u5E8F\u8FD8\u4F1A\u4E00\u76F4\u6267\u884C\u4E0B\u53BB,\u4E0D\u8FC7\u5728nodejs\u4E2D\u4E13\u95E8\u6709\u5904\u7406promise\u9519\u8BEF\u7684\u4E8B\u4EF6\uFF0CunhandledRejection\u4E8B\u4EF6\uFF0C\u4E13\u95E8\u76D1\u542C\u672A\u6355\u83B7\u7684reject\u9519\u8BEF\uFF0C\u4E0A\u9762\u7684\u811A\u672C\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u76D1\u542C\u51FD\u6570\u91CC\u9762\u629B\u51FA\u9519\u8BEF,\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u9519\u8BEF\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u62A5\u9519\u7684 Promise \u5B9E\u4F8B\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u4E86\u89E3\u53D1\u751F\u9519\u8BEF\u7684\u73AF\u5883\u4FE1\u606F\u3002\u4E0D\u8FC7\u6CE8\u610F\u7684\u662FNode \u6709\u8BA1\u5212\u5728\u672A\u6765\u5E9F\u9664unhandledRejection\u4E8B\u4EF6\u3002\u5982\u679C Promise \u5185\u90E8\u6709\u672A\u6355\u83B7\u7684\u9519\u8BEF\uFF0C\u4F1A\u76F4\u63A5\u7EC8\u6B62\u8FDB\u7A0B\uFF0C\u5E76\u4E14\u8FDB\u7A0B\u7684\u9000\u51FA\u7801\u4E0D\u4E3A 0\u3002</p><p>\u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const someAsyncThing = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0B\u9762\u4E00\u884C\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3Ax\u6CA1\u6709\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(x + 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">someAsyncThing().then(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;everything is great&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; { console.log(123) }, 2000);</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">// Uncaught (in promise) ReferenceError: x is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">// 123</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E00\u822C\u603B\u662F\u5EFA\u8BAE\uFF0CPromise \u5BF9\u8C61\u540E\u9762\u8981\u8DDFcatch()\u65B9\u6CD5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5904\u7406 Promise \u5185\u90E8\u53D1\u751F\u7684\u9519\u8BEF\u3002catch()\u65B9\u6CD5\u8FD4\u56DE\u7684\u8FD8\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u56E0\u6B64\u540E\u9762\u8FD8\u53EF\u4EE5\u63A5\u7740\u8C03\u7528then()\u65B9\u6CD5\u3002 \u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const someAsyncThing = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise(function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0B\u9762\u4E00\u884C\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3Ax\u6CA1\u6709\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(x + 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">someAsyncThing()</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;oh no&#39;, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;carry on&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">// oh no [ReferenceError: x is not defined]</span></span>
<span class="line"><span style="color:#A6ACCD;">// carry on</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E0A\u9762\u4EE3\u7801\u8FD0\u884C\u5B8Ccatch()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4F1A\u63A5\u7740\u8FD0\u884C\u540E\u9762\u90A3\u4E2Athen()\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002\u679C\u6CA1\u6709\u62A5\u9519\uFF0C\u5219\u4F1A\u8DF3\u8FC7catch()\u65B9\u6CD5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="promise-prototype-finally" tabindex="-1">Promise.prototype.finally() <a class="header-anchor" href="#promise-prototype-finally" aria-hidden="true">#</a></h5><p>finally()\u65B9\u6CD5\u7528\u4E8E\u6307\u5B9A\u4E0D\u7BA1 Promise \u5BF9\u8C61\u6700\u540E\u72B6\u6001\u5982\u4F55\uFF0C\u90FD\u4F1A\u6267\u884C\u7684\u64CD\u4F5C\u3002\u8BE5\u65B9\u6CD5\u662F ES2018 \u5F15\u5165\u6807\u51C6\u7684\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">promise</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(result =&gt; {\xB7\xB7\xB7})</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(error =&gt; {\xB7\xB7\xB7})</span></span>
<span class="line"><span style="color:#A6ACCD;">.finally(() =&gt; {\xB7\xB7\xB7});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u7BA1promise\u6700\u540E\u7684\u72B6\u6001\uFF0C\u5728\u6267\u884C\u5B8Cthen\u6216catch\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u4EE5\u540E\uFF0C\u90FD\u4F1A\u6267\u884Cfinally\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>finally\u672C\u8D28\u4E0A\u662Fthen\u65B9\u6CD5\u7684\u7279\u4F8B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">promise</span></span>
<span class="line"><span style="color:#A6ACCD;">.finally(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">promise</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(</span></span>
<span class="line"><span style="color:#A6ACCD;">  result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw error;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528finally\u65B9\u6CD5\uFF0C\u540C\u6837\u7684\u8BED\u53E5\u9700\u8981\u4E3A\u6210\u529F\u548C\u5931\u8D25\u4E24\u79CD\u60C5\u51B5\u5404\u5199\u4E00\u6B21\u3002\u6709\u4E86finally\u65B9\u6CD5\uFF0C\u5219\u53EA\u9700\u8981\u5199\u4E00\u6B21 Promise.prototype.finally\u7684js\u5B9E\u73B0\u4EE3\u7801</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.prototype.finally = function (callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let P = this.constructor;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return this.then(</span></span>
<span class="line"><span style="color:#A6ACCD;">    value  =&gt; P.resolve(callback()).then(() =&gt; value),</span></span>
<span class="line"><span style="color:#A6ACCD;">    reason =&gt; P.resolve(callback()).then(() =&gt; { throw reason })</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>finally\u65B9\u6CD5\u603B\u662F\u4F1A\u8FD4\u56DE\u539F\u6765\u7684\u503C\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// resolve \u7684\u503C\u662F undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.resolve(2).then(() =&gt; {}, () =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// resolve \u7684\u503C\u662F 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.resolve(2).finally(() =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// reject \u7684\u503C\u662F undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.reject(3).then(() =&gt; {}, () =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// reject \u7684\u503C\u662F 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.reject(3).finally(() =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="promise-all" tabindex="-1">Promise.all() <a class="header-anchor" href="#promise-all" aria-hidden="true">#</a></h5><p>Promise.all()\u65B9\u6CD5\u7528\u4E8E\u5C06\u591A\u4E2A Promise \u5B9E\u4F8B\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.all([p1, p2, p3]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CPromise.all()\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0Cp1\u3001p2\u3001p3\u90FD\u662F Promise \u5B9E\u4F8B\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5C31\u4F1A\u5148\u8C03\u7528\u4E0B\u9762\u8BB2\u5230\u7684Promise.resolve\u65B9\u6CD5\uFF0C\u5C06\u53C2\u6570\u8F6C\u4E3A Promise \u5B9E\u4F8B\uFF0C\u518D\u8FDB\u4E00\u6B65\u5904\u7406\u3002\u53E6\u5916\uFF0CPromise.all()\u65B9\u6CD5\u7684\u53C2\u6570\u53EF\u4EE5\u4E0D\u662F\u6570\u7EC4\uFF0C\u4F46\u5FC5\u987B\u5177\u6709 Iterator \u63A5\u53E3\uFF0C\u4E14\u8FD4\u56DE\u7684\u6BCF\u4E2A\u6210\u5458\u90FD\u662F Promise \u5B9E\u4F8B\u3002</p><p>p\u7684\u72B6\u6001\u7531p1\u3001p2\u3001p3\u51B3\u5B9A\uFF0C\u5206\u6210\u4E24\u79CD\u60C5\u51B5\u3002 \uFF081\uFF09\u53EA\u6709p1\u3001p2\u3001p3\u7684\u72B6\u6001\u90FD\u53D8\u6210fulfilled\uFF0Cp\u7684\u72B6\u6001\u624D\u4F1A\u53D8\u6210fulfilled\uFF0C\u6B64\u65F6p1\u3001p2\u3001p3\u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F20\u9012\u7ED9p\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\uFF082\uFF09\u53EA\u8981p1\u3001p2\u3001p3\u4E4B\u4E2D\u6709\u4E00\u4E2A\u88ABrejected\uFF0Cp\u7684\u72B6\u6001\u5C31\u53D8\u6210rejected\uFF0C\u6B64\u65F6\u7B2C\u4E00\u4E2A\u88ABreject\u7684\u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\uFF0C\u4F1A\u4F20\u9012\u7ED9p\u7684\u56DE\u8C03\u51FD\u6570\u3002 \u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const databasePromise = connectDatabase();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const booksPromise = databasePromise</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(findAllBooks);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const userPromise = databasePromise</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(getCurrentUser);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all([</span></span>
<span class="line"><span style="color:#A6ACCD;">  booksPromise,</span></span>
<span class="line"><span style="color:#A6ACCD;">  userPromise</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(([books, user]) =&gt; pickTopRecommendations(books, user));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CbooksPromise\u548CuserPromise\u662F\u4E24\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u53EA\u6709\u7B49\u5230\u5B83\u4EEC\u7684\u7ED3\u679C\u90FD\u8FD4\u56DE\u4E86\uFF0C\u624D\u4F1A\u89E6\u53D1pickTopRecommendations\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u6CE8\u610F\uFF0C\u5982\u679C\u4F5C\u4E3A\u53C2\u6570\u7684 Promise \u5B9E\u4F8B\uFF0C\u81EA\u5DF1\u5B9A\u4E49\u4E86catch\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B83\u4E00\u65E6\u88ABrejected\uFF0C\u5E76\u4E0D\u4F1A\u89E6\u53D1Promise.all()\u7684catch\u65B9\u6CD5\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(&#39;hello&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(result =&gt; result)</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(e =&gt; e);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const p2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  throw new Error(&#39;\u62A5\u9519\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(result =&gt; result)</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(e =&gt; e);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all([p1, p2])</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(result =&gt; console.log(result))</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(e =&gt; console.log(e));</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&quot;hello&quot;, Error: \u62A5\u9519\u4E86]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cp1\u4F1Aresolved\uFF0Cp2\u9996\u5148\u4F1Arejected\uFF0C\u4F46\u662Fp2\u6709\u81EA\u5DF1\u7684catch\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\uFF0Cp2\u6307\u5411\u7684\u5B9E\u9645\u4E0A\u662F\u8FD9\u4E2A\u5B9E\u4F8B\u3002\u8BE5\u5B9E\u4F8B\u6267\u884C\u5B8Ccatch\u65B9\u6CD5\u540E\uFF0C\u4E5F\u4F1A\u53D8\u6210resolved\uFF0C\u5BFC\u81F4Promise.all()\u65B9\u6CD5\u53C2\u6570\u91CC\u9762\u7684\u4E24\u4E2A\u5B9E\u4F8B\u90FD\u4F1Aresolved\uFF0C\u56E0\u6B64\u4F1A\u8C03\u7528then\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u800C\u4E0D\u4F1A\u8C03\u7528catch\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h5 id="promise-race" tabindex="-1">Promise.race() <a class="header-anchor" href="#promise-race" aria-hidden="true">#</a></h5><p>Promise.race()\u65B9\u6CD5\u540C\u6837\u662F\u5C06\u591A\u4E2A Promise \u5B9E\u4F8B\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.race([p1, p2, p3]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53EA\u8981p1\u3001p2\u3001p3\u4E4B\u4E2D\u6709\u4E00\u4E2A\u5B9E\u4F8B\u7387\u5148\u6539\u53D8\u72B6\u6001\uFF0Cp\u7684\u72B6\u6001\u5C31\u8DDF\u7740\u6539\u53D8\u3002\u90A3\u4E2A\u7387\u5148\u6539\u53D8\u7684 Promise \u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\uFF0C\u5C31\u4F20\u9012\u7ED9p\u7684\u56DE\u8C03\u51FD\u6570\u3002 \u610F\u601D\u5C31\u662F\u7ADE\u901F\uFF0C\u770B\u54EA\u4E2A\u8DD1\u5F97\u5FEB \u8DD1\u5F97\u5FEB\u7684\u4F5C\u4E3Ap\u7684\u56DE\u8C03\u51FD\u6570 Promise.race()\u65B9\u6CD5\u7684\u53C2\u6570\u4E0EPromise.all()\u65B9\u6CD5\u4E00\u6837\uFF0C\u5982\u679C\u4E0D\u662F Promise \u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u5148\u8C03\u7528\u4E0B\u9762\u8BB2\u5230\u7684Promise.resolve()\u65B9\u6CD5\uFF0C\u5C06\u53C2\u6570\u8F6C\u4E3A Promise \u5B9E\u4F8B\uFF0C\u518D\u8FDB\u4E00\u6B65\u5904\u7406 \u793A\u4F8B: \u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u83B7\u5F97\u7ED3\u679C\uFF0C\u5C31\u5C06 Promise \u7684\u72B6\u6001\u53D8\u4E3Areject\uFF0C\u5426\u5219\u53D8\u4E3Aresolve\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.race([</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/resource-that-may-take-a-while&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise(function (resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; reject(new Error(&#39;request timeout&#39;)), 5000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(console.log)</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(console.error);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C 5 \u79D2\u4E4B\u5185fetch\u65B9\u6CD5\u65E0\u6CD5\u8FD4\u56DE\u7ED3\u679C\uFF0C\u53D8\u91CFp\u7684\u72B6\u6001\u5C31\u4F1A\u53D8\u4E3Arejected\uFF0C\u4ECE\u800C\u89E6\u53D1catch\u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h5 id="promise-allsettled" tabindex="-1">Promise.allSettled() <a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a></h5><p>Promise.all()\u65B9\u6CD5\u53EA\u9002\u5408\u6240\u6709\u5F02\u6B65\u64CD\u4F5C\u90FD\u6210\u529F\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u64CD\u4F5C\u5931\u8D25\uFF0C\u5C31\u65E0\u6CD5\u6EE1\u8DB3\u8981\u6C42 Promise.all()\u53EF\u4EE5\u786E\u5B9A\u6240\u6709\u8BF7\u6C42\u90FD\u6210\u529F\u4E86\uFF0C\u4F46\u662F\u53EA\u8981\u6709\u4E00\u4E2A\u8BF7\u6C42\u5931\u8D25\uFF0C\u5B83\u5C31\u4F1A\u62A5\u9519\uFF0C\u800C\u4E0D\u7BA1\u53E6\u5916\u7684\u8BF7\u6C42\u662F\u5426\u7ED3\u675F ES2020 \u5F15\u5165\u4E86Promise.allSettled()\u65B9\u6CD5\uFF0C\u7528\u6765\u786E\u5B9A\u4E00\u7EC4\u5F02\u6B65\u64CD\u4F5C\u662F\u5426\u90FD\u7ED3\u675F\u4E86\uFF08\u4E0D\u7BA1\u6210\u529F\u6216\u5931\u8D25\uFF09\u3002\u6240\u4EE5\uFF0C\u5B83\u7684\u540D\u5B57\u53EB\u505A\u201DSettled\u201C\uFF0C\u5305\u542B\u4E86\u201Dfulfilled\u201C\u548C\u201Drejected\u201C\u4E24\u79CD\u60C5\u51B5 Promise.allSettled()\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E2A\u6210\u5458\u90FD\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Promise \u5BF9\u8C61\u3002\u53EA\u6709\u7B49\u5230\u53C2\u6570\u6570\u7EC4\u7684\u6240\u6709 Promise \u5BF9\u8C61\u90FD\u53D1\u751F\u72B6\u6001\u53D8\u66F4\uFF08\u4E0D\u7BA1\u662Ffulfilled\u8FD8\u662Frejected\uFF09\uFF0C\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61\u624D\u4F1A\u53D1\u751F\u72B6\u6001\u53D8\u66F4 \u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const promises = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/api-1&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/api-2&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/api-3&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">await Promise.allSettled(promises);</span></span>
<span class="line"><span style="color:#A6ACCD;">removeLoadingIndicator();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u6570\u7EC4promises\u5305\u542B\u4E86\u4E09\u4E2A\u8BF7\u6C42\uFF0C\u53EA\u6709\u7B49\u5230\u8FD9\u4E09\u4E2A\u8BF7\u6C42\u90FD\u7ED3\u675F\u4E86\uFF08\u4E0D\u7BA1\u8BF7\u6C42\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF09\uFF0CremoveLoadingIndicator()\u624D\u4F1A\u6267\u884C\u3002</p><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u65B0\u7684 Promise \u5B9E\u4F8B\uFF0C\u4E00\u65E6\u53D1\u751F\u72B6\u6001\u53D8\u66F4\uFF0C\u72B6\u6001\u603B\u662Ffulfilled\uFF0C\u4E0D\u4F1A\u53D8\u6210rejected\u3002\u72B6\u6001\u53D8\u6210fulfilled\u540E\uFF0C\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u63A5\u6536\u5230\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u6570\u7EC4\u7684\u6BCF\u4E2A\u6210\u5458\u5BF9\u5E94\u524D\u9762\u6570\u7EC4\u7684\u6BCF\u4E2A Promise \u5BF9\u8C61\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const resolved = Promise.resolve(42);</span></span>
<span class="line"><span style="color:#A6ACCD;">const rejected = Promise.reject(-1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const allSettledPromise = Promise.allSettled([resolved, rejected]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">allSettledPromise.then(function (results) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(results);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">// [</span></span>
<span class="line"><span style="color:#A6ACCD;">//    { status: &#39;fulfilled&#39;, value: 42 },</span></span>
<span class="line"><span style="color:#A6ACCD;">//    { status: &#39;rejected&#39;, reason: -1 }</span></span>
<span class="line"><span style="color:#A6ACCD;">// ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CPromise.allSettled()\u7684\u8FD4\u56DE\u503CallSettledPromise\uFF0C\u72B6\u6001\u53EA\u53EF\u80FD\u53D8\u6210fulfilled\u3002\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u5230\u7684\u53C2\u6570\u662F\u6570\u7EC4results\u3002\u8BE5\u6570\u7EC4\u7684\u6BCF\u4E2A\u6210\u5458\u90FD\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u5E94\u4F20\u5165Promise.allSettled()\u7684\u6570\u7EC4\u91CC\u9762\u7684\u4E24\u4E2A Promise \u5BF9\u8C61\u3002 results\u7684\u6BCF\u4E2A\u6210\u5458\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u683C\u5F0F\u662F\u56FA\u5B9A\u7684\uFF0C\u5BF9\u5E94\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5F02\u6B65\u64CD\u4F5C\u6210\u529F\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">{status: &#39;fulfilled&#39;, value: value}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F02\u6B65\u64CD\u4F5C\u5931\u8D25\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">{status: &#39;rejected&#39;, reason: reason}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6210\u5458\u5BF9\u8C61\u7684status\u5C5E\u6027\u7684\u503C\u53EA\u53EF\u80FD\u662F\u5B57\u7B26\u4E32fulfilled\u6216\u5B57\u7B26\u4E32rejected\uFF0C\u7528\u6765\u533A\u5206\u5F02\u6B65\u64CD\u4F5C\u662F\u6210\u529F\u8FD8\u662F\u5931\u8D25\u3002\u5982\u679C\u662F\u6210\u529F\uFF08fulfilled\uFF09\uFF0C\u5BF9\u8C61\u4F1A\u6709value\u5C5E\u6027\uFF0C\u5982\u679C\u662F\u5931\u8D25\uFF08rejected\uFF09\uFF0C\u4F1A\u6709reason\u5C5E\u6027\uFF0C\u5BF9\u5E94\u4E24\u79CD\u72B6\u6001\u65F6\u524D\u9762\u5F02\u6B65\u64CD\u4F5C\u7684\u8FD4\u56DE\u503C\u3002</p><p>\u8FD4\u56DE\u503C\u7684\u7528\u6CD5\u4F8B\u5B50:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const promises = [ fetch(&#39;index.html&#39;), fetch(&#39;https://does-not-exist/&#39;) ];</span></span>
<span class="line"><span style="color:#A6ACCD;">const results = await Promise.allSettled(promises);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FC7\u6EE4\u51FA\u6210\u529F\u7684\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">const successfulPromises = results.filter(p =&gt; p.status === &#39;fulfilled&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FC7\u6EE4\u51FA\u5931\u8D25\u7684\u8BF7\u6C42\uFF0C\u5E76\u8F93\u51FA\u539F\u56E0</span></span>
<span class="line"><span style="color:#A6ACCD;">const errors = results</span></span>
<span class="line"><span style="color:#A6ACCD;">  .filter(p =&gt; p.status === &#39;rejected&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .map(p =&gt; p.reason);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="promise-any" tabindex="-1">Promise.any() <a class="header-anchor" href="#promise-any" aria-hidden="true">#</a></h5><p>ES2021 \u5F15\u5165\u4E86Promise.any()\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u7EC4 Promise \u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u8FD4\u56DE\u3002 \u53EA\u8981\u53C2\u6570\u5B9E\u4F8B\u6709\u4E00\u4E2A\u53D8\u6210fulfilled\u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210fulfilled\u72B6\u6001\uFF1B\u5982\u679C\u6240\u6709\u53C2\u6570\u5B9E\u4F8B\u90FD\u53D8\u6210rejected\u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210rejected\u72B6\u6001\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.any([</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;https://v8.dev/&#39;).then(() =&gt; &#39;home&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;https://v8.dev/blog&#39;).then(() =&gt; &#39;blog&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;https://v8.dev/docs&#39;).then(() =&gt; &#39;docs&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">]).then((first) =&gt; {  // \u53EA\u8981\u6709\u4E00\u4E2A fetch() \u8BF7\u6C42\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(first);</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch((error) =&gt; { // \u6240\u6709\u4E09\u4E2A fetch() \u5168\u90E8\u8BF7\u6C42\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Promise.any()\u8DDFPromise.race()\u65B9\u6CD5\u5F88\u50CF\uFF0C\u53EA\u6709\u4E00\u70B9\u4E0D\u540C\uFF0C\u5C31\u662FPromise.any()\u4E0D\u4F1A\u56E0\u4E3A\u67D0\u4E2A Promise \u53D8\u6210rejected\u72B6\u6001\u800C\u7ED3\u675F\uFF0C\u5FC5\u987B\u7B49\u5230\u6240\u6709\u53C2\u6570 Promise \u53D8\u6210rejected\u72B6\u6001\u624D\u4F1A\u7ED3\u675F\u3002</p><p>\u4E0B\u9762\u662FPromise()\u4E0Eawait\u547D\u4EE4\u7ED3\u5408\u4F7F\u7528\u7684\u4F8B\u5B50\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const promises = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/endpoint-a&#39;).then(() =&gt; &#39;a&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/endpoint-b&#39;).then(() =&gt; &#39;b&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  fetch(&#39;/endpoint-c&#39;).then(() =&gt; &#39;c&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const first = await Promise.any(promises);</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(first);</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CPromise.any()\u65B9\u6CD5\u7684\u53C2\u6570\u6570\u7EC4\u5305\u542B\u4E09\u4E2A Promise \u64CD\u4F5C\u3002\u5176\u4E2D\u53EA\u8981\u6709\u4E00\u4E2A\u53D8\u6210fulfilled\uFF0CPromise.any()\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61\u5C31\u53D8\u6210fulfilled\u3002\u5982\u679C\u6240\u6709\u4E09\u4E2A\u64CD\u4F5C\u90FD\u53D8\u6210rejected\uFF0C\u90A3\u4E48await\u547D\u4EE4\u5C31\u4F1A\u629B\u51FA\u9519\u8BEF\u3002</p><p>Promise.any()\u629B\u51FA\u7684\u9519\u8BEF\u662F\u4E00\u4E2A AggregateError \u5B9E\u4F8B\uFF08\u8BE6\u89C1\u300A\u5BF9\u8C61\u7684\u6269\u5C55\u300B\u4E00\u7AE0\uFF09\uFF0C\u8FD9\u4E2A AggregateError \u5B9E\u4F8B\u5BF9\u8C61\u7684errors\u5C5E\u6027\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u4E86\u6240\u6709\u6210\u5458\u7684\u9519\u8BEF\u3002 \u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var resolved = Promise.resolve(42);</span></span>
<span class="line"><span style="color:#A6ACCD;">var rejected = Promise.reject(-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">var alsoRejected = Promise.reject(Infinity);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.any([resolved, rejected, alsoRejected]).then(function (result) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(result); // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.any([rejected, alsoRejected]).catch(function (results) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(results instanceof AggregateError); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(results.errors); // [-1, Infinity]</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="promise-resolve" tabindex="-1">Promise.resolve() <a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a></h5><p>\u6709\u65F6\u9700\u8981\u5C06\u73B0\u6709\u5BF9\u8C61\u8F6C\u4E3A Promise \u5BF9\u8C61\uFF0CPromise.resolve()\u65B9\u6CD5\u5C31\u8D77\u5230\u8FD9\u4E2A\u4F5C\u7528\u3002 \u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const jsPromise = Promise.resolve($.ajax(&#39;/whatever.json&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06 jQuery \u751F\u6210\u7684deferred\u5BF9\u8C61\uFF0C\u8F6C\u4E3A\u4E00\u4E2A\u65B0\u7684 Promise \u5BF9\u8C61\u3002 Promise.resolve()\u7B49\u4EF7\u4E8E\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.resolve(&#39;foo&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B49\u4EF7\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">new Promise(resolve =&gt; resolve(&#39;foo&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Promise.resolve()\u65B9\u6CD5\u7684\u53C2\u6570\u5206\u6210\u56DB\u79CD\u60C5\u51B5\u3002</p><p>\uFF081\uFF09\u53C2\u6570\u662F\u4E00\u4E2A Promise \u5B9E\u4F8B</p><p>\u5982\u679C\u53C2\u6570\u662F Promise \u5B9E\u4F8B\uFF0C\u90A3\u4E48Promise.resolve\u5C06\u4E0D\u505A\u4EFB\u4F55\u4FEE\u6539\u3001\u539F\u5C01\u4E0D\u52A8\u5730\u8FD4\u56DE\u8FD9\u4E2A\u5B9E\u4F8B\u3002</p><p>\uFF082\uFF09\u53C2\u6570\u662F\u4E00\u4E2Athenable\u5BF9\u8C61</p><p>thenable\u5BF9\u8C61\u6307\u7684\u662F\u5177\u6709then\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u5BF9\u8C61\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let thenable = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  then: function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(42);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Promise.resolve()\u65B9\u6CD5\u4F1A\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u8F6C\u4E3A Promise \u5BF9\u8C61\uFF0C\u7136\u540E\u5C31\u7ACB\u5373\u6267\u884Cthenable\u5BF9\u8C61\u7684then()\u65B9\u6CD5\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let thenable = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  then: function(resolve, reject) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(42);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p1 = Promise.resolve(thenable);</span></span>
<span class="line"><span style="color:#A6ACCD;">p1.then(function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(value);  // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\uFF083\uFF09\u53C2\u6570\u4E0D\u662F\u5177\u6709then()\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u6216\u6839\u672C\u5C31\u4E0D\u662F\u5BF9\u8C61</p><p>\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A\u539F\u59CB\u503C\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u4E0D\u5177\u6709then()\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u5219Promise.resolve()\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Promise \u5BF9\u8C61\uFF0C\u72B6\u6001\u4E3Aresolved\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.resolve(&#39;Hello&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p.then(function (s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(s)</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">// Hello</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u751F\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5BF9\u8C61\u7684\u5B9E\u4F8Bp\u3002\u7531\u4E8E\u5B57\u7B26\u4E32Hello\u4E0D\u5C5E\u4E8E\u5F02\u6B65\u64CD\u4F5C\uFF08\u5224\u65AD\u65B9\u6CD5\u662F\u5B57\u7B26\u4E32\u5BF9\u8C61\u4E0D\u5177\u6709 then \u65B9\u6CD5\uFF09\uFF0C\u8FD4\u56DE Promise \u5B9E\u4F8B\u7684\u72B6\u6001\u4ECE\u4E00\u751F\u6210\u5C31\u662Fresolved\uFF0C\u6240\u4EE5\u56DE\u8C03\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\u3002Promise.resolve()\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u4F1A\u540C\u65F6\u4F20\u7ED9\u56DE\u8C03\u51FD\u6570\u3002</p><p>\uFF084\uFF09\u4E0D\u5E26\u6709\u4EFB\u4F55\u53C2\u6570</p><p>Promise.resolve()\u65B9\u6CD5\u5141\u8BB8\u8C03\u7528\u65F6\u4E0D\u5E26\u53C2\u6570\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2Aresolved\u72B6\u6001\u7684 Promise \u5BF9\u8C61\u3002</p><p>\u6240\u4EE5\uFF0C\u5982\u679C\u5E0C\u671B\u5F97\u5230\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u6BD4\u8F83\u65B9\u4FBF\u7684\u65B9\u6CD5\u5C31\u662F\u76F4\u63A5\u8C03\u7528Promise.resolve()\u65B9\u6CD5\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p.then(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7ACB\u5373resolve()\u7684 Promise \u5BF9\u8C61\uFF0C\u662F\u5728\u672C\u8F6E\u201C\u4E8B\u4EF6\u5FAA\u73AF\u201D\uFF08event loop\uFF09\u7684\u7ED3\u675F\u65F6\u6267\u884C\uFF0C\u800C\u4E0D\u662F\u5728\u4E0B\u4E00\u8F6E\u201C\u4E8B\u4EF6\u5FAA\u73AF\u201D\u7684\u5F00\u59CB\u65F6\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">setTimeout(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;three&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.resolve().then(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;two&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;one&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// one</span></span>
<span class="line"><span style="color:#A6ACCD;">// two</span></span>
<span class="line"><span style="color:#A6ACCD;">// three</span></span>
<span class="line"><span style="color:#A6ACCD;">//setTimeout(fn, 0)\u5728\u4E0B\u4E00\u8F6E\u201C\u4E8B\u4EF6\u5FAA\u73AF\u201D\u5F00\u59CB\u65F6\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">//Promise.resolve()\u5728\u672C\u8F6E\u201C\u4E8B\u4EF6\u5FAA\u73AF\u201D\u7ED3\u675F\u65F6\u6267\u884C\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">//console.log(&#39;one&#39;)\u5219\u662F\u7ACB\u5373\u6267\u884C1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="promise-reject" tabindex="-1">Promise.reject() <a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a></h5><p>Promise.reject(reason)\u65B9\u6CD5\u4E5F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\uFF0C\u8BE5\u5B9E\u4F8B\u7684\u72B6\u6001\u4E3Arejected\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const p = Promise.reject(&#39;\u51FA\u9519\u4E86&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">const p = new Promise((resolve, reject) =&gt; reject(&#39;\u51FA\u9519\u4E86&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p.then(null, function (s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(s)</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u51FA\u9519\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u751F\u6210\u4E00\u4E2A Promise \u5BF9\u8C61\u7684\u5B9E\u4F8Bp\uFF0C\u72B6\u6001\u4E3Arejected\uFF0C\u56DE\u8C03\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\u3002</p><p>Promise.reject()\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u4F1A\u539F\u5C01\u4E0D\u52A8\u5730\u4F5C\u4E3Areject\u7684\u7406\u7531\uFF0C\u53D8\u6210\u540E\u7EED\u65B9\u6CD5\u7684\u53C2\u6570\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.reject(&#39;\u51FA\u9519\u4E86&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(e =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(e === &#39;\u51FA\u9519\u4E86&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="promise-try" tabindex="-1">Promise.try() <a class="header-anchor" href="#promise-try" aria-hidden="true">#</a></h4><p>\u8BA9\u540C\u6B65\u51FD\u6570\u540C\u6B65\u6267\u884C\uFF0C\u5F02\u6B65\u51FD\u6570\u5F02\u6B65\u6267\u884C\uFF0C\u5E76\u4E14\u8BA9\u5B83\u4EEC\u5177\u6709\u7EDF\u4E00\u7684 API</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const f = () =&gt; console.log(&#39;now&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.try(f);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;next&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// now</span></span>
<span class="line"><span style="color:#A6ACCD;">// next</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function getUsername(userId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return database.users.get({id: userId})</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(function(user) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return user.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cdatabase.users.get()\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u5982\u679C\u629B\u51FA\u5F02\u6B65\u9519\u8BEF\uFF0C\u53EF\u4EE5\u7528catch\u65B9\u6CD5\u6355\u83B7\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u5199\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">database.users.get({id: userId})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(...)</span></span>
<span class="line"><span style="color:#A6ACCD;">.catch(...)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662Fdatabase.users.get()\u53EF\u80FD\u8FD8\u4F1A\u629B\u51FA\u540C\u6B65\u9519\u8BEF\uFF08\u6BD4\u5982\u6570\u636E\u5E93\u8FDE\u63A5\u9519\u8BEF\uFF0C\u5177\u4F53\u8981\u770B\u5B9E\u73B0\u65B9\u6CD5\uFF09\uFF0C\u8FD9\u65F6\u4F60\u5C31\u4E0D\u5F97\u4E0D\u7528try...catch\u53BB\u6355\u83B7\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">  database.users.get({id: userId})</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(...)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .catch(...)</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u6837\u7684\u5199\u6CD5\u5C31\u5F88\u7B28\u62D9\u4E86\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u7EDF\u4E00\u7528promise.catch()\u6355\u83B7\u6240\u6709\u540C\u6B65\u548C\u5F02\u6B65\u7684\u9519\u8BEF\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.try(() =&gt; database.users.get({id: userId}))</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(...)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .catch(...)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E8B\u5B9E\u4E0A\uFF0CPromise.try\u5C31\u662F\u6A21\u62DFtry\u4EE3\u7801\u5757\uFF0C\u5C31\u50CFpromise.catch\u6A21\u62DF\u7684\u662Fcatch\u4EE3\u7801\u5757\u3002</p>`,127),o=[p];function c(r,t,i,A,C,y){return a(),n("div",null,o)}var m=s(l,[["render",c]]);export{D as __pageData,m as default};
