import{_ as a}from"./chunks/theme.B8acxcRc.js";import{c as t,j as i,G as e,af as l,o as h}from"./chunks/framework.JWorlyEv.js";const n={class:"flex space-x-3"},g=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation PlatformKoaRequest class"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/platform/platform-koa/types/services/class-platform-koa-request.html"}]]},"headers":[],"relativePath":"api/platform/platform-koa/types/services/class-platform-koa-request.md","filePath":"api/platform/platform-koa/types/services/class-platform-koa-request.md","lastUpdated":null}'),p={name:"api/platform/platform-koa/types/services/class-platform-koa-request.md"},E=Object.assign(p,{setup(k){return(r,s)=>(h(),t("div",null,[i("div",n,[e(a,{type:"class",class:"mt-3"}),s[0]||(s[0]=i("div",null,[i("h1",null,"PlatformKoaRequest"),i("div",{class:"module-name"},"@tsed/platform-koa")],-1))]),s[1]||(s[1]=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { PlatformKoaRequest } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/platform-koa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.4.5/packages/platform/platform-koa/src/types/services/PlatformKoaRequest.ts#L0-L0" target="_blank" rel="noreferrer">/packages/platform/platform-koa/src/types/services/PlatformKoaRequest.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PlatformKoaRequest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PlatformRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Koa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Koa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> secure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cookies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> session</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getReq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IncomingMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="get-ctx" tabindex="-1">get ctx <a class="header-anchor" href="#get-ctx" aria-label="Permalink to &quot;get ctx&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): Koa.Context;</span></span></code></pre></div><h2 id="get-protocol" tabindex="-1">get protocol <a class="header-anchor" href="#get-protocol" aria-label="Permalink to &quot;get protocol&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string;</span></span></code></pre></div><h2 id="get-host" tabindex="-1">get host <a class="header-anchor" href="#get-host" aria-label="Permalink to &quot;get host&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string;</span></span></code></pre></div><h2 id="get-secure" tabindex="-1">get secure <a class="header-anchor" href="#get-secure" aria-label="Permalink to &quot;get secure&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">secure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): boolean;</span></span></code></pre></div><h2 id="get-cookies" tabindex="-1">get cookies <a class="header-anchor" href="#get-cookies" aria-label="Permalink to &quot;get cookies&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cookies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     [p: string]: any;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span></code></pre></div><h2 id="get-session" tabindex="-1">get session <a class="header-anchor" href="#get-session" aria-label="Permalink to &quot;get session&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): any;</span></span></code></pre></div><h2 id="getreq" tabindex="-1">getReq <a class="header-anchor" href="#getreq" aria-label="Permalink to &quot;getReq&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getReq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).IncomingMessage;</span></span></code></pre></div>`,19))]))}});export{g as __pageData,E as default};
