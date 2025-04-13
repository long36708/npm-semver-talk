---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
layout: center
# some information about your slides (markdown enabled)
title: 语义化版本知识分享
info: |
  semantic versioning
# apply unocss classes to the current slide
class: text-center
css: unocss
highlighter: shiki
colorSchema: dark
glowSize: 1.5
# https://sli.dev/features/drawing
drawings:
  persist: true
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
---

# 语义化版本(semver)知识分享

zhangshilong12

<div uppercase text-sm tracking-widest>
Long Mo
</div>

<div abs-br mx-13 my-12 flex="~ col" text-sm text-left>
  <div>web 前端</div>
  <div text-sm opacity-50>20250412</div>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: center
---
   
# 引言

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt2>
<div w-60 text-10em i-devicon-npm-wordmark></div>
<div v-click w-60 text-10em i-logos-pnpm></div>

<div v-click>
```json 
{
  "name": "npm-semver-talk",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "slidev build",
    "dev": "slidev --open",
    "export": "slidev export"
  },
  "dependencies": {
    "@iconify/json": "^2.2.326",
    "@slidev/cli": "^51.5.0",
    "@slidev/theme-default": "latest",
    "@slidev/theme-seriph": "latest",
    "unocss": "66.0.0",
    "vue": "^3.5.13"
  }
}
```
</div>

</div>

<v-clicks>
<div leading-10> ^1.0.0 、~1.0.0 、 >=1.0.0 有什么区别？ </div>
<div leading-10> 指定版本和安装版本一定相同吗？ </div>
<div leading-10> 语义化版本和依赖版本的区别？ </div>
</v-clicks>

---
layout: center
---
    
<div grid="~ cols-2 gap-10" mt4>
<div v-click>
 <h2>  语义化版本</h2>
 <div op50 font-serif italic mt--1> Semantic Versioning</div>
</div>

<div v-click="3" i-streamline-not-equal-sign></div>

<div v-click="2">
<h2>  依赖版本</h2>
<div  op50 font-serif italic mt--1> Dependency Versio
</div>
</div>

</div>

<img v-click="4" src="/dependency-version.png" w-360 my2 rounded absolute top-8 right-14/>

<v-click at="5">

`"包名":"版本范围"`

</v-click>

<div v-click="6"> 版本范围</div>


---
transition: fade-out
layout: center
glowX: 50
glowY: 0
---
     
# 什么是语义化版本(semver)?

<v-clicks at="4">

- 全称：semantic versioning
- **语义化版本** 不仅仅局限于前端开发，而是一个广泛应用于软件管理领域的一个概念
- 一种为了确保软件版本号能够清晰、准确地传达软件变更信息而制定的版本**编号规则**。

</v-clicks>

<!--
这套版本编号系统不仅适用于各种编程语言编写的应用程序，也同样适用于库、框架等软件包的版本控制。

无论是前端JavaScript库、后端服务、移动应用还是桌面软件，任何类型的软件项目都可以采用语义化版本来规范其发布周期和版本号的递增逻辑，

从而促进项目的可持续维护以及与其他软件系统的兼容性和依赖性管理。
-->

---
layout: quote
class: text-center
---
   
# 为什么要使用语义化版本?

---
transition: slide-up
level: 2
---
  
# 作用

- 语义化版本是为了解决版本管理中存在的一些问题，

- 比如版本号递增，版本号冲突，版本号不兼容等,

- 从而提高软件项目的可维护性、依赖管理和用户信任度

<!--
清晰传达变更的性质：通过主版本号、次版本号和修订号的变化，可以明确地向用户传达本次更新是包含重大更改（可能需要用户调整自己的代码）、新增功能还是仅仅修复了一些bug。这有助于用户快速了解升级可能带来的影响。

简化依赖管理：在复杂的软件生态系统中，一个项目往往依赖于多个库或包。语义化版本允许开发者指定兼容版本范围，例如^1.2.3表示接受任何不改变主版本号的更新。这有助于自动化工具选择合适的依赖版本，减少因依赖问题导致的冲突或错误。

提升用户信任度：遵循统一的版本编号规则可以帮助用户建立对项目的信任。当用户知道项目严格遵守语义化版本控制时，他们能更有信心地进行升级操作，因为他们可以根据版本号预判升级的风险和工作量。

促进协作：在一个团队或者开源社区内，使用语义化版本可以帮助所有参与者更好地理解项目的进展和变化。它提供了一种标准化的语言来描述软件的发展状态，有助于沟通和协调工作。

支持自动化流程：许多CI/CD（持续集成/持续部署）流水线和依赖管理系统都支持基于语义化版本的工作流。这意味着可以更容易实现自动化测试、构建和发布过程，进一步加速开发周期。

增强生态系统的稳定性：在整个软件生态系统中广泛采用语义化版本有助于保持整个生态系统的稳定性和健康性。它减少了由于不兼容更新导致的问题，促进了不同软件之间的互操作性和长期维护。
-->

---
layout: iframe
url: https://docs.npmjs.com/cli/v11/configuring-npm/package-json#dependencies
scale: 0.6
---
  
-


---
layout: default
layoutClass: important-p20
---

# 版本范围 <sub op-50>Version Range</sub>

<div grid="~ cols-2 gap-4" >
```shell
npm install --save axios
```
</div>

<Arrow  v-click x1="200" y1="150" x2="200" y2="360" />
<div v-click class='abs left-200 top-200'> latest </div>
<div v-click abs x-200 y-300> ^1.2.3 </div>

<div grid="~ cols-2 gap-4" mt-40>

```json
{
  "dependencies": {
    "axios": "^1.2.3"
  }
}
```

</div>


---
layout: center
---

<h2> 
 <span class="text-orange-500 font-bold">^</span>1.2.3
</h2>

<div>

<div v-click flex="~ cols-[1fr_max-content_1fr]">
<span class="text-orange-500 font-bold">^</span>锁定主版本号，允许安装 <span class="text-orange-500 font-bold">x</span> .y.z中的最新版本

<div v-click='3' class="i-emojione-question-mark text-5xl rotate-15"  />
</div>

</div>


---
layout: two-cols-header
---


## case 1

 vue 3.5.13  ->  3.5.14 


```json
{
"dependencies": {
  "vue": "^3.5.13"
}
```



```shell
npm install
```

不考虑lock文件的情况下

```ts
node_modules
 └── vue@3.5.14
```

---
  
## case 2

vue 3.5.13  ->  3.5.14 -> 3.5.15-beta.1

```json
{
  "dependencies": {
    "vue": "^3.5.13"
  }
}
```

```shell
npm install
```

```text
node_modules
 └── vue@3.5.15-beta.1
```

不会！！！

```ts
node_modules
 └── vue@3.5.14
```

---
layout: center
class: text-center
---
  
## 什么是最新版本？

默认情况下，npm publish 会将新版本标记为 latest 标签，除非指定了其他标签

> 在发布新版本时，可以直接通过 --tag 参数指定标签，而不是默认的 latest 标签。
> 这对于发布预发布版本（如 alpha、beta）非常有用。
> 发布一个带有 next 标签的版本 

```shell
npm publish --tag next
```

---
layout: default
--- 
 
# 不稳定版本

<div v-click mb-4> 除了x.y.z ,带任意后缀的版本号称为不稳定版本 </div>


<v-clicks>

- 1.0.0-alpha
- 1.0.0-beta.2
- 1.0.0-rc.1
- 1.0.0-0.3.6

</v-clicks>


<v-click>

vue 3.5.14  -> 3.5.15-beta.1(不稳定版本)

> 除非依赖方强制指定该版本，否则永远不会默认安装不稳定版本

</v-click>



---
 
# case 2

vue 3.5.13  ->  3.5.14 -> 3.5.15-beta.1(不稳定版本)

```json
{
  "dependencies": {
    "vue": "^3.5.15-beta.1"
  }
}
```
<br/>

```shell
npm install
```
<br/>
<br/>
<br/>

```text
node_modules
 └── vue@3.5.15-beta.1
```

---

# case3

vue 3.5.13  ->  3.5.14 -> 3.5.15-beta.1(不稳定版本) -> 3.5.15-beta.2(beta版本)

```json
{
  "dependencies": {
    "vue": "^3.5.15-beta.1"
  }
}
```

```shell
npm install
```

```text
node_modules
 └── vue@3.5.15-beta.2
```

> 因为依赖方已经在 `package.json` 中指定 `beta` 版本，即允许安装不稳定版本了


---
layout: center
---

# 完全理解 <div v-click i-emojione-exclamation-question-mark inline-block /> 


---
layout: default
---

# case 4

<div flex="~ cols-[max-content_1fr]" class="text-xl">

<div i-fluent-emoji-flat-package/>

<div>
 axios 0.21.1 -> 0.30.0
</div>

</div>


```json
{
  "dependencies": {
    "axios": "^0.21.1"
  }
}
```

```shell
npm install
```

```text
node_modules
 └── axios@0.21.1
```

> ^不是锁的主版本吗？0.30.0 明明就满足规则，这又是为什么呢？


---
layout: center
---

# 不稳定版本 

<v-click>
<div op-50 mt-8>带任意后缀</div>

- 1.0.0-alpha
- 1.0.0-beta.2
- 1.0.0-rc.1
- 1.0.0-0.3
  
</v-click>

<v-click>
<div strong text-orange mt-8>主版本号为0</div>

- 0.y.z{.text-orange-500.text-bold.text-2xl}
  
</v-click>


---
layout: center
class: text-center
---
 
# case 4

<div flex="~ cols-[max-content_1fr]" class="text-xl">

<div i-fluent-emoji-flat-package/>

<div>
 axios 0.21.1 -> 0.30.0
</div>

</div>

<div mt-4>
```json
{
  "dependencies": {
    "axios": "^0.21.1"
  }
}

```
</div>


<div class="flex flex-col">

<strong v-click><span class="text-orange-500 font-bold">^0.21</span>.1</strong>
<strong class="mx-4 text-white" v-click> = </strong>
<strong v-after><span class="text-orange-500 font-bold">~0.21</span>.1</strong>

</div>

<div mt-4 v-click> 0.21.1 、0.21.2 、0.21.3 ... </div>


---
layout: center
class: text-center
---

# Epoch Semantic Versioning 纪元语义化版本

```shell
{EPOCH * 1000 + MAJOR}.MINOR.PATCH
```

> 例如，UnoCSS 若有个巨大重构，将从 v0.65.3 过渡到 v65.3.0（在 EPOCH 为 0 的情况下）。

> 之后，补丁版本将变为 v65.3.1，功能版本将变为 v65.4.0。

> 如果引入了一些影响边缘情况的微小不兼容更改，我可以将其升级到 v66.0.0 以提醒用户潜在影响
> 如果对核心进行重大改革，可以直接跳转到 v1000.0.0 来标志着新时代的到来并发布重大公告。

<div v-click>

https://antfu.me/posts/epoch-semver

</div>

---
layout: two-cols
---

# npm version

<div w-80>

```shell
# 从 1.0.1 增加到 2.0.0
npm version major

# 从 1.0.1 增加到 1.1.0
npm version minor

# 将 1.0.1 增加到 1.0.2
npm version patch
```

<!-- ![](/npm-version.png){.w-120.contrast-110} -->

</div>

::right::

<v-click>

# bumpp

增加版本号等的交互式 CLI

https://github.com/antfu-collective/bumpp

![](/bumpp.png){.w-90.contrast-110}

</v-click>

---
layout: center
class: text-center
---

# Thank You!
