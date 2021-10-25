import { figmaConfig } from "@/stories/helpers";
import { addDescription } from "@/utils/addDescription";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";

export default {
  title: "Layouts/TabsVue",
  parameters: {
    design: figmaConfig("933%3A1"),
    docs: {
      description: {
        component:
          "The Tabs component is a navigation element to switch between content sections, and should be used as the main content switch in a page. Tabs are added with the `<Tab>` component.",
      },
    },
  },
  component: Tabs,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs, Tab },
  template: `<Tabs v-bind="$props">
    <Tab title="Music">Music content.</Tab>
    <Tab title="Pictures">Pictures content.</Tab>
    <Tab title="Videos">Videos content.</Tab>
    <Tab title="Document">Document content.</Tab>
  </Tabs>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Boxed = Template.bind({});
addDescription(
  Boxed,
  "Set the `boxed` prop to `true` use a different variation."
);
Boxed.args = { boxed: true };
