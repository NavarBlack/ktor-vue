import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'


export default function ({store}){
  Vue.use(VueNativeSock, 'ws://localhost:9000/socket',
    {
      store: store,
      reconnection: true,
      reconnectionDelay: 3000

    })
}
