<template>
    <div>
        <span>{{v}}</span>
    </div>
</template>

<script>
import event from "@/api/event"
export default {
    name:'BusA',
    data() {
        return {
            v:''
        }
    },
    methods: {
        getdata() {
            event.$on('data',(res)=>{
                this.v = res;
            })
        }
    },
    mounted() {
        this.getdata();
    },
}
</script>