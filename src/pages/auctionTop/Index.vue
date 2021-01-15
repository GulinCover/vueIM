<template>
  <div class="auction-detail-wrapper">
    <div class="top-tools">
      <global-top-tools/>
    </div>
    <div style="height: 28px;width: 1px"></div>

    <div class="banners">
      <img :src="banner" alt="">
    </div>

    <div class="content-wrapper">
      <div class="user-info">
        <div class="left-info">
          <div class="avatar">
            <img :src="userInfo.avatar" alt="">
          </div>
          <div class="nickname" :class="{'is-active':userInfo.level >= 1800 }">
            {{ userInfo.nickname }}
          </div>
          <div class="sex-and-level">
            <div>
              性别:
              <i v-if="userInfo.sex === '1'" class="fa fa-mars-double"></i>
              <i v-else-if="userInfo.sex === '2'" class="fa fa-venus-double"></i>
              <i v-else-if="userInfo.sex === '3'" class="fa fa-venus-mars"></i>
              <i v-else-if="userInfo.sex === '4'" class="fa fa-mars"></i>
              <i v-else-if="userInfo.sex === '5'" class="fa fa-venus"></i>
              <i v-else class="fa fa-genderless"></i>
            </div>
            <div>经验:{{ userInfo.level }}</div>
          </div>
          <div id="chart1"
               :style="{width: '230px', height: '160px', background: 'white', autoresize: 'ture', borderRadius: '8px'}">
          </div>
        </div>
        <div class="right-info">
          <div class="balance-money">
            <i class="fa fa-credit-card fa-4x"></i>
            <div class="money">
              <div>余额:</div>
              <div>{{userInfo.balance}}</div>
            </div>
          </div>
          <div id="chart2"
               :style="{width: '230px', height: '160px', background: 'white', autoresize: 'ture', borderRadius: '8px'}"></div>
        </div>
      </div>

      <div class="nickname-top">
        <h3>昵称TOP</h3>
        <div class="content">
          <div class="head">
            <div>排行</div>
            <div>昵称</div>
            <div>价格</div>
            <div>用户</div>
          </div>
          <div v-for="(item, key) in nicknameTop" :key="key">
            <div>{{ item.num }}</div>
            <div :title="item.content">{{ item.content }}</div>
            <div class="price" :title="item.price">{{ item.price }}</div>
            <div>{{ item.userId }}</div>
          </div>
        </div>
      </div>


      <div class="show-info">
        <div id="chart3"
             :style="{width: '460px', height: '320px', background: 'white', autoresize: 'ture', borderRadius: '8px'}"
        ></div>
      </div>


      <div class="wallet-info">
        <div class="wallet-bar">
          <button :class="{'is-active':buttonActive === 0}" @click="switchWalletInfo(0)">购买记录</button>
          <button :class="{'is-active':buttonActive === 1}" @click="switchWalletInfo(1)">售卖记录</button>
          <button :class="{'is-active':buttonActive === 2}" @click="switchWalletInfo(2)">著述信息</button>
          <button :class="{'is-active':buttonActive === 3}" @click="switchWalletInfo(3)">库存</button>
        </div>
        <div class="wallet-content">
          <div class="wallet-wrapper">
            <div class="purchase-history">
              <div v-for="(item, key) in purchaseHistory" :key="key">
                <div :title="item.name">{{ item.name }}</div>
                <div>{{ item.time }}</div>
                <div v-if="item.type === '1'">昵称</div>
                <div v-else>著述</div>
                <div>{{item.price}}</div>
                <div>{{item.balance}}</div>
                <div v-if="item.result === '1'" style="color: grey">竞拍成功</div>
                <div v-else-if="item.result === '0'" style="color: black">正在竞拍</div>
                <div v-else style="color: red">竞拍失败</div>
              </div>
            </div>
            <div class="sales-record">
              <div v-for="(item, key) in salesRecord" :key="key">
                <div :title="item.name">{{ item.topicName }}</div>
                <div>{{ item.time }}</div>
                <div v-if="item.type === '1'">昵称</div>
                <div v-else>著述</div>
                <div>{{item.price}}</div>
                <div v-if="item.result === '1'" style="color: grey">竞拍成功</div>
                <div v-else-if="item.result === '0'" style="color: black">正在竞拍</div>
                <div :title="`下架原因:${item.reason}`" v-else style="color: red">已被下架</div>
              </div>
            </div>
            <div class="topic-info">
              <div class="topic-info-data"
                   v-for="(item, key) in topicInfo" :key="key"
              >
                <div>{{ item.topicName }}</div>
                <div class="public-time">{{ item.publicTime }}</div>
                <div class="update-time">{{ item.updateTime }}</div>
                <div>
                  <button v-if="item.settlement === '0'">结算</button>
                  <div v-else>已结算</div>
                </div>
              </div>
            </div>
            <div class="balance">
              <div class="balance-card" v-for="(item, key) in consumables" :key="key">
                <div v-if="item.type === '1'">昵称:</div>
                <div v-else>著述:</div>
                <div class="content">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="topic-top">
        <h3>著述TOP</h3>
        <div class="content">
          <div class="head">
            <div>排行</div>
            <div>著述</div>
            <div>价格</div>
            <div>用户</div>
          </div>
          <div v-for="(item, key) in topicTop" :key="key">
            <div>{{ item.num }}</div>
            <div :title="item.content">{{ item.content }}</div>
            <div class="price" :title="item.price">{{ item.price }}</div>
            <div>{{ item.userId }}</div>
          </div>
        </div>
      </div>


      <div class="show-info">
        <div id="chart4"
             :style="{width: '460px', height: '320px', background: 'white', autoresize: 'ture', borderRadius: '8px'}"
        ></div>
      </div>
    </div>

    <div class="bottom-bar">
      <global-bottom/>
    </div>
  </div>
</template>

<script>
import GlobalBottom from "@/components/GlobalBottom";
import GlobalTopTools from "@/components/GlobalTopTools";
import ECharts from "echarts/dist/echarts"

export default {
  name: "Index",
  components: {
    GlobalTopTools,
    GlobalBottom,
  },
  data() {
    return {
      banner: "https://tpc.googlesyndication.com/simgad/12638394706798940832?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnzdSKc_MghSF_y2QrUnNV6-Y67FQ",
      userInfo: {
        nickname: "alex",
        sex: '0',
        level: 1235,
        avatar: 'ads',
        balance: '99999999c',
      },
      buttonActive: 0,
      purchaseHistory: [
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
        {
          billId: '1',
          type: '1',
          price: '-20c',
          balance: '100c',
          time: '2021/05/01',
          name: 'Alex',
          result: '1',
        },
      ],
      salesRecord: [
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },
        {
          billId: '1',
          type: '2',
          price: '100c',
          topicName: 'this is a topic',
          time: '2021/05/01',
          result: '2',
          reason: 'fsfasfasd'
        },

      ],
      topicInfo: [
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '1'
        },
        {
          topicId: '1',
          topicName: 'this is a topic title',
          publicTime: '2021/01/01 22:12',
          updateTime: '2021/01/02 22:12',
          settlement: '0'
        },
      ],
      consumables: [
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
        {
          id: '1',
          type: '1',
          content: 'alex',
        },
      ],

      nicknameTop: [
        {
          num: '1',
          content: 'alex',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
        {
          num: '1',
          content: 'this is a topic name',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
        {
          num: '1',
          content: 'this is a topic name',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
      ],
      topicTop: [
        {
          num: '1',
          content: 'this is a topic name',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
        {
          num: '1',
          content: 'this is a topic name',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
        {
          num: '1',
          content: 'this is a topic name',
          price: '1211521c',
          userId: '1232412'
        },
        {
          num: '2',
          content: 'this is a topic name',
          price: '121152c',
          userId: '1232412'
        },
        {
          num: '3',
          content: 'this is a topic name',
          price: '12112c',
          userId: '1232412'
        },
        {
          num: '4',
          content: 'this is a topic name',
          price: '12110c',
          userId: '1232412'
        },
        {
          num: '5',
          content: 'this is a topic name',
          price: '1215c',
          userId: '1232412'
        },
      ],

    }
  },

  methods: {
    switchWalletInfo(index) {
      let element = document.querySelector(".wallet-wrapper")
      element.style.left = `-${index * 480}px`
      this.buttonActive = index
    },

  },

  mounted() {
    let chart1 = ECharts.init(document.getElementById("chart1"))
    chart1.setOption({
      title: {
        text: '在Vue中使用echarts',
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
      ]
    })
    let chart2 = ECharts.init(document.getElementById("chart2"))
    chart2.setOption({
      series: [
        {
          name: '销量',
          type: 'pie',
          data: [
            {name: "衬衫", value: 1212},
            {name: "羊毛衫", value: 1212},
            {name: "雪纺衫", value: 3232},
            {name: "裤子", value: 2121},
            {name: "高跟鞋", value: 2323},
            {name: "袜子", value: 1919},
          ],
        },
      ]
    })


    let chart3 = ECharts.init(document.getElementById("chart3"))

    let colors = ['#323232', '#428542', '#6495ed', '#727272', '#c3c3c3'];
    let bgColor = '#fff';

    let itemStyle = {
      star5: {
        color: colors[0]
      },
      star4: {
        color: colors[1]
      },
      star3: {
        color: colors[2]
      },
      star2: {
        color: colors[3]
      }
    };
    let dataInfo = [
      {
        name: '虚构',
        itemStyle: {
          color: colors[1]
        },
        children: [{
          name: '小说',
          children: [{
            name: '5☆',
            children: [{
              name: '疼'
            }, {
              name: '慈悲'
            }, {
              name: '楼下的房客'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '虚无的十字架'
            }, {
              name: '无声告白'
            }, {
              name: '童年的终结'
            }]
          }, {
            name: '3☆',
            children: [{
              name: '疯癫老人日记'
            }]
          }]
        }, {
          name: '其他',
          children: [{
            name: '5☆',
            children: [{
              name: '纳博科夫短篇小说全集'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '安魂曲'
            }, {
              name: '人生拼图版'
            }]
          }, {
            name: '3☆',
            children: [{
              name: '比起爱你，我更需要你'
            }]
          }]
        }]
      }, {
        name: '非虚构',
        itemStyle: {
          color: colors[2]
        },
        children: [{
          name: '设计',
          children: [{
            name: '5☆',
            children: [{
              name: '无界面交互'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '数字绘图的光照与渲染技术'
            }, {
              name: '日本建筑解剖书'
            }]
          }, {
            name: '3☆',
            children: [{
              name: '奇幻世界艺术\n&RPG地图绘制讲座'
            }]
          }]
        }, {
          name: '社科',
          children: [{
            name: '5☆',
            children: [{
              name: '痛点'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '卓有成效的管理者'
            }, {
              name: '进化'
            }, {
              name: '后物欲时代的来临',
            }]
          }, {
            name: '3☆',
            children: [{
              name: '疯癫与文明'
            }]
          }]
        }, {
          name: '心理',
          children: [{
            name: '5☆',
            children: [{
              name: '我们时代的神经症人格'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '皮格马利翁效应'
            }, {
              name: '受伤的人'
            }]
          }, {
            name: '3☆',
          }, {
            name: '2☆',
            children: [{
              name: '迷恋'
            }]
          }]
        }, {
          name: '居家',
          children: [{
            name: '4☆',
            children: [{
              name: '把房子住成家'
            }, {
              name: '只过必要生活'
            }, {
              name: '北欧简约风格'
            }]
          }]
        }, {
          name: '绘本',
          children: [{
            name: '5☆',
            children: [{
              name: '设计诗'
            }]
          }, {
            name: '4☆',
            children: [{
              name: '假如生活糊弄了你'
            }, {
              name: '博物学家的神秘动物图鉴'
            }]
          }, {
            name: '3☆',
            children: [{
              name: '方向'
            }]
          }]
        }, {
          name: '哲学',
          children: [{
            name: '4☆',
            children: [{
              name: '人生的智慧'
            }]
          }]
        }, {
          name: '技术',
          children: [{
            name: '5☆',
            children: [{
              name: '代码整洁之道'
            }]
          }, {
            name: '4☆',
            children: [{
              name: 'Three.js 开发指南'
            }]
          }]
        }]
      }];

    for (let j = 0; j < dataInfo.length; ++j) {
      let level1 = dataInfo[j].children;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
          let style = (function (name) {
            switch (name) {
              case '5☆':
                bookScoreId = 0;
                return itemStyle.star5;
              case '4☆':
                bookScoreId = 1;
                return itemStyle.star4;
              case '3☆':
                bookScoreId = 2;
                return itemStyle.star3;
              case '2☆':
                bookScoreId = 3;
                return itemStyle.star2;
            }
          })(block[star].name);

          block[star].label = {
            color: style.color,
            downplay: {
              opacity: 0.5
            }
          };

          if (block[star].children) {
            style = {
              opacity: 1,
              color: style.color
            };
            block[star].children.forEach(function (book) {
              book.value = 1;
              book.itemStyle = style;

              book.label = {
                color: style.color
              };

              let value = 1;
              if (bookScoreId === 0 || bookScoreId === 3) {
                value = 5;
              }

              if (bookScore[bookScoreId]) {
                bookScore[bookScoreId].value += value;
              } else {
                bookScore[bookScoreId] = {
                  color: colors[bookScoreId],
                  value: value
                };
              }
            });
          }
        }

        level1[i].itemStyle = {
          color: dataInfo[j].itemStyle.color
        };
      }
    }

    chart3.setOption({
      backgroundColor: bgColor,
      color: colors,
      series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        data: dataInfo,
        sort: function (a, b) {
          if (a.depth === 1) {
            return b.getValue() - a.getValue();
          } else {
            return a.dataIndex - b.dataIndex;
          }
        },
        label: {
          rotate: 'radial',
          color: bgColor
        },
        itemStyle: {
          borderColor: bgColor,
          borderWidth: 2
        },
        levels: [{}, {
          r0: 0,
          r: 40,
          label: {
            rotate: 0
          }
        }, {
          r0: 40,
          r: 105
        }, {
          r0: 115,
          r: 140,
          itemStyle: {
            shadowBlur: 2,
            // shadowColor: colors[2],
            color: 'transparent'
          },
          label: {
            rotate: 'tangential',
            fontSize: 10,
            color: colors[0]
          }
        }, {
          r0: 140,
          r: 145,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: 'outside',
            textShadowBlur: 5,
            // textShadowColor: '#333',
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }]
      }]
    })




    let chart4 = ECharts.init(document.getElementById("chart4"))

    let base = +new Date(2014, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];

    let data = [Math.random() * 150];
    let now = new Date(base);

    function addData(shift) {
      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
      date.push(now);
      data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

      if (shift) {
        date.shift();
        data.shift();
      }

      now = new Date(+new Date(now) + oneDay);
    }

    for (let i = 1; i < 100; i++) {
      addData();
    }

    chart4.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
      },
      series: [
        {
          name: '成交',
          type: 'line',
          smooth: true,
          symbol: 'none',
          stack: 'a',
          areaStyle: {
            normal: {}
          },
          data: data
        },
      ]
    })

    setInterval(function () {
      addData(true);
      chart4.setOption({
        xAxis: {
          data: date
        },
        series: [{
          name: '成交',
          data: data
        }]
      });
    }, 1000);
  }
}
</script>

<style scoped>
.auction-detail-wrapper {
  overflow-x: hidden;
  position: relative;
}

.auction-detail-wrapper .banners {
  margin: 5px auto;
  width: 77%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banners img {
  height: inherit;
  width: inherit;
  object-fit: contain;
  object-position: top;
}

.auction-detail-wrapper .top-tools {
  position: fixed;
  width: 100%;
  z-index: 999;
}

.auction-detail-wrapper .bottom-bar {
  width: 100%;
  margin-top: -300px;
}

.content-wrapper {
  margin: 0 auto 300px;
  min-height: 80vh;
  width: 1500px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.content-wrapper > div {
  background: rgba(222, 222, 222, .85);
  backdrop-filter: blur(9px);
  border-radius: 8px;
  margin: 10px;
}


.content-wrapper .user-info {
  display: flex;
  justify-content: space-between;
  align-items: start;
}


.content-wrapper .show-info {
  display: flex;
  justify-content: center;
  align-items: center;
}


.user-info .right-info,
.user-info .left-info {
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.left-info .avatar {
  width: 64px;
  height: 64px;
  margin: 50px 0 20px;
  border-radius: 50%;
  overflow: hidden;
}

.left-info .avatar img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: top left;
}

.left-info .nickname {
  font-size: 18px;
  color: grey;
}

.left-info .nickname.is-active {
  color: red;
  font-size: 18px;
}

.left-info .sex-and-level {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-info .sex-and-level div {
  font-size: 12px;
  width: 104px;
  text-align: center;
}


.right-info .balance-money {
  margin: 10px 5px 5px;
  width: 230px;
  padding: 5px;
  height: 159px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.balance-money .money {
  width: 120px;
  font-size: 24px;
  padding-left: 20px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.content-wrapper .topic-top,
.content-wrapper .nickname-top {
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.nickname-top h3,
.topic-top h3 {
  margin: 10px 0;
}

.nickname-top .content,
.topic-top .content {
  overflow: scroll;
  overflow-x: hidden;
  height: 280px;
}

.nickname-top .content > div,
.topic-top .content > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  padding: 2px 5px;
}

.nickname-top .content > div:nth-child(odd),
.topic-top .content > div:nth-child(odd) {
  background: whitesmoke;
}

.nickname-top .content > div > div,
.topic-top .content > div > div {
  width: 120px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nickname-top .content > div .price,
.topic-top .content > div .price {
  color: cornflowerblue;
}


.content-wrapper .wallet-info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.wallet-info .wallet-bar {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  height: 24px;
}

.wallet-bar button {
  margin: 0 10px;
  border: 1px solid white;
  width: 64px;
  border-radius: 8px;
  transition: all .2s;
}

.wallet-bar button:hover {
  border: 1px solid cornflowerblue;
  cursor: pointer;
}

.wallet-bar button.is-active {
  border: 1px solid #6495ed;
  background: #6495ED;
  color: whitesmoke;
}

.wallet-info .wallet-content {
  height: 320px;
  overflow: hidden;
  padding-top: 5px;
  width: 480px;
}

.wallet-wrapper {
  height: inherit;
  position: relative;
  top: 0;
  left: 0;
  width: 1920px;
  display: flex;
  justify-content: start;
  align-items: start;
  transition: all .5s ease-in-out;
}

.wallet-wrapper > div {
  height: inherit;
  width: 480px;
  padding: 0 8px;
}

.sales-record,
.purchase-history {
  overflow: scroll;
  overflow-x: hidden;
}

.sales-record > div,
.purchase-history > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  font-size: 14px;
  color: grey;
}

.sales-record > div:last-child,
.purchase-history > div:last-child {
  margin-bottom: 10px;
}

.sales-record > div:nth-child(odd),
.purchase-history > div:nth-child(odd) {
  backdrop-filter: blur(9px);
  background: rgba(211, 211, 211, .95);
  border-radius: 8px;
  color: black;
}

.sales-record > div > div:first-child,
.purchase-history > div > div:first-child {
  width: 128px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.topic-info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: scroll;
  overflow-x: hidden;
}

.topic-info > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: grey;
}

.topic-info > div > div:first-child {
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.topic-info-data {
  width: 100%;
  backdrop-filter: blur(9px);
  border-radius: 8px;
  padding: 2px;
}

.topic-info-data:nth-child(odd) {
  backdrop-filter: blur(9px);
  background: rgba(255, 255, 255, .85);
  border-radius: 8px;
}

.topic-info-data:last-child {
  margin-bottom: 10px;
}

.topic-info-data .update-time,
.topic-info-data .public-time {
  width: 80px;
  text-align: center;
  font-size: 12px;
}

.balance {
  overflow: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.balance .balance-card {
  backdrop-filter: blur(9px);
  background: rgba(255, 255, 255, .65);
  border-radius: 8px;
  margin: 5px;
  padding: 2px;
  color: grey;
  transition: all .2s;
}

.balance-card .content {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}

.balance-card:last-child {
  margin-bottom: 10px;
}

.balance-card:hover {
  background: #8ec5fc;
  cursor: pointer;
}


</style>