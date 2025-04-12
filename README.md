# npm-semver-talk

https://sli.dev

## 点击进入下一页

```vue

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page
  <carbon:arrow-right/>
</div>
```

## github 图标

```vue
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
  <carbon:logo-github/>
</a>
```

或者

```vue

<div i-simple-icons-github/>
```

## 所有字母转大写

```vue

<div uppercase tracking-widest op50>
  Anthony Fu
</div>
```

## 将 do 划掉 改为 try to

```vue
<h1 class="text-5xl!" v-click="1" w-200>I <span transition-all duration-300
                                                :class="$clicks === 4 ? 'line-through op50' : ''">do</span> <span
    v-click="4">try to</span></h1>
<h1 class="text-5xl! font-bold" v-click="2">Inbox-Zero</h1>
<h1 class="text-5xl!" v-click="3">Everyday</h1>
```

## 删除线

先给出一个错误的概念，然后进行否定

```vue
---
layout: fact
: 50
glowY: 120
glowSize: 1.5
clicks: 1
---

<h1 :class="$clicks === 1 ? 'line-through op50!' : ''"><span text-transparent text-8xl bg-clip-text bg-gradient-to-r
                                                             from-rose-400 to-pink-600>TURN OFF</span> Notifications
</h1>

<p :class="$clicks === 1 ? 'line-through op20!' : ''">and call it a day</p>
```

## 数字背景

用于分点描述,例如第一点，第二点...

```vue
---
layout: fact
glowX: 50
glowY: 0
glowSize: 1.5
---

# 减少通知的创建
投稿指南、发行表格/模板等

<div class="number-bg">0</div>
```

```vue
---
layout: fact
glowX: 50
glowY: 0
glowSize: 1.5
---

# 寻求通知
不要让他们来找你

<div class="number-bg">1</div>
```

```vue
---
layout: fact
glowX: 0
glowY: 50
glowSize: 1.5
---

# 将通知分组
按存储库，而不是按时间

<div class="number-bg">2</div>
```

```vue
---
layout: fact
glowX: 90
glowY: 90
glowSize: 1.5
---

# 关注什么
过滤掉杂音，分清轻重缓急

<div class="number-bg">3</div>
```

## 图片

```vue
<img src="/dot-github-repo.png" w-100 rounded-md border="~ main"/>
```

## 箭头

```vue

<Arrow x1="600" y1="200" x2="550" y2="75" text-lime shadow v-if="$clicks === 1"/>
```

```vue
---
glowX: 110
glowY: -10
clicks: 2
---

<img absolute left-10 top-10 v-click="0" src="/notifications-raw.png" w-150 mix-blend-plus-lighter/>
<Arrow x1="600" y1="200" x2="550" y2="75" text-lime shadow v-if="$clicks === 1"/>
<img absolute left-10 top-10 v-click="2" src="/notifications-grouped.png" w-150/>
```

## 强调某个单词

```vue
<b text-hex-a371f7>Colorize</b> notifications type
```

## 词云

开始中央显示出一个中心词

然后每次按一下，出来一个关键词

再然后，每次按下出来多个次要词

```vue
---
layout: center
glowX: 50
glowY: 50
---

<h1 font-bold class="text-5xl!">Developer Experience</h1>

<div absolute left-100 top-80 v-click>File-based Routing</div>
<div absolute left-52 top-50 v-click>Modules Ecosystem</div>
<div absolute left-100 top-50 v-click>Hot Module Replacement</div>
<div absolute left-50 top-80 v-click>Server-side Rendering</div>

<v-click>

  <div absolute left-158 top-50>Nitro</div>
  <div absolute left-145 top-80>ESM First</div>
  <div absolute left-170 top-80>Vite Powered</div>
  <div absolute left-60 top-90 op80>Zero-config</div>
  <div absolute left-90 top-90>Edge Rendering</div>

</v-click>
<v-click>

  <div absolute left-85 top-40>Hybrid Rendering</div>
  <div absolute left-130 top-90>Components Auto Imports</div>
  <div absolute left-125 top-40 op70>Composables Auto Imports</div>
  <div absolute left-55 top-40 op70>Middleware</div>
  <div absolute left-175 top-50 op70>SEO</div>

</v-click>
<v-click>

  <div absolute left-145 top-100 op60>Server API</div>
  <div absolute left-100 top-30 op70>Serverless</div>
  <div absolute left-70 top-30 op70>TypeScript</div>
  <div absolute left-130 top-30 op70>Server Components</div>
  <div absolute left-120 top-100 op70>Layouts</div>
  <div absolute left-70 top-100 op60>Static Site Generation</div>

</v-click>
```

## 单词变灰动效

```vue

<div v-click transition-all duration-500
     :class="$clicks === 0 ? 'op0' : $clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Introducing
</div>
```

## 数字说明

比如某个npm包的使用情况

```vue
---
glowX: 100
glowY: 100
class: ml-20 mt-5
---

## State of Nuxt DevTools

###### As of October 10th, 2023

<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-2" items-center my6>
  <v-clicks :every="2">
    <div text-right text-4xl font-bold color="[#BD3E53]">504K</div>
    <div text-left text-lg op80>Monthly downloads on NPM</div>
    <div text-right text-4xl font-bold color="[#BD7C3E]">24%</div>
    <div text-left text-lg op80>Downloads of Nuxt 3</div>
    <div text-right text-4xl font-bold color="[#A9BD3E]">16K</div>
    <div text-left text-lg op80>Open Source projects dependents</div>
    <div text-right text-4xl font-bold color="[#54BD3E]">2.3K</div>
    <div text-left text-lg op80>Stars on GitHub</div>
    <div text-right text-4xl font-bold color="[#3EBD7C]">18</div>
    <div text-left text-lg op80>Builtin tabs</div>
    <div text-right text-4xl font-bold color="[#3EAABD]">53</div>
    <div text-left text-lg op80>Contributors</div>
    <div text-right text-4xl font-bold color="[#3E55BD]">20+</div>
    <div text-left text-lg op80>Nuxt Modules integrates Nuxt DevTools</div>
  </v-clicks>
</div>
```

## Demo time

```vue
---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.4
---

<h1>Demo time!</h1>
```

## Q&A

```vue
---
layout: center
class: text-center
glowX: 50
glowY: -20
---

# Q&A
```

## 以感谢结束

```vue
---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank You!
```
