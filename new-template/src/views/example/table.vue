<!--
 * @Description: 表格例子
 * @Author: zhang zhen
 * @Date: 2025-01-01 15:46:23
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-04 15:20:49
 * @FilePath: /new-template/src/views/example/table.vue
-->
<template>
  <a-flex justify="space-between" align="center" style="margin-bottom: 15px;">
    <a-form style="flex: 1 0 0;">
      <a-row :gutter="15">
        <a-col :span="6">
          <a-form-item label="name" name="name">
            <a-input v-model:value="formData.name" style="width: 100%;" placeholder="请输入" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="age" name="age">
            <a-input-number v-model:value="formData.age" style="width: 100%;" placeholder="请输入" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item>
            <a-space>
              <a-button type="primary">
                <template #icon>
                  <SearchOutlined />
                </template>查询
              </a-button>
              <a-button>
                <template #icon>
                  <ReloadOutlined />
                </template>重置
              </a-button>
            </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <a-space>
      <a-button type="primary">
        <template #icon>
          <PlusOutlined />
        </template>新增
      </a-button>
    </a-space>
  </a-flex>
  <a-table :columns="columns" :data-source="data" bordered :scroll="{ x: 1500, y: 530 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { PlusOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons-vue'
import type { TableColumnsType } from 'ant-design-vue';
const columns: TableColumnsType = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: '', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

interface FormData {
  name?: string,
  age?: number
}
const formData = ref<FormData>({});
</script>