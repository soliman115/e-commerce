<template>
    <div class="container mb-5">
        <div>
            <shosesFilter/>
        </div>

        <div>
            <womensShoses/>
        </div>
        <div>
            <healsShose/>
        </div>
        <div>
            <mensShose/>
        </div>
    </div>
</template>

<script>
    import shosesFilter from "../components/shosesFilter.vue";
    import womensShoses from "../components/womensShoses.vue";
    import healsShose from "../components/healsShose.vue";
    import mensShose from "../components/mensShose.vue";
    export default {
  components: {
    shosesFilter,
    womensShoses,
    healsShose,
    mensShose
    }}
</script>
