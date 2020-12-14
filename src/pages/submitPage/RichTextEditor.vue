<template>
  <div class="rich-text-editor">
    <h2>RichTextEditor</h2>
    <div id="froala-editor">
      {{content}}
    </div>
    <p><a id="get-text" class="btn r-btn highlight text-small">Clear</a></p>
  </div>
</template>

<script>
import FroalaEditor from "froala-editor"

export default {
  name: "RichTextEditor",
  components: {},
  data() {
    return {
      editor: "",
      content: "",
    }
  },

  mounted() {
    this.initialized()
  },

  methods: {
    initialized() {
      FroalaEditor.DefineIcon('saveSelection', {NAME: 'download', SVG_KEY: 'star'});
      FroalaEditor.RegisterCommand('saveSelection', {
        title: 'save',
        focus: true,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          this.selection.save();
          alert('selection saved');
        }
      });

      FroalaEditor.DefineIcon('restoreSelection', {NAME: 'upload', 'SVG_KEY': 'add'});
      FroalaEditor.RegisterCommand('restoreSelection', {
        title: 'restore',
        focus: true,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          this.selection.restore();
        }
      });

      FroalaEditor.DefineIcon('clearSelection', {NAME: 'trash',SVG_KEY:"star"});
      FroalaEditor.RegisterCommand('clearSelection', {
        title: 'clear',
        focus: true,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          this.selection.clear();
        }
      });

      this.editor = new FroalaEditor("#froala-editor", {
        placeholderText: "请在此进行编辑",
        toolbarButtons: [
          ['saveSelection', 'restoreSelection', 'clearSelection'],
          ['bold', 'italic', 'subscript', 'superscript',[1,2,3]],
          ['indent', 'outdent', 'formatOL', 'formatUL']
        ],
        events: {
          initialized: function () {
            let editor = this;
            editor.events.bindClick(editor.$('body'), 'a#get-text', function () {
              editor.html.set('');
              editor.events.focus();
            })
          }
        }
      })
    },
  },
  computed: {}
}
</script>

<style scoped>
@import "~froala-editor/css/froala_editor.pkgd.min.css";

.rich-text-editor {
  min-width: auto;
  margin: 0 200px;
}

</style>