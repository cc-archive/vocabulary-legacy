import VButton from "@/components/buttons/Vue/VButton.vue";
import AppModal from "./AppModal.vue";

export default {
  title: "Patterns/VModal",
  component: AppModal,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
};

const modalContainerTemplate = `<div>
  <VButton @click="modalVisible=true">Open Modal</VButton>
  <app-modal v-if="modalVisible" title="App Modal" @close="modalVisible=false">
    <div class="meta-card">
      <hr class="margin-bottom-bigger">
      <div class="modal-content padding-left-bigger padding-right-bigger padding-bottom-bigger">
        <p>This is App modal content </p>
        <p>When adding a modal, you have to handle it's 'close' event to close it from the parent component.</p>
      </div>
    </div>
  </app-modal>
  </div>`;

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppModal, VButton },
  template: modalContainerTemplate,
  data() {
    return {
      modalVisible: true,
    };
  },
});

export const Default = Template.bind({});
