import{_ as a}from"./chunks/theme.B8acxcRc.js";import{c as i,j as e,G as t,af as p,o as n}from"./chunks/framework.JWorlyEv.js";const h={class:"flex space-x-3"},k=JSON.parse('{"title":"","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation OS3BaseSchema interface"}],"head":[["link",{"rel":"canonical","href":"https://tsed.dev/api/specs/openspec/types/openspec3/interface-os-3-base-schema.html"}]]},"headers":[],"relativePath":"api/specs/openspec/types/openspec3/interface-os-3-base-schema.md","filePath":"api/specs/openspec/types/openspec3/interface-os-3-base-schema.md","lastUpdated":null}'),l={name:"api/specs/openspec/types/openspec3/interface-os-3-base-schema.md"},m=Object.assign(l,{setup(c){return(r,s)=>(n(),i("div",null,[e("div",h,[t(a,{type:"interface",class:"mt-3"}),s[0]||(s[0]=e("div",null,[e("h1",null,"OS3BaseSchema"),e("div",{class:"module-name"},"@tsed/openspec")],-1))]),s[1]||(s[1]=p(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { OS3BaseSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/openspec&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.4.5/packages/specs/openspec/src/types/openspec3/OS3Schema.ts#L0-L0" target="_blank" rel="noreferrer">/packages/specs/openspec/src/types/openspec3/OS3Schema.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OS3BaseSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenSpecBaseJsonSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    items</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OS3Schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenSpecRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="items" tabindex="-1">items <a class="header-anchor" href="#items" aria-label="Permalink to &quot;items&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">items</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS3Schema </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenSpecRef;</span></span></code></pre></div><p>Required if type is &quot;array&quot;. Describes the type of items in the array.</p>`,8))]))}});export{k as __pageData,m as default};