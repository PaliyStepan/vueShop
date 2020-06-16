<template>
    <div class="select">
        <div class="select__wrap">
            <p
                class="title"
                @click="isVisible = !isVisible"
            >{{selected}}</p>
            <div class="options"
                 v-show="isVisible"
            >
                <p
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOption(option)"
                >
                    {{option.name}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default(){
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data(){
            return{
                isVisible: false
            }
        },
        methods: {
            selectOption(option){
                this.$emit('select', option);
                this.isVisible = false;
            },
            hideSelect(){
                this.isVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style scoped lang="sass">
    .select
        position: relative
        &__wrap
            justify-content: center
            display: flex
    .options
        position: absolute
        border: 1px solid #ddd
        top: 100%
        left: 50%
        transform: translateX(-50%)
        width: 250px
        background-color: #fff
        p
            margin: 0
            &:hover
                background-color: #e7e7e7
                cursor: pointer
    .title
        border: 1px solid #000
        width: 250px
        cursor: pointer
        transition: all 0.3s
</style>
