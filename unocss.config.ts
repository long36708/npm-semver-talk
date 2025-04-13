/*
 * @Author: longmo 3131521901@qq.com
 * @Date: 2025-04-12 22:08:40
 * @LastEditors: longmo 3131521901@qq.com
 * @LastEditTime: 2025-04-13 14:09:23
 * @FilePath: \npm-semver-talk\unocss.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import config from '@slidev/client/uno.config'
import {   
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
} from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  ...config,
  shortcuts: {
    ...config.shortcuts || {},
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
  },
  presets: [
    // presetWebFonts({
    //   inlineImports: false,
    //   fonts: {
    //     number: 'Oswald',
    //   },
    // }),
    presetWind3(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
  ],
})
