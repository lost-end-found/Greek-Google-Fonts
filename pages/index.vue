<template>
  <div class="min-h-screen bg-gray-100">
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Font Combinations -->
            <div v-for="(combo, index) in fontStore.getAllCombinations" :key="index" 
                 class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-6">
                <h2 :style="{ fontFamily: combo.heading }" class="text-2xl mb-4">
                  {{ combo.heading }}
                </h2>
                <p :style="{ fontFamily: combo.body }" class="text-gray-600">
                  Η γρήγορη καφέ αλεπού πηδάει πάνω από το τεμπέλικο σκυλί.
                  The quick brown fox jumps over the lazy dog.
                </p>
                <div class="mt-4 text-sm text-gray-500">
                  <p>Heading: {{ combo.heading }}</p>
                  <p>Body: {{ combo.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useFontsStore } from '~/stores/fonts'

const fontStore = useFontsStore()
</script> 