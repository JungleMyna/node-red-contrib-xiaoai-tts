# 详情请参考原项目（这里只加了获取对话记录）

# 小爱tts
    小爱音箱tts、获取设备信息，其余的自己去探索吧

* 流程

``` json
    [{"id":"d7878f8a.ae593","type":"tab","label":"流程1","disabled":false,"info":""},{"id":"432cea6b.20aea4","type":"debug","z":"d7878f8a.ae593","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":1144,"y":1132,"wires":[]},{"id":"e8ff678f.efbba8","type":"change","z":"d7878f8a.ae593","name":"","rules":[{"t":"set","p":"dc_delay","pt":"flow","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":1220,"y":877,"wires":[[]]},{"id":"4e763841.bdea28","type":"xiaoai-devices","z":"d7878f8a.ae593","name":"","xiaoai":"","x":444,"y":249,"wires":[["6d0ade3c.18377"]]},{"id":"8dc90fd2.eaacd","type":"inject","z":"d7878f8a.ae593","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":230,"y":265,"wires":[["4e763841.bdea28"]]},{"id":"6d0ade3c.18377","type":"debug","z":"d7878f8a.ae593","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":620,"y":250,"wires":[]},{"id":"6c7dd46c.7ae63c","type":"xiaoai-tts","z":"d7878f8a.ae593","name":"","xiaoai":"","tts":"你好,暖宝宝","device":"","x":432,"y":352,"wires":[["6d0ade3c.18377"],["6d0ade3c.18377"]]},{"id":"7cbda7f1.d15de8","type":"inject","z":"d7878f8a.ae593","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":236,"y":348,"wires":[["6c7dd46c.7ae63c"]]}]
```