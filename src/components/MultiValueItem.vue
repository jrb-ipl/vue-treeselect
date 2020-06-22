<script>
  import { onLeftClick } from '../utils'
  import DeleteIcon from './icons/Delete'

  export default {
    name: 'vue-treeselect--multi-value-item',
    inject: [ 'instance' ],

    props: {
      node: {
        type: Object,
        required: true,
      },
    },

    methods: {
      handleMouseDown: onLeftClick(function handleMouseDown() {
        const { instance, node } = this
        const children = instance.getNode(node.id)
        children.children.forEach(child => {
          if (instance.isSelected(child)) {
            instance._deselectNode(child)
            instance.buildForestState()
          }
        })
      }),

      renderChildrenChips(parent) {
        const { instance } = this
        const { maxVisibleChildren } = instance

        if (parent.children.length === instance.getNode(parent.id).children.length) {
          return <span class="vue-treeselect__multi-counter">(all)</span>
        }

        if (parent.children.length > maxVisibleChildren) {
          return <span class="vue-treeselect__multi-counter">({parent.children.length})</span>
        }

        if (parent.children.length <= maxVisibleChildren) {
          return parent.children
            .splice(0, maxVisibleChildren)
            .map(element =>
              (<span class="vue-treeselect__multi-children">{element.label}</span>),
            )
        }
      },
    },

    render() {
      const { node } = this

      const itemClass = {
        'vue-treeselect__multi-value-item': true,
        'vue-treeselect__multi-value-item-disabled': node.isDisabled,
        'vue-treeselect__multi-value-item-new': node.isNew,
      }

      const parentClass = {
        'vue-treeselect__multi-parent-value': true,
      }

      return (
        <div class="vue-treeselect__multi-value-item-container">
          <div class={itemClass} onMousedown={this.handleMouseDown}>
              <span class={parentClass}> {node.label}: </span>
              { this.renderChildrenChips(node) }
            <span class="vue-treeselect__icon vue-treeselect__value-remove"><DeleteIcon /></span>
          </div>
        </div>
      )
    },
  }
</script>
