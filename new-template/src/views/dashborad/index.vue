<!--
 * @Description: 首页
 * @Author: zhang zhen
 * @Date: 2024-12-27 11:00:54
 * @LastEditors: zhang zhen
 * @LastEditTime: 2025-01-05 15:29:07
 * @FilePath: /new-template/src/views/dashborad/index.vue
-->
<template>
    <a-layout class="dashboard-layout">

    <!-- Main Content -->
    <a-layout-content class="inline-box">
      <a-row gutter="16">
        <!-- 项目 -->
        <a-col span="16">
          <a-card title="项目" bordered>
            <a-row gutter="16">
              <a-col v-for="item in projectData" :key="item.name" span="8">
                <a-card>
                  <a-avatar :icon="item.icon" />
                  <div class="project-name">{{ item.name }}</div>
                  <div class="project-desc">{{ item.description }}</div>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <!-- 快捷导航 -->
        <a-col span="8">
          <a-card title="快捷导航" bordered>
            <a-row gutter="16">
              <a-col v-for="menu in quickMenu" :key="menu.title" span="12">
                <a-button block style="margin-bottom: 16px;">{{ menu.title }}</a-button>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>

      <!-- 最近动态 -->
      <a-row gutter="16" class="recent-activity">
        <a-col span="16">
          <a-card title="最近动态" bordered>
            <a-timeline>
              <a-timeline-item v-for="activity in recentActivity" :key="activity.time">
                {{ activity.user }} {{ activity.action }} {{ activity.target }} - {{ activity.time }}
              </a-timeline-item>
            </a-timeline>
          </a-card>
        </a-col>

        <!-- 待办事项 -->
        <a-col span="8">
          <a-card title="待办事项" bordered>
            <!-- <a-list
              :data-source="todos"
              :render-item="(todo: any) => (
                <a-list-item>
                  <a-checkbox>{{ todo.content }}</a-checkbox>
                </a-list-item>
              )"
            /> -->
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { UserOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons-vue';
  // 项目数据
  const projectData = ref([
      { name: 'Vue', description: '现在的你决定将来的你。', icon: HomeOutlined },
      { name: 'Github', description: '不要等待机会，而要创造机会。', icon: SettingOutlined },
      { name: 'React', description: '健康的身体是实现目标的基石。', icon: UserOutlined },
    ]);

    // 快捷导航数据
    const quickMenu = ref([
      { title: '首页', icon: HomeOutlined },
      { title: '仪表盘', icon: SettingOutlined },
      { title: '组件', icon: UserOutlined },
    ]);

    // 最近动态数据
    const recentActivity = ref([
      { user: '威廉', action: '创建了项目', target: 'Vue', time: '刚刚' },
      { user: '艾文', action: '关注了', target: '威廉', time: '1小时前' },
    ]);

    // 待办事项
    const todos = ref([
      { content: '审核前端代码提交', completed: false },
      { content: '系统性能优化', completed: false },
      { content: '安全检查', completed: false },
    ]);
  </script>
  
  <style lang="less" scoped>
  // .dashboard-layout {
  //   height: 100%;
  // }

  :deep(.ant-card) {
    margin-bottom: 15px;
  }
  .inline-box {
    padding: 0;
    background-color: transparent;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    font-size: 18px;
    font-weight: bold;
  }
  .project-name {
    font-weight: bold;
  }
  </style>
  