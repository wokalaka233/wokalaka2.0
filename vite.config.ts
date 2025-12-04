import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：使用相对路径 './' 适配所有部署环境（包括子路径和自定义域名）
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})