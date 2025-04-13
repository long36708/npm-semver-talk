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
 
# 语义化版本(semver)和依赖版本(dependency version)
<div v-click> Semantic Versioning 语义化版本</div>
<div v-click="3" i-streamline-not-equal-sign></div>
<div v-click="2"> Dependency Version 依赖版本</div>

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
  
# npm package.json
-

---
layout: center
class: text-center
---

# Thank You!
