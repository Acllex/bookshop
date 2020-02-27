<template>
    <div>
        <input type="text" v-model="value" @keyup="setdata()">
    </div>
</template>

<script>
import event from "@/api/event"

export default {
    name:'BusB',
    data() {
        return {
            value:''
        }
    },
    methods: {
        setdata(){
            event.$emit('data',this.value);
        }
    },
}
</script>