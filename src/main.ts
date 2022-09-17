import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import mitt from 'mitt'

type ol = { type: string, name: string, lnglat?: [number, number], id: number, desc?: string }
type Events = {
    ln: string,
    udl: ol[],
    sfv: any,
    sr: string
}

const Mit = mitt<Events>()

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

const app = createApp(App)

app.config.globalProperties.$Bus = Mit

loadFonts()

app.use(vuetify)
.use(createPinia())
.mount('#app')
