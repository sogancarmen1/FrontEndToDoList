<script setup lang="ts">
import { computed, ref } from "vue";
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxInput,
  ComboboxPortal,
  ComboboxRoot,
} from "radix-vue";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import { getData } from "@/utils/utils";
import { watch } from "vue";
import { members } from "@/stores/user";

const frameworks = ref([{ value: "1", label: "1" }]);

// const member.member = ref<string[]>([]);
const open = ref(false);
const searchTerm = ref("");

const member = members();
const filteredFrameworks = computed(() =>
  frameworks.value.filter((i) => !member.member.includes(i.label))
);

watch(searchTerm, async (newTerm) => {
  if (newTerm !== "" && newTerm.length === 4) {
    try {
      const result = await getData(
        `https://backend-application-v09m.onrender.com/users/email-contains?search=${newTerm}`
      );
      frameworks.value = result.data?.map((user: any) => {
        return {
          value: {
            idUser: user.id,
            roleType: user.role,
          },
          label: user.email,
        };
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
});
</script>

<template>
  <TagsInput class="px-0 gap-0 w-80" :model-value="member.member">
    <div class="flex gap-2 flex-wrap items-center px-3">
      <TagsInputItem v-for="item in member.member" :key="item" :value="item">
        <TagsInputItemText />
        <TagsInputItemDelete />
      </TagsInputItem>
    </div>

    <ComboboxRoot
      v-model="member.member"
      v-model:open="open"
      v-model:searchTerm="searchTerm"
      class="w-full"
    >
      <ComboboxAnchor as-child>
        <ComboboxInput placeholder="Add email..." as-child>
          <TagsInputInput
            class="w-full px-3"
            :class="member.member.length > 0 ? 'mt-2' : ''"
            @keydown.enter.prevent
          />
        </ComboboxInput>
      </ComboboxAnchor>

      <ComboboxPortal>
        <ComboboxContent class="z-50 relative">
          <CommandList
            position="popper"
            class="w-[--radix-popper-anchor-width] rounded-md mt-2 border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            <CommandEmpty />
            <CommandGroup>
              <CommandItem
                v-for="framework in filteredFrameworks"
                :key="framework.value"
                :value="framework.label"
                @select.prevent="
                  (ev: any) => {
                    if (typeof ev.detail.value === 'string') {
                      searchTerm = '';
                      member.member.push(ev.detail.value);
                    }

                    if (filteredFrameworks.length === 0) {
                      open = false;
                    }
                  }
                "
              >
                {{ framework.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </TagsInput>
</template>
