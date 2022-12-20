import { defineAppSetup } from '@slidev/types'
import Countdown from 'vue3-flip-countdown'

export default defineAppSetup(({ app }) => {
    app.use(Countdown)
})