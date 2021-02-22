<template>
    <div class="project">
        <div class="home">
          <div class="title">
            <home-nav></home-nav>
          </div>
          <div class="content2">
            <div class="description">
              <h1>网站快速成型工具</h1>
              <div>GreatUI, 一套基于Vue2.0开发的酷炫、多样的组件库</div>
            </div>
            <div class="animation">
              <button @click="goForward">START NOW</button>
            </div>
            <div class="options">
               <home-options></home-options>
            </div>
          </div>
        </div>
        <div class="footer">
          <footers></footers>
        </div>
    </div>
</template>

<script>
import footers from './footer.vue'
import HomeNav from './common/CommonHead'
import HomeOptions from './HomeOptions.vue'
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Welcome to Your Great-UI'
        }
    },
    components: {
        HomeNav,
        HomeOptions,
        footers
    },
    methods: {
        goForward (){
            this.$router.push('/componentPage')
        }
    }
}
</script>

<style scoped lang="scss">
    @keyframes problem {
        0% {
                clip-path: var(--slice-1);
                transform: translate(-20px, -10px);
            }
  
          10% {
                clip-path: var(--slice-3);
                transform: translate(10px, 10px);
          }
  
          20% {
                clip-path: var(--slice-1);
                transform: translate(-10px, 10px);
          }
  
          30% {
                clip-path: var(--slice-3);
                transform: translate(0px, 5px);
          }
  
          40% {
                clip-path: var(--slice-2);
                transform: translate(-5px, 0px);
          }
  
          50% {
                clip-path: var(--slice-3);
                transform: translate(5px, 0px);
          }
  
          60% {
                clip-path: var(--slice-4);
                transform: translate(5px, 10px);
          }
  
          70% {
                clip-path: var(--slice-2);
                transform: translate(-10px, 10px);
          }
  
          80% {
                clip-path: var(--slice-5);
                transform: translate(20px, -10px);
          }
  
          90% {
                clip-path: var(--slice-1);
                transform: translate(-10px, 0px);
          }
  
          100% {
                clip-path: var(--slice-1);
                transform: translate(0);
          }
    }
    .project {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .home {
        width: 100%;
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        .title {
          width: 100%;
          height: 80px;
          box-sizing: border-box;
          background: #fff;
        }
        .content2 {
          width: 100%;
          height: 1239px;
          box-sizing: border-box;
          margin-top: 10px;
          .description {
              width: 100%;
              height: 106px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              // background: rgb(235, 11, 235);
              align-items: center;
              background: linear-gradient(45deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%);
              h1 {
                height: 50px;
                font-size: 34px;
                color: #fff;
                mix-blend-mode: difference;
              }
              div {
                width: 100%;
                height: calc(100% - 50px);
                color: #888;
                font-size: 18px;
                text-align: center;
              }
          }
          .animation {
            width: 100%;
            height: 700px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F8F005;
            button {
              width: 380px;
              height: 86px;
              font-size: 36px;
              background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              color: #fff;
              letter-spacing: 3px;
              box-shadow: 6px 0 0 #00E6F6;
              outline: transparent;
              position: relative;
              border: 0;
              &::after {
                @extend button;
                --slice-0: inset(50% 50% 50% 50%);
                --slice-1: inset(80% -6px 0 0);
                --slice-2: inset(50% -6px 30% 0);
                --slice-3: inset(10% -6px 85% 0);
                --slice-4: inset(40% -6px 43% 0);
                --slice-5: inset(80% -6px 5% 0);
                content: 'START NOW';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: linear-gradient(45deg, transparent 3%, #00E6F6 5%, #FF013C 5%);
                text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
              }
              &:hover {
                cursor: pointer;
              }
              &:hover::after {
                animation: problem 1s infinite;
                animation-timing-function: steps(2, end);
              }              
            }
          }
          .options {
            width: 100%;
            height: calc(100% - 826px);
            margin-top: 30px;
          }
        }
      }
      .footer {
          margin-top: 80px;
          width: 100%;
          height: 340px;
          background-color: #f7fbfd;
      }
    }
</style>
