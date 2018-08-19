<template>
  <div :class="'sf-upload-list sf-upload-list--' + listType">
    <div 
      v-for="(item, index) in fileList" 
      :key="index"
      :class="'sf-upload-item sf-upload-item--' + item.status"
    >
         
        <div v-if="listType === 'picture'" class="sf-upload-item sf-upload-item__thumbnail">
          <img class="sf-upload-item__thumbnail-img" :src="item.thumbUrl || item.url" />
        </div>
        <span v-else class="sf-upload-item__icon">
          <Icon type="md-attach" />  
        </span>
        <a 
          v-if="item.url" 
          class="sf-upload-item__name" 
          target="_blank" 
          :href="item.url"
        >
          {{ item.name }}
        </a>
        <Tooltip 
          v-else
          class="sf-upload-item__name"
          :content="item.error"
          placement="top"
        >
          {{ item.name }}
        </Tooltip>
        <a class="sf-upload-item__remove" @click="$emit('on-remove', item)" > 
          <Icon type="md-close" />
        </a>
    </div>
  </div>
</template>
<script>
import {Icon, Tooltip} from 'iview'
export default {
  components: {Icon, Tooltip},
  props: ['listType', 'fileList']
}
</script>
