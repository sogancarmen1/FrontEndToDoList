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
import { getData } from "@/utils/utils";
import { watch } from "vue";
import { members, assignTo } from "@/stores/user";

const frameworks = ref([{ value: "1", label: "1" }]);

// const member.member = ref<string[]>([]);
const open = ref(false);
const searchTerm = ref("");

const member = members();
const assignToStore = assignTo();
const filteredFrameworks = computed(() =>
  frameworks.value.filter((i) => !member.member.includes(i.label))
);

import { useRoute } from "vue-router";
const route = useRoute();

watch(searchTerm, async (newTerm) => {
  if (newTerm !== "" && newTerm.length === 4) {
    try {
      const result = await getData(
        `https://backend-application-v09m.onrender.com/projects/${route.params.id}/members`
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
  <div class="w-80">
    <ComboboxRoot
      v-model="assignToStore.userAssigned"
      v-model:open="open"
      v-model:searchTerm="searchTerm"
      class="w-full"
    >
      <ComboboxAnchor as-child>
        <ComboboxInput placeholder="Add email..." as-child>
          <input
            v-model="searchTerm"
            class="w-full px-3 mt-2 py-2 border border-slate-300 dark:bg-black/20 dark:text-white text-black bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
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
                      assignToStore.userAssigned = ev.detail.value; // Remplacer l'email sélectionné
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

    <!-- Afficher l'email sélectionné -->
    <!-- <p class="mt-2 text-sm">
      <span v-if="assignToStore.userAssigned">{{
        assignToStore.userAssigned
      }}</span>
      <span v-else class="text-gray-400">No email selected</span>
    </p> -->
  </div>
</template>
