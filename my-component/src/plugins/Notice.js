import create from '@/utils/create'
import Notice from '@/components/Notice'

export default {
    install(Vue) {
        Vue.prototype.$notice = options => create(Notice, options);
    }
}

