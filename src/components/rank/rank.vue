<template>
	<div class="rank" ref="rank">
		<scroll class="toplist" ref="scroll">
			<ul>
				<li class="item" v-for="item in yunTopList" :key="item.id">
					<div class="icon">
						<img v-lazy="item.coverImgUrl" width="100" height="100">
					</div>
					<ul class="songlist">
						<li class="song" v-for="(song, index) in item.top" :key="index">
							<span>{{index + 1}}.</span>
							<span>{{song.name}} - {{song.ar[0].name}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</scroll>
	</div>
</template>

<script>
import {getTop} from 'api/rank'
import Scroll from 'base/scroll/scroll'

const TOP = [0, 1, 2, 3, 4, 22, 23]

export default {
	data () {
		return {
			yunTopList: []
		}
	},
	created () {
		this._getTopList()
	},
	methods: {
		_getTopList () {
			TOP.forEach(id => {
				getTop(id).then(res => {
					let list = res.data.playlist
					list.top = list.tracks.slice(0, 3)
					this.yunTopList.push(list)
				})
			})
		}
	},
	components: {
		Scroll
	}
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";

.rank {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .toplist {
    height: 100%;
    overflow: hidden;
    padding-top: 5px;
    .item {
      display: flex;
      margin: 0 10px;
      padding: 3px 0;
      height: 100px;
      border-bottom: 1px solid rgb(228, 228, 228);
      &:last-child {
        padding-bottom: 20px;
      }
      .icon {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
        img {
          border-radius: 3px;
        }
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        // background: $color-dialog-background;
        color: $color-text;
        font-size: $font-size-small-x;
        .song {
          @include no-wrap();
          line-height: 30px;
        }
      }
    }
  }
}
</style>