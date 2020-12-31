<template>
  <div class="topic-component">
    <div class="user-info-content">
      <div class="user-avatar">
        <img :src="detailResp.userInfo.avatar" alt="userAvatar" class="image-css">
      </div>
      <div class="user">
        <div class="name">
          {{detailResp.userInfo.name}}
        </div>
        <div class="sex">
          {{detailResp.userInfo.sex === 1 ? "man":"woman"}}
        </div>
      </div>
      <div class="level">
        {{detailResp.userInfo.level}}
      </div>
    </div>
    <div class="topic-front-cover">
      <img v-for="(item, key) in detailResp.topicInfo.frontFace" :key="key" :src="item" alt="frontFace"
           class="front-cover">
    </div>
    <div class="topic-title">
      <h1>{{ detailResp.topicInfo.title }}</h1>
    </div>
    <div class="topic-entry">
      <global-entry :entry="detailResp.topicInfo.entry"></global-entry>
    </div>
    <div class="topic-content">
      <editor-content :editor="editor"></editor-content>
    </div>
  </div>
</template>

<script>
import GlobalEntry from "@/components/GlobalEntry";
import {Editor, EditorContent} from "tiptap"
import {
  Blockquote,
  Bold,
  BulletList,
  CodeBlock,
  Heading, HorizontalRule, Image,
  Italic, Link,
  ListItem,
  OrderedList,
  Strike, Table, TableCell, TableHeader, TableRow
} from "tiptap-extensions";

export default {
  name: "TopicWrapper",
  components: {
    GlobalEntry,
    EditorContent,
  },
  props: {
    detailResp: {
      type: Object,
      default() {
        return {
          userInfo: {
            name: "test",
            level: 1,
            sex: 1,
            avatar: "https://pic4.zhimg.com/v2-fdf42a3d94050a365cec00ccd31e9f1f.png"
          },
          topicInfo: {
            title: "This is a Title!",
            frontFace: [
              "https://pic1.zhimg.com/80/v2-b340d9273b95e17e006c800301a4e7cc_720w.jpg?source=1940ef5c",
              "https://pic1.zhimg.com/80/v2-b340d9273b95e17e006c800301a4e7cc_720w.jpg?source=1940ef5c"
            ],
            content: `当你注意到一个有辨识度的特征在以固定的规律循环重复时，那它试图营造的自然随机性就会立刻崩塌。

CSS中使用质数，从而增加了随机的真实感。这个被alex walker定名为“蝉原则”。他最先提出了通过质数来着鞥家随机真实性的想法。这个方法不仅适用于背景，还可以用于其他涉及有规律重复的情况。
<h1>hello</h1>
<h2>world</h2>


border-image的原理基本上就是九宫格伸缩法：把图片切割成九块，然后把它们应用到元素边框相应地边和角。



当任意两个相邻圆角的半径之和超过border box的尺寸时，用户代理必须按比例减小各个边框半径所使用的值，直到它们不会相互重叠为止。

boder-radius可以单独指定水平和垂直半径，只要用一个斜杠（/）分隔这两个值即可。这个特性允许我们在拐角处创建椭圆圆角。一个容器设置了不相等的水平和垂直border-radius；拐角处的弧线现在呈现出椭圆的形状，这个椭圆的水平和垂直半径就是我们为border-radius指定的值。

boder-radius这个属性不仅可以接受长度值，还可以接受百分比值。这个百分比值会基于元素的尺寸进行解析，即宽度用于水平半径的解析，而高度用于垂直半径的解析。

我们可以为元素的每个角指定不同的值，而且还有两个方法可以做到这一点。第一种方法就是使用它所对应的各个展开式属性：border-top-left-radius,border-top-right-radius,border-bottom-left-radius,border-bottom-right-radisu。

不过我们可以一次性提供用空格分开的多个值。如果我们传给它四个值，这四个值就分别从左上角顺时针顺序应用到元素的各个拐角。如果我们提供的值少于四个，则它们会以CSS的常规方式重复，三个值，意味着第四个值和第二个值相同；如果只有两个值，以为13，24相同`,
            entry: [
              {
                name: "hello",
                level: 1,
              },
              {
                name: "world",
                level: 2,
              },
            ],
          }
        }
      }
    }
  },
  data() {
    return {
      editor: new Editor({
        content: ``,
        extensions: [
          new Bold(),
          new Italic(),
          new Strike(),
          new Heading({levels: [1]}),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new Blockquote(),
          new CodeBlock(),
          new HorizontalRule(),

          new Link(),
          new Image(),

          new Table({resizable: true}),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
        ]
      }),
    }
  },
  mounted() {
    this.editor.setContent(this.detailResp.topicInfo.content)
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style scoped>
.topic-component {
  width: var(--topic-page-topic-content-width);
  margin: 0 auto;
}

.user-info-content {
  width: var(--topic-page-topic-content-width);
  display: flex;
  justify-content: start;
  align-items: start;
}
.user-info-content .user-avatar {
  align-self: center;
}
.user-info-content .user {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.user-info-content .level {

}

.user-avatar img {
  width: var(--global-user-avatar-width);
  height: var(--global-user-avatar-height);
  object-fit: cover;
  object-position: left top;
}

.topic-front-cover {
  width: var(--topic-page-topic-front-cover-width);
  height: var(--topic-page-topic-front-cover-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

.topic-front-cover img {
  height: inherit;
  overflow: hidden;
  object-fit: contain;
}

img.front-cover {
  width: calc(var(--topic-page-topic-front-cover-width) / var(--topic-page-topic-front-cover-count));
  display: inline-block;
}

.topic-title {
  margin-top: 20px;
  text-align: center;
}

.topic-entry {
  margin: 20px 0;
  padding: 0 200px;
  display: flex;
  justify-content: center;
  align-items: start;
}
</style>