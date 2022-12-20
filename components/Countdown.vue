<template>
    <div class="flex content-center justify-center">
        <vue3-flip-countdown deadline="2022-12-21 14:00:00" :show-days="false"></vue3-flip-countdown>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 30,
    };
  },
};
</script>