<template>
    <div class="flex content-center justify-center">
        <vue3-flip-countdown
          :deadline="deadline"
          :show-days="false"
          mainColor="#fff"
          labelColor="#fff"
        ></vue3-flip-countdown>
    </div>
</template>

<script>
import { addMinutes, format } from 'date-fns'

export default {
  data() {
    return {
      deadline: format(addMinutes(new Date(), 45), 'yyyy-MM-dd HH:mm:ss'),
    };
  },
};
</script>