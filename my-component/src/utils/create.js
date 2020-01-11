import Vue from 'vue'

export default function create(Component, props) {
    // const vm = new Vue({
    //     render(h) {
    //         return h(Component, { props })
    //     }
    // }).$mount();

    // document.body.appendChild(vm.$el);

    // const comp = vm.$children[0];

    // comp.remove = function () {
    //     document.body.removeChild(vm.$el);
    //     vm.$destroy();
    // }

    const ComponentCtor = Vue.extend(Component);
    var comp = new ComponentCtor({ propsData: props });
    comp.$mount();
    document.body.appendChild(comp.$el);
    comp.remove = function () {
        document.body.removeChild(comp.$el);
        comp.$destroy();
    }

    return comp;
}