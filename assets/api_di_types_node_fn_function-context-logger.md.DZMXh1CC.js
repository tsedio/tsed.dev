import{_ as s}from"./chunks/theme.B8acxcRc.js";import{c as i,j as t,G as a,af as n,o}from"./chunks/framework.JWorlyEv.js";const l={class:"flex space-x-3"},g=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation contextLogger function"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/di/types/node/fn/function-context-logger.html"}]]},"headers":[],"relativePath":"api/di/types/node/fn/function-context-logger.md","filePath":"api/di/types/node/fn/function-context-logger.md","lastUpdated":null}'),r={name:"api/di/types/node/fn/function-context-logger.md"},k=Object.assign(r,{setup(p){return(h,e)=>(o(),i("div",null,[t("div",l,[a(s,{type:"function",class:"mt-3"}),e[0]||(e[0]=t("div",null,[t("h1",null,"contextLogger"),t("div",{class:"module-name"},"@tsed/di")],-1))]),e[1]||(e[1]=n('<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { contextLogger } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/di&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.4.5/packages/di/src/types/node/fn/logger.ts#L0-L0" target="_blank" rel="noreferrer">/packages/di/src/types/node/fn/logger.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> contextLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContextLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Get the current logger instance. If the logger() function is invoked in Request context, it will return the logger instance attached to the request context. Otherwise, it will return the logger instance attached to the DI context.</p>',7))]))}});export{g as __pageData,k as default};
