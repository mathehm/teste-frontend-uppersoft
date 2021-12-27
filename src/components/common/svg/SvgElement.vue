<template>
  <svg
    v-if="name"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconData.width"
    :height="iconData.height"
    :viewBox="iconData.viewBox"
    :aria-labelledby="`${iconData.name.replace(' ', '-')}-icon`"
    role="presentation"
    @click="click()"
  >
    <title :id="`${iconData.name.replace(' ', '-')}-icon`">
      {{ iconData.name }}
    </title>

    <g :fill="color">
      <component :is="name" />
    </g>
  </svg>
</template>

<script>
const Edit = () => import("@/components/common/svg/Edit.vue");
const Eye = () => import("@/components/common/svg/Eye.vue");
const EyeOff = () => import("@/components/common/svg/Eye-off.vue");

export default {
  name: "SvgBase",

  components: {
    Edit,
    Eye,
    EyeOff,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    viewBox: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconData() {
      switch (this.name) {
        case "Edit":
          return this.defaultData("24", "24", "0 0 30 30");
        case "Eye":
          return this.defaultData("40", "40", "0 0 25 25");
        case "Eye-off":
          return this.defaultData("40", "40", "0 0 25 25");
        default:
          return this.defaultData("20");
      }
    },
  },

  methods: {
    defaultData(width, height = null, viewBox = null) {
      return {
        name: this.name ? this.name : this.icon,
        width: this.width ? this.width : width,
        height: this.height ? this.height : height || width,
        viewBox: this.viewBox
          ? this.viewBox
          : viewBox || `0 0 ${width} ${height || width}`,
      };
    },

    click() {
      this.$emit("click");
    },
  },
};
</script>