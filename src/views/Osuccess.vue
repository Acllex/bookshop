<template>
  <div>
    <Head></Head>
    <div class="bodyer">
      <div class="pays">
        <span>支付成功</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Head from "@/components/listhead/Head";
export default {
  components: { Head },
  data() {
    return {};
  }
};
</script>

<style scoped>
.bodyer{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pays{

}
.pays>span{
  font-size: .6rem;
  font-weight: 700;
  color: blueviolet;
}
</style>