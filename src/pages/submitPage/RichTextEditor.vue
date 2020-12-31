<template>
  <div class="editor-component">
    <div ref="editor_menu1" style="height: 80px;with:600px">
      <editor-menu-bar
          class="editor-menu"
          ref="editor_menu"
          :class="{'is-fixed':menuPanel.isFixed}"
          :editor="editor"
          v-slot="{commands, isActive, getMarkAttrs}"
      >
        <div class="menubar">
          <div class="horizontal"></div>
          <div class="menubar1">
            <button
                class="menubar__button"
                :class="{'is-active':isActive.bold()}"
                @click="commands.bold"
            >
              <i class="fa fa-bold fa-lg"></i>
            </button>

            <button
                class="menubar__button"
                :class="{'is-active':isActive.italic()}"
                @click="commands.italic"
            >
              <i class="fa fa-italic fa-lg"></i>
            </button>

            <button
                class="menubar__button"
                :class="{'is-active':isActive.strike()}"
                @click="commands.strike"
            >
              <i class="fa fa-strikethrough fa-lg"></i>
            </button>

            <button
                class="menubar__button"
                :class="{'is-active':isActive.heading({level: 1})}"
                @click="commands.heading({level: 1})"
            >
              <i class="fa fa-header fa-lg"></i>
            </button>

            <span class="delimiter"></span>

            <button
                class="menubar__button"
                :class="{'is-active':isActive.bullet_list()}"
                @click="commands.bullet_list"
            >
              <i class="fa fa-list-ul fa-lg"></i>
            </button>

            <button
                class="menubar__button"
                :class="{'is-active':isActive.ordered_list()}"
                @click="commands.ordered_list"
            >
              <i class="fa fa-list-ol fa-lg"></i>
            </button>

            <span class="delimiter"></span>

            <button
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
            >
              <i class="fa fa-quote-right fa-lg"></i>
            </button>

            <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
            >
              <i class="fa fa-code fa-lg"></i>
            </button>

            <span class="delimiter"></span>

            <button
                class="menubar__button"
                @click="commands.horizontal_rule"
            >
              <i class="fa fa-arrows-h fa-lg"></i>
            </button>

            <span class="right-button">
            <button
                class="menubar__button"
                @click="commands.undo"
            >
              <i class="fa fa-rotate-left fa-lg"></i>
            </button>
            <button
                class="menubar__button"
                @click="commands.redo"
            >
              <i class="fa fa-rotate-right fa-lg"></i>
            </button>
            <button
                class="menubar__button"
            >
              <i class="fa fa-reorder fa-lg"></i>
            </button>
          </span>

          </div>

          <div class="horizontal"></div>
          <div class="menubar2">

            <div class="menubar__block">
              <div class="global-mask"
                   :class="{'show':globalMask}"
              ></div>
              <div class="menubar2__link">
                <button
                    class="menubar__button"
                    @click="showLink(getMarkAttrs('link'))"
                >
                  <i class="fa fa-link fa-lg"></i>
                </button>

                <div
                    class="menubar__link__input"
                    :class="{'show' : linkPanel.isShow}"
                >
                  <div class="close-button">
                    <button @click="hideLinkMenu">
                      <i class="fa fa-close fa-lg"></i>
                    </button>
                  </div>
                  <div class="prompt">
                    <h2>插入链接</h2>
                  </div>
                  <div class="input">
                    <div class="url">
                      <span>
                        <i class="fa fa-link"></i>
                      </span>
                      <input type="text" v-model="linkPanel.linkUrl" placeholder="https://" ref="linkUrlInput"
                             @keydown.esc="hideLinkMenu"/>
                    </div>
                  </div>
                  <div class="button">
                    <button class="button-left" @click="hideLinkMenu">
                      <span>取消</span>
                    </button>
                    <button class="button-right"
                            @click="insertLink(commands.link)"
                    >
                      <span>确认</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="menubar2__image">
                <button
                    class="menubar__button"
                    @click="showImage"
                >
                  <i class="fa fa-image fa-lg"></i>
                </button>

                <div
                    class="menubar__image__input"
                    :class="{'show':imagePanel.isShow}"
                >
                  <div class="close">
                    <div class="close-button">
                      <button @click="hideImageMenu">
                        <i class="fa fa-close fa-lg"></i>
                      </button>
                    </div>
                  </div>
                  <div class="image-prompt">
                    <div class="image-url"
                         @click="switchButton"
                         :class="{'active':!imagePanel.isRight}"
                    >
                      <h2>插入图片链接</h2>
                    </div>
                    <div class="image-file"
                         @click="switchButton"
                         :class="{'active':imagePanel.isRight}"
                    >
                      <h2>插入图片文件</h2>
                    </div>
                  </div>
                  <div class="slide-block"
                       :class="{'right-block':imagePanel.isRight}"
                  ></div>
                  <div class="slide">
                    <div class="card"
                         :class="{'right-card':imagePanel.isRight}"
                    >
                      <div class="url-card">
                        <div class="url-input">
                          <div class="input">
                            <i class="fa fa-link"></i>
                            <input type="text" v-model="imagePanel.imageSrc" placeholder="https://">
                          </div>
                        </div>
                        <div class="button">
                          <button class="button-left" @click="hideImageMenu">
                            <span>取消</span>
                          </button>
                          <button class="button-right"
                                  @click="submitUrlImage(commands.image)"
                          >
                            <span>确认</span>
                          </button>
                        </div>
                      </div>
                      <div class="local-card">
                        <div class="input">
                          <i class="fa fa-picture-o"></i>
                          <div class="text-block">
                            <span>选择文件</span>
                          </div>
                          <div class="input-backdrop"></div>
                        </div>
                        <div class="button">
                          <button class="button-left" @click="hideImageMenu">
                            <span>取消</span>
                          </button>
                          <button class="button-right"
                                  @click="submitLocalImage(commands.image)"
                          >
                            <span>确认</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="delimiter2"></span>
            <div class="menubar__block">
              <div class="global-mask"
                   :class="{'show':globalMask}"
              ></div>
              <div class="menubar2__table">
                <button
                    class="menubar__button"
                    @click="showTable"
                >
                  <i class="fa fa-table fa-lg"></i>
                </button>

                <div
                    class="menubar__table__input"
                    :class="{'show':tablePanel.isShow}"
                >
                  <div class="close-button">
                    <button @click="hideTable">
                      <i class="fa fa-close fa-lg"></i>
                    </button>
                  </div>
                  <div class="prompt">
                    <h2>插入表格</h2>
                  </div>
                  <div class="input">
                    <div class="rows-input">
                      <span>
                        <i class="fa fa-arrows-h"></i>
                      </span>
                      <input type="text" v-model="tablePanel.rowsCount" placeholder="输入表格行数(最大100行)">
                    </div>
                    <div class="cols-input">
                      <span>
                        <i class="fa fa-arrows-v"></i>
                      </span>
                      <input type="text" v-model="tablePanel.colsCount" placeholder="输入表格列数(最大8列)">
                    </div>
                  </div>
                  <div class="button">
                    <button class="button-left" type="button" @click="hideTable">
                      <span>取消</span>
                    </button>
                    <button class="button-right" type="button" @click="submitTableInfo(commands.createTable)">
                      <span>提交</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
            <span class="delimiter2"></span>
            <div class="menubar__block">
              <div class="global-mask"
                   :class="{'show':globalMask}"
              ></div>
              <button class="menubar__button">
                <i class="fa fa-file fa-lg"></i>
              </button>
            </div>
          </div>
          <div class="horizontal"></div>
        </div>
      </editor-menu-bar>
    </div>
    <editor-menu-bubble
        :editor="editor"
        :keep-in-bounds="keepInBounds"
        v-slot="{commands, isActive, menu}"
    >
      <div
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom + 10}px;`"
      >

        <button
            class="menubar__button"
            @click="commands.deleteTable"
        >
          <i class="fa fa-ban fa-lg"></i>
        </button>

        <span class="delimiter2"></span>

        <button
            class="menubar__button"
            @click="commands.addColumnBefore"
        >
          <i class="iconfont iconadd_col_before"></i>
        </button>
        <button
            class="menubar__button"
            @click="commands.addColumnAfter"
        >
          <i class="iconfont iconadd_col_after"></i>
        </button>
        <button
            class="menubar__button"
            @click="commands.deleteColumn"
        >
          <i class="iconfont icondelete_col"></i>
        </button>

        <span class="delimiter2"></span>

        <button
            class="menubar__button"
            @click="commands.addRowBefore"
        >
          <i class="iconfont iconadd_row_before"></i>
        </button>
        <button
            class="menubar__button"
            @click="commands.addRowAfter"
        >
          <i class="iconfont iconadd_row_after"></i>
        </button>
        <button
            class="menubar__button"
            @click="commands.deleteRow"
        >
          <i class="iconfont icondelete_row"></i>
        </button>

        <span class="delimiter2"></span>

        <button
            class="menubar__button"
            @click="commands.toggleCellMerge"
        >
          <i class="iconfont iconhebing"></i>
        </button>
      </div>

    </editor-menu-bubble>
    <editor-content
        class="editor__content"
        :editor="editor"
    />
  </div>
</template>

<script>
import {Editor, EditorContent, EditorMenuBar, EditorMenuBubble} from 'tiptap'
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'
import css from 'highlight.js/lib/languages/css'
import cs from 'highlight.js/lib/languages/cs'
import ruby from 'highlight.js/lib/languages/ruby'
import {
  Bold,
  Italic,
  Strike,
  Heading,
  BulletList,
  OrderedList,
  ListItem,
  Blockquote,
  CodeBlockHighlight,
  HorizontalRule,

  Placeholder,
  History,
  TodoList,
  TodoItem,


  Link,
  Image,

  Table,
  TableCell,
  TableHeader,
  TableRow

} from 'tiptap-extensions'

export default {
  name: "R",
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
  },
  data() {
    return {
      globalMask: false,
      menuPanel: {
        isFixed: false,
        offsetTop: 0,
      },
      imagePanel: {
        isRight: false,
        isShow: false,
        imageSrc: null,
      },
      linkPanel: {
        linkUrl: null,
        isShow: false,
      },
      tablePanel: {
        isShow: false,
        rowsCount: null,
        colsCount: null,
        withHeaderRow: false
      },
      keepInBounds: true,
      editor: new Editor({
        injectCSS: false,
        content: "",
        extensions: [

          new Bold(),
          new Italic(),
          new Strike(),
          new Heading({levels: [1]}),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new Blockquote(),
          new CodeBlockHighlight({
            languages: {
              javascript,
              java,
              css,
              cs,
              ruby,
            }
          }),
          new HorizontalRule(),

          new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: '请输入正文',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          }),
          new History(),
          new TodoList(),
          new TodoItem(),

          new Link(),
          new Image(),

          new Table({resizable: true}),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
        ]
      })
    }
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },

  methods: {
    // fixed menubar
    initHeight() {
      // let scrollTop = this.$refs.editor_menu1.$el.getBoundingClientRect().top
      let scrollTop = this.$refs.editor_menu1.getBoundingClientRect().top
      this.menuPanel.isFixed = scrollTop < 28
    },

    // globalMask
    showMask() {
      this.globalMask = true
    },
    hideMask() {
      this.globalMask = false
    },

    // link button
    showLink(attrs) {
      this.linkPanel.linkUrl = attrs.href
      this.linkPanel.isShow = true
      this.showMask()
      this.$nextTick(() => {
        this.$refs.linkUrlInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkPanel.linkUrl = null
      this.linkPanel.isShow = false
      this.hideMask()
    },
    insertLink(command) {
      if (this.linkPanel.linkUrl === null ||
          this.linkPanel.linkUrl === "" ||
          this.linkPanel.linkUrl === undefined
      ) {
        alert("信息不能为空!")
        return
      }
      let a = /^https?:\/\/.+\..+(\..*)?/.test(this.linkPanel.linkUrl)
      if (a) {
        this.linkPanel.isDisable = false
        command({href: this.linkPanel.linkUrl})
        this.hideLinkMenu()
        return
      } else {
        alert("无效链接!")
        return
      }
    },

    // image button
    showImage() {
      this.imagePanel.isShow = true
      this.showMask()
    },
    submitLocalImage(command) {
      let src = this.imagePanel.imageSrc
      if (src !== null) {
        command({src});
        this.hideImageMenu()
      }
    },
    submitUrlImage(command) {
      if (this.linkPanel.imageSrc === null ||
          this.linkPanel.imageSrc === "" ||
          this.linkPanel.imageSrc === undefined
      ) {
        alert("信息不能为空!")
        return
      }
      command({src: this.linkPanel.imageSrc});
      this.hideImageMenu()
    },
    switchButton() {
      this.imagePanel.isRight = !this.imagePanel.isRight
    },
    hideImageMenu() {
      this.imagePanel.imageSrc = null
      this.imagePanel.isShow = false
      this.hideMask()
    },

    // table button
    showTable() {
      this.showMask()
      this.tablePanel.isShow = true
    },
    submitTableInfo(command) {
      if (this.tablePanel.rowsCount === null ||
          this.tablePanel.rowsCount === "" ||
          this.tablePanel.rowsCount === undefined ||
          this.tablePanel.colsCount === null ||
          this.tablePanel.colsCount === "" ||
          this.tablePanel.colsCount === undefined ||
          this.tablePanel.rowsCount > 100 ||
          this.tablePanel.rowsCount < 0 ||
          this.tablePanel.colsCount > 8 ||
          this.tablePanel.colsCount < 0
      ) {
        alert("填写有错误!")
        return
      }
      this.tablePanel.rowsCount = parseInt(this.tablePanel.rowsCount)
      this.tablePanel.colsCount = parseInt(this.tablePanel.colsCount)
      command({rowsCount: this.tablePanel.rowsCount, colsCount: this.tablePanel.colsCount, withHeaderRow: false})
      this.hideTable()
    },
    hideTable() {
      this.tablePanel.isShow = false
      this.hideMask()
    }
  },

  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>

<style>
@import "RichText.css";
@import "//at.alicdn.com/t/font_2274399_ydypj649hus.css";

.menububble {
  z-index: 3;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all .2s;
}

.menububble:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(9px);
  background-color: rgba(255,255,255,.25);
  opacity: .95;
  z-index: -1;
}

.menububble.is-active {
  visibility: visible;
  opacity: 1;
}

.menububble .delimiter2 {
  background-color: #727272;
}

s {
  text-decoration: line-through;
}

a {
  color: #3b9dff;
}

a:hover {
  cursor: pointer;
}

.editor-component {
  position: relative;
  width: inherit;
  margin: 0 auto;
}

.editor-component .editor-menu {
  width: 600px;
  position: absolute;
  transition: all .5s;
}

.editor-menu:before {
  position: absolute;
  display: block;
  left: -20px;
  content: "";
  height: 90px;
  width: 640px;
  z-index: -1;
  background-color: white;
}

.editor-menu.is-fixed {
  top: 28px;
  position: fixed;
  z-index: 1;
}

.editor-component p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.horizontal {
  background-color: #ebebeb;
  height: 1px;
}

.delimiter {
  position: relative;
  top: 5px;
  display: inline-block;
  margin: 0 10px;
  height: 20px;
  width: 1px;
  background-color: #ebebeb;
}

.delimiter2 {
  display: inline-block;
  margin: 0 10px;
  height: 20px;
  width: 1px;
  background-color: #ebebeb;
}

.menubar__button {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 4px;
  margin: 0 4px;
  padding: 2px;
  transition: all .2s;
  background-color: #ffffff;
}

.menubar__button.is-active {
  background-color: #cfd9df;
  color: #5aa7ff;
}

.menubar__button:hover {
  background-color: #cfd9df;
  color: #5aa7ff;
}

.menubar1 {
  margin: 5px 0;
}

.right-button {
  float: right;
}

.menubar2 {
  display: flex;
  justify-self: start;
  align-items: center;
  margin: 5px 0;
}

.menubar2 .menubar__block {
  display: inline;
  position: relative;
}

.menubar2__image,
.menubar2__link {
  display: inline;
}

.menubar2__table .menubar__table__input,
.menubar2__image .menubar__image__input,
.menubar2__link .menubar__link__input {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 60%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  z-index: 888;
  border-radius: 12px;
  transition: all .5s;
}

/*link*/
.menubar__link__input {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.menubar__link__input .close-button {
  width: 100%;
  padding: 10px;
}

.close-button button {
  float: right;
  border: none;
  background-color: rgba(18, 18, 18, 0);
}

.close-button button i {
  transition: all .3s;
}

.close-button button i:hover {
  transform: rotateZ(360deg);
  cursor: pointer;
}

.menubar__link__input .prompt {
  margin: 20px 0 18px;
  color: #5c5c5c;
}

.menubar__link__input .input {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.input .url {
  border-radius: 4px;
  border: 1px solid gray;
  margin: 15px 0;
}

.input input {
  padding: 10px 10px 10px 2px;
  width: 320px;
  border: none;
}

.input .url i {
  color: grey;
  width: 30px;
  height: 30px;
  text-align: center;
}

.menubar__link__input .button {
  position: absolute;
  bottom: 20px;
}

.button .button-right,
.button .button-left {
  border: none;
  width: 170px;
  height: 44px;
  border-radius: 16px;
  margin: 0 5px;
}

.button .button-left {
  color: grey;
  transition: all .2s;
}

.button .button-right {
  transition: all .2s;
  background-color: #8ec5fc;
}

.button .button-left:hover {
  color: black;
  background-color: #8ec5fc;
  cursor: pointer;
}

.button .button-right:hover {
  cursor: pointer;
}

.button-right span,
.button-left span {
  position: relative;
  top: 0;
}

.button-right:hover span,
.button-left:hover span {
  animation: text 0.2s ease-in-out;
}

@keyframes text {
  from {
    top: 0;
  }
  50% {
    top: -3px;
  }
  to {
    top: 0;
  }
}

/*image*/
.menubar2__image .menubar__image__input {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
}

.menubar__image__input .close {
  padding: 10px;
  width: 400px;
}

.image-prompt {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-prompt .image-file,
.image-prompt .image-url {
  margin: 10px;
  color: grey;
  transition: all 0.2s;
}

.image-prompt .image-file:hover,
.image-prompt .image-url:hover {
  cursor: pointer;
  color: black;
}

.image-prompt .image-file.active,
.image-prompt .image-url.active {
  color: black;
}

.menubar__image__input .slide {
  width: 365px;
  overflow: hidden;
  padding-top: 30px;
  margin: 0 20px;
}

.slide-block {
  width: 20px;
  height: 2px;
  background-color: black;
  border-radius: 4px;
  position: relative;
  left: -80px;
  transition: all 0.2s;
}

.slide-block.right-block {
  left: 80px;
}

.menubar__image__input .card {
  left: 0;
  display: flex;
  height: 200px;
  align-self: self-start;
  position: relative;
  transition: all .2s;
}

.card.right-card {
  left: -385px;
}

.card .local-card,
.card .url-card {
  position: relative;
  padding: 0 10px;
}

.url-input {
  width: 345px;
  padding: 0 10px;
}

.url-card .input {
  position: relative;
  border-radius: 4px;
  border: 1px solid gray;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 4px;
}

.local-card .input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: -20px;
}

.local-card .input:hover {
  cursor: pointer;
}

.local-card .input:hover .input-backdrop {
  background-color: #8ec5fc;
}

.local-card .input:hover i {
  top: 0;
  color: #e2ebf0;
}

.local-card .input:hover .text-block {
  opacity: 1;
  color: black;
  visibility: visible;
}

.local-card .input .text-block {
  opacity: 0;
  visibility: hidden;
  color: grey;
  transition: all .2s;
}

.local-card .input .input-backdrop {
  transition: all 0.2s;
  position: absolute;
  top: -18px;
  border-radius: 14px;
  width: 345px;
  height: 100px;
  background-color: #cfd9df;
  z-index: -1;
}

.local-card .input i,
.url-card .input i {
  top: 10px;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
}

.local-card .input i {
  transition: all .2s;
  position: relative;
  top: 10px;
}

.local-card .button,
.url-card .button {
  position: relative;
  bottom: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.url-card .button {
  left: -7px;
  bottom: -70px;
}

.global-mask {
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(9px);
  background-color: rgba(255,255,255,.25);
  width: 100vw;
  height: 100vh;
  transition: all .2s;
}

.global-mask.show {
  visibility: visible;
  opacity: .5;
}

/*table*/
.menubar__table__input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.menubar__table__input .close-button {
  width: 100%;
  padding: 10px;
}
.menubar__table__input .input {
  margin: 30px 10px;
}
.menubar__table__input .input .cols-input,
.menubar__table__input .input .rows-input {
  border-radius: 4px;
  border: 1px solid grey;
  padding: 5px;
  margin: 5px 0 20px;
}
.menubar__table__input .input .cols-input span,
.menubar__table__input .input .rows-input span {
  text-align: center;
}
.menubar__table__input .input .cols-input i,
.menubar__table__input .input .rows-input i {
  width: 25px;
  height: 25px;
}
.menubar__table__input .button {
  position: relative;
  top: -20px;
}


.menubar__table__input.show,
.menubar__image__input.show,
.menubar__link__input.show {
  top: 40%;
  visibility: visible;
  opacity: 1;
}

.editor__content {
  margin: 20px 0 400px;
  border: none !important;
}

</style>