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
glowSeed: 4
---

# 语义化版本与版本范围

zhangshilong12

<div uppercase text-sm tracking-widest>
Long Mo
</div>

<div abs-br mx-13 my-12 flex="~ col" text-sm text-left>
  <div>web 前端</div>
  <div text-sm opacity-50>20250412</div>
</div>

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---
  
# Long Mo

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of web开发组<br>
Maintainer of AI基础设施基座<br>
Working at HikVision<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>

  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/long36708" target="_blank" class="border-none! font-300">long36708</a></div>

  <div i-simple-icons-bloglovin op50 ma text-xl ml4/>
  <div>
        <a href="https://www.cnblogs.com/longmo666" target="_blank" class="border-none! font-300 flex w-[50px]">龙陌</a>
  </div>
</div>

<img src="/user-avatar.jpg" rounded-full w-35 abs-tr mt-32 mr-30 />

<div flex="~ gap2">

</div>

---
layout: center
glow: bottom
glowX: 50
glowY: 40
---

# 引言

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt2>

<div flex="~ col items-center justify-center">
  <div v-click text-10em i-devicon-npm-wordmark/>
  <v-clicks at="4">
   <div ml--22 leading-10> 什么是语义化版本？ </div>
   <div leading-10> 语义化版本和依赖版本的区别？ </div>
   <div ml-6 leading-10> ^1.0.0、 ~1.0.0、>=1.0.0有什么区别？</div>
   <div ml-2 leading-10>  指定版本和安装版本一定相同吗？ </div>
  </v-clicks>
</div>
<div v-click w-60 text-10em i-logos-pnpm/>

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
  <div v-click absolute right-0 top-20>
    <img src="/semver-important.png" alt="" width="600">
  </div>
</div>



<!--
我们使用的包管理器，如 npm 、 pnpm 和 yarn ，都假设 npm 上的每个包都遵循 SemVer。
-->

---
transition: fade-out
layout: center
glowX: 50
glowY: 0
---

<h3 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-10' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-8080f2 transition duration-500 text-1.5em
    :class="$clicks <  1 ? 'scale-150 translate-y' : ''"
  >
    <div i-simple-icons-semver />
    什么是语义化版本<sub op-75>semver</sub>?
  </span>
  <span v-click op75 forward:delay-400 text-2xl>全称：semantic versioning </span>
</div>
</h3>

<div v-click>

 语义化版本不仅仅局限于前端开发，而是一个<div inline-block v-mark.orange.delay600="4">广泛应用于软件管理领域</div>的一个概念。

</div>

<div v-click>

它是一种版本编号系统，通过<span inline-block v-mark.orange.delay600="5">特定的规则</span>为软件版本号赋予意义。

</div>

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

<v-click>

 #### 它是为了确保软件版本号能够<span inline-block v-mark.orange.delay600="2">**清晰、准确地传达软件变更信息**</span>而制定的版本**编号规则**。

</v-click>
<br/>
<v-clicks depth="2" at="3">

- 一方面，对于软件开发者来说：
  - 清晰传达变更的意义
  - 自动化依赖管理
  - 提升用户信任度
- 另一方面，对于使用者来说：
  - 易于理解和跟踪软件更新
  - 保证兼容性与稳定性

</v-clicks>

<v-click at="10">

语义化版本规范是 维护者与用户之间确保升级期间兼容性和稳定性的契约。

共同遵循语义化版本号能使开发者和使用者共同获益。

</v-click>

<!--
清晰传达变更的性质：通过主版本号、次版本号和修订号的变化，可以明确地向用户传达本次更新是包含重大更改（可能需要用户调整自己的代码）、新增功能还是仅仅修复了一些bug。这有助于用户快速了解升级可能带来的影响。

简化依赖管理：在复杂的软件生态系统中，一个项目往往依赖于多个库或包。语义化版本允许开发者指定兼容版本范围，例如^1.2.3表示接受任何不改变主版本号的更新。这有助于自动化工具选择合适的依赖版本，减少因依赖问题导致的冲突或错误。

提升用户信任度：遵循统一的版本编号规则可以帮助用户建立对项目的信任。当用户知道项目严格遵守语义化版本控制时，他们能更有信心地进行升级操作，因为他们可以根据版本号预判升级的风险和工作量。

促进协作：在一个团队或者开源社区内，使用语义化版本可以帮助所有参与者更好地理解项目的进展和变化。它提供了一种标准化的语言来描述软件的发展状态，有助于沟通和协调工作。

支持自动化流程：许多CI/CD（持续集成/持续部署）流水线和依赖管理系统都支持基于语义化版本的工作流。这意味着可以更容易实现自动化测试、构建和发布过程，进一步加速开发周期。

增强生态系统的稳定性：在整个软件生态系统中广泛采用语义化版本有助于保持整个生态系统的稳定性和健康性。它减少了由于不兼容更新导致的问题，促进了不同软件之间的互操作性和长期维护。

语义化版本规范是 维护者与用户之间确保升级期间兼容性和稳定性的契约。
作为用户，你无法总是通过查看变更日志来了解 v2.3.4 和 v2.3.5 之间发生了什么。但通过查看数字，你可以推断这是一个旨在修复错误的补丁版本，升级应该是安全的
-->

---
layout: iframe-left
url: https://semver.org/lang/zh-CN/
transition: fade-out
---

## 语义化版本控制规范

<div mt-4/>

<v-clicks depth="2">

- `X.Y.Z` 
  - 主版本号
  - 次版本号
  - 修订版本号
- 任何修改都必须以新版本发行
  - 版本只能增加，不能减少
  - 1.8.9 -> 1.8.10
- x一般从0开始，表示还未发布的版本
    - 一旦发布正式版，则需要[将主版本改为1](https://docs.npmjs.com/about-semantic-versioning) 
- 每一次增加高位的版本，低位的都要清零
    - 1.8.2 -> 1.9.0
    - 1.8.2 -> 2.0.0
</v-clicks>

<v-click>

> `release`版本为正式版或稳定版，有些也叫做stable、GA版，即软件的最终发行版
</v-click>


---
layout: two-cols-header
---

# 先行版本（预发布版本）

<v-clicks depth="2">

- 正式版本发布之前的一些试验性或不完全稳定的版本，用来收集反馈或者进行公开测试
- 通过在版本号后添加一个连字符（-）以及一系列点分隔的标识符来表示，这些标识符必须由 ASCII 字母数字和连字符组成 [0-9A-Za-z-]，并且不允许为空。
- 常见字母版本号为 `canary`、`dev`、`alpha`、`beta`、`rc`
- 先行版本又称"预发布版本"或"不稳定版本",一般不可用于生产环境

  
</v-clicks>

::left::

<img v-click src="/vue-pre-releases.png" scale-150 w-full mt-18 contrast-110>

::right::

<img v-click src="/react-pre-releases.png" scale-150 w-full mt-18>

<!--
rc: 候选版本 Release Candidate
-->

---

# 语义化版本号比较时的基本原则

<v-clicks>

- 按顺序逐个标识符比较
    - 主版本号优先 > 次版本号其次 >  修订号最后
- 对于带有预发布标识（如 -alpha, -beta 等）的版本，其比较规则稍微复杂一些。
  - 区别于正式版本，预发布版本被认为不如正式版本稳定，
  - 因此按照 SemVer 规则，任何带有预发布标签的版本都被视为低于相同版本号的正式版本。
  - 在预发布标识中,数字与非数字标识符的比较
    - 如果一个是纯数字而另一个包含非数字字符，则纯数字被视为小于非数字标识符。
    - 如果两者都是纯数字，则数值较大的视为更大；
    - 如果是非数字，则按字典顺序比较。
</v-clicks>
<div v-click scale-150 mx-20 mt-4 px-20>

```
1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta 
< 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.10
< 1.0.0-rc.1 < 1.0.0 < 2.0.0-alpha 
```

</div>

<div mt-6 text-red mx-10 v-click> 注意这里的 .10 实际上是比 .2 更大的，尽管按字典顺序看起来不是这样,如果要在代码或脚本中比较语义化版本号，可以使用像   <b text-yellow>node-semver</b> 这样的库来进行比较</div>

<!--
首先比较主版本号。如果一个版本的主版本号大于另一个版本的主版本号，则该版本被视为更大。

如果两个版本的主版本号相同，则比较次版本号。次版本号较大的版本被视为更大。

如果两个版本的主版本号和次版本号都相同，则比较修订号。修订号较大的版本被视为更大。
-->

---

# 小测试

<v-clicks depth="2">

- `5.0.0-0` 是一个有效的语义化版本吗？
  - 是
- `1.2.0.1` 是一个有效的语义化版本吗？
  - 否
- `v1.2.3` 是一个有效的语义化版本号吗？
  - 否
  - 但是，在语义化版本号之前增加前缀 `v` 是用来表示版本号的常用做法
  - 在版本控制系统中，将 `version` 缩写为 `v` 是很常见的。
    - 比如：git tag v1.2.3 -m "Release version 1.2.3" 中
    - `v1.2.3` 表示标签名称，而 `1.2.3`是语义化版本号。
</v-clicks>

<div mt-4/>
<v-click>

> 推荐一个正则表达式用以检查语义化版本号的正确性
> 
> https://regex101.com/r/vkijKf/1/
>
> 验证语义化版本是否符合规范或者比较他们之间的大小关系
> 
> 推荐 npm 的 https://github.com/npm/node-semver
</v-click>


<img v-click.hide=5 src='/semver-demo.png' w100 rounded-md class="position-absolute top-22 right-25"/>

<v-click at=6>

<img src='/semver-coerce.png' w100 rounded-md class="position-absolute top-22 right-25"/>
</v-click>

<v-click at=8>

<img src='/node-semver.png' w100  class="position-absolute top-10 right-25"/>
</v-click>

---
layout: iframe
url: https://docs.npmjs.com/cli/v11/configuring-npm/package-json#dependencies
scale: 0.8
glowSize: 0
glowX: 1
glowFollow: false
---
     
-

---
glowFollow: false
---

<div grid="~ cols-[1fr_max-content_1fr] gap-4"  mt4 >

<div flex="~ col items-center justify-center" v-click>
 <h2>  语义化版本</h2>
 <div op50 font-serif italic mt--1> Semantic Versioning</div>
</div>

<div v-click="3" i-streamline-not-equal-sign mt-4></div>

<div flex="~ col items-center justify-center"  v-click="2">

<h2>  依赖版本</h2>
<div  op50 font-serif italic mt--1> Dependency Version</div>
</div>

</div>

<img v-click="4" src="/dependency-version.png" my2 rounded absolute top-42 w="80%" left-30/>

<v-click at="5" >
<div absolute right-45>

`"包名":"版本范围"`  [版本范围](https://github.com/npm/node-semver?tab=readme-ov-file#ranges) 是一组比较器 ，用于指定满足该范围的版本

</div>
</v-click>

---
scale: 0.6
glowSize: 0.6
---

## semver 中的符号

| 符号 | 描述 | 示例 | 解释 |
| --- | --- | --- | --- |
| `^` | 表示当前版本号大于等于该版本号，且小于下一个主版本号。适用于同一个主版本号中的所有更新（包括次版本和修订版）。 | `^3.2.12` | 当前版本号需大于等于 `3.2.12` 但小于 `4.0.0`。 |
| `~` | 表示同一主版本号和次版本号中，不小于指定版本号的版本号。适用于同一主版本和次版本下的修订版更新。 | `~3.2.12` | 当前版本号需大于等于 `3.2.12` 但小于 `3.3.0`。 |
| `>`, `<`, `<=`, `>=` | 分别表示大于、小于、小于等于、大于等于指定版本号。用于指定一个具体的版本号范围。 | `>=1.2.0` | 只要版本大于或等于 `1.2.0` 即可安装，例如最新版本是 `2.1.0`，则会安装 `2.1.0`。 |
| `=` | 精确匹配某个版本号。通常可以省略等号直接写版本号。如果 npm 仓库中没有该版本，则安装时会报错。 | `=2.1.0` 或 `2.1.0` | 必须是这个确切版本号才能被安装。 |
| `x`, `*` | 匹配任意版本号。可用于指代主版本、次版本或修订版本号中的任意值。 | `3.x`, `3.*` | 当前版本号需大于等于 `3.0.0` 但小于 `4.0.0`。 |


---
layout: default
layoutClass: important-p20
glowX: 20
glowY: 20
---

# 版本范围 <sub op-50>Version Range</sub>

<div grid="~ cols-2 gap-4" >

```shell
npm install --save vue
```

</div>

<div class="flex-col" >
<Arrow  v-click x1="200" y1="150" x2="200" y2="300" />
<div v-click class="position-absolute" left-30 top-50> latest </div>
<div v-click class="position-absolute" left-30 top-60> ^3.5.13 </div>
</div>

<div grid="~ cols-2 gap-4" mt-40 v-click>

```json
{
  "dependencies": {
    "vue": "^3.5.13"
  }
}
```

</div>


---
layout: center
glowX: 40
glowY: 40
---

<h2> 
 <span class="text-orange-500 font-bold">^</span>3.5.13
</h2>

<div>

<div v-click flex="~ cols-[1fr_max-content_1fr]">
<span class="text-orange-500 font-bold">^</span>锁定主版本号，允许安装 <span class="text-orange-500 font-bold">x</span> .y.z中的最新版本

<div v-click='3' class="i-emojione-question-mark text-5xl rotate-15"  />
</div>


</div>
---
layout: center
class: text-center
glowX: 50
glowY: 40
---
         
## 什么是最新版本？
<v-click>

默认情况下，npm publish 会将新版本标记为 latest 标签，除非指定了其他标签
</v-click>
<v-click>

> 在发布新版本时，可以直接通过 --tag 参数指定标签，而不是默认的 latest 标签。
> 
> 这对于发布预发布版本（如 alpha、beta）非常有用。
> 
> 发布一个带有 next 标签的版本 
</v-click>

<v-click>
```shell
npm publish --tag next
```
</v-click>


---
layout: two-cols-header
glowX: 30
glowY: 50
---

## case 1

 vue 3.5.13  ->  3.5.14 <v-click at=4> <span text-red> -> 4.0.0 </span></v-click>

<v-click>

```json
{
	"dependencies": {
		"vue": "^3.5.13"
	}
}
```
</v-click>

<v-click>

```shell
npm install
```
</v-click>

<v-click>

不考虑lock文件的情况下

```text
node_modules
 └── vue@3.5.14
```
</v-click>

<div mt4/>
<v-click at=5>

> 如果一个包发布了新的主版本 v4.0.0 ，如果你的指定范围是 ^3.5.13 ，你的包管理器不会安装它。
>
> 这可以防止意外的破坏性更改影响你的项目，直到你手动更新版本范围。

</v-click>

<!--
如果一个包发布了新的主版本 v4.0.0 ，如果你的指定范围是 ^3.5.13 ，你的包管理器不会安装它。

这可以防止意外的破坏性更改影响你的项目，直到你手动更新版本范围。
-->

---
glowX: 30
glowY: 50
---

  
## case 2

vue 3.5.13  ->  3.5.14 -> 3.5.15-beta.1

<v-click>

```json 
{
  "dependencies": {
    "vue": "^3.5.13"
  }
}
```
</v-click>

<v-click>
```shell
npm install
```
</v-click>

<v-click>

```text 
node_modules
 └── vue@3.5.15-beta.1
```
</v-click>
<v-click>

不会！！！

```text
node_modules
 └── vue@3.5.14
```
</v-click>


---
layout: default
glowX: 30
glowY: 50
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
<v-click>

```json 
{
  "dependencies": {
    "vue": "^3.5.15-beta.1"
  }
}
```
</v-click>
<br/>

<v-click>

```shell
npm install
```
</v-click>

<br/>

<v-click>

```text
node_modules
 └── vue@3.5.15-beta.1
```
</v-click>

---

# case3

vue 3.5.13  ->  3.5.14 -> 3.5.15-beta.1(不稳定版本) -> 3.5.15-beta.2(beta版本)

<v-click>
```json
{
  "dependencies": {
    "vue": "^3.5.15-beta.1"
  }
}
```
</v-click>

<br/>

<v-click>
```shell
npm install
```
</v-click>

<br/>
<v-click>
```text
node_modules
 └── vue@3.5.15-beta.2
```

<br/>

> 因为依赖方已经在 `package.json` 中指定 `beta` 版本，即允许安装不稳定版本了
</v-click>

---
layout: center
glowX: 50
glowY: 40
---

# 完全理解 <span v-click i-emojione-exclamation-question-mark inline-block /> 


---
layout: default
glowX: 30
glowY: 20
---

# case 4

<div flex="~ cols-[max-content_1fr]" class="text-xl">

<div class="flex">
<div i-fluent-emoji-flat-package inline-block pr-2/>

<div inline-block>
 axios 0.21.1 -> 0.30.0
</div>
</div>

</div>

<v-click >

<div text-align-left>

```json
{
  "dependencies": {
    "axios": "^0.21.1"
  }
}
```
</div>
</v-click>

<br/>
<v-click>
```shell
npm install
```
</v-click>

<br/>
<v-click>
```text
node_modules
 └── axios@0.21.1
```

> ^不是锁的主版本吗？0.30.0 明明就满足规则，这又是为什么呢？

</v-click>

---
layout: center
glowX: 45
glowY: 40
glowFollow: false
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
glowX: 40
---

# case 4 

<div  class="text-xl flex-col">
<div flex>
  <div i-fluent-emoji-flat-package/>

  <div>
  axios 0.21.1 -> 0.30.0
  </div>
</div>
<br/>
<div style="text-align: left">
```json
{
  "dependencies": {
    "axios": "^0.21.1"
  }
}
```
</div>
</div>

<div class="flex flex-col">

<strong v-click><span class="text-orange-500 font-bold">^0.21</span>.1</strong>
<strong class="mx-4 text-white" v-click> = </strong>
<strong v-after><span class="text-orange-500 font-bold">~0.21</span>.1</strong>

</div>

<div mt-4 v-click> 0.21.1 、0.21.2 、0.21.3 ... </div>

---
layout: center
class: text-left
---

# Epoch Semantic Versioning 

## 纪元语义化版本

<v-click>

- 人类对数字的感知是按对数字的尺度进行的。
  - 我们倾向于将 v2.0 到 v3.0 看作是巨大的、划时代的变革
  - 而 v125.0 到 v126.0 则显得微不足道
  - 尽管两者在 SemVer 中都表示不兼容的 API 变更
</v-click>

<div w-100 v-click>

```shell
{EPOCH * 1000 + MAJOR}.MINOR.PATCH
```
</div>

<img src="/antfu-avatar.png" rounded-full w-35 abs-tr mt-20 mr-30 />

<v-clicks>

- 例如，UnoCSS 若有个巨大重构，将从 v0.65.3 过渡到 v65.3.0（在 EPOCH 为 0 的情况下）。
- 之后，补丁版本将变为 v65.3.1，功能版本将变为 v65.4.0。
- 如果引入了一些影响边缘情况的微小不兼容更改，我可以将其升级到 v66.0.0 以提醒用户潜在影响
-  如果对核心进行重大改革，可以直接跳转到 v1000.0.0 来标志着新时代的到来并发布重大公告。
</v-clicks>

<div v-click>

Anthony Fu 

https://antfu.me/posts/epoch-semver

</div>

<!--
然而，人类对数字的感知是按对数字的尺度进行的。
我们倾向于将 v2.0 到 v3.0 看作是巨大的、划时代的变革，而 v125.0 到 v126.0 则显得更加微不足道，尽管两者在 SemVer 中都表示不兼容的 API 变更
-->

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

<repo name="antfu-collective/bumpp" />

增加版本号等的交互式 CLI


![](/bumpp.png){.w-90.contrast-110}

</v-click>



---
layout: center
class: text-center
glowX: 50
glowY: 30
---

# Thank You!
