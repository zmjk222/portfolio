# GJP作品合集网站

这是一个展示个人作品集的响应式网站，采用现代化的设计风格。

## 部署指南

### 方法一：使用 GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub 账号
   - 点击右上角 "+" 图标，选择 "New repository"
   - 仓库名称填写：`portfolio`（或其他你喜欢的名称）
   - 选择 "Public"（公开）
   - 点击 "Create repository"

2. **上传网站文件**
   - 克隆仓库到本地：
     ```bash
     git clone https://github.com/你的用户名/portfolio.git
     ```
   - 将所有网站文件复制到仓库文件夹中
   - 提交文件：
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

3. **启用 GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到 "Pages" 选项
   - 在 "Source" 下选择 "main" 分支
   - 点击 "Save"
   - 等待几分钟，你的网站就会在 `https://你的用户名.github.io/portfolio` 上线

### 方法二：使用 Netlify（更快的访问速度）

1. **注册 Netlify**
   - 访问 [netlify.com](https://www.netlify.com)
   - 使用 GitHub 账号登录

2. **部署网站**
   - 点击 "New site from Git"
   - 选择 GitHub
   - 选择你的仓库
   - 点击 "Deploy site"

3. **自定义域名（可选）**
   - 在 "Domain settings" 中可以设置自己的域名
   - Netlify 会自动提供一个 `.netlify.app` 的域名

### 方法三：使用传统虚拟主机

1. **购买虚拟主机**
   - 可选择阿里云、腾讯云等服务商
   - 选择支持静态网页的套餐

2. **上传文件**
   - 使用 FTP 工具（如 FileZilla）
   - 将所有文件上传到网站根目录

3. **绑定域名**
   - 购买域名
   - 在虚拟主机控制面板中绑定域名
   - 设置域名解析

## 文件结构 