# SCULP After Dark V1 - 质量与交付报告

日期：2026-10-20。状态：开发完成、Draft PR、独立私有预览；未合并或覆盖生产。

## 范围与基线

- 生产基线：`91e561953f719cdc931af65aed74d8801e3c5bf7`，原站对照 `2ez4jz/sculpstudio` 的 `eb79edbc9f0c9c8424c04333d0f5f6b1aa261283`。
- 开发分支：`design/after-dark-v1`。静态 HTML/CSS/JS 和 hash 路由保留，没有项目重建。
- 预览：https://sculp-after-dark-v1-preview.museycyk.chatgpt.site （当前账户私有）。PR：https://github.com/2ez4jz/sculp-afterdark/pull/1 。
- 核对所有原作品来源、服务和价格。原表单提交处理与 analytics.js 字节一致；未改后端、数据库、认证、密钥、环境变量或真实客户数据。

## Skills 与设计执行

完整读取 juliobsz/skills README、awwwards、jury 和相关参考；上游锁定 `ea8f1455c2b0e71469d4ecfd32f47862b834d2d0`。

安装命令：`DISABLE_TELEMETRY=1 npx --yes skills add juliobsz/skills -g -a codex -y`；`npx skills list -g` 确认两个 Skill 对 Codex 可用。当前会话通过完整读取说明应用，不声称会话内自动注册了新的 slash 命令。评估 serve/shoot/audit/browser/font 脚本，QA 依赖装在仓库外。指定的 Playwright 测试优先于 skill 的默认浏览器偏好。

方向“以光塑形”比较和理由在 DESIGN.md：炭黑与灰阶承托自然色作品，Bodoni Moda + Instrument Sans 自托管，编辑式比例、透明定价列、真实艺术家入口和大字 Footer。减少手机用户到询价的距离。原生 View Transitions、短暂揭示和可逆妆面细节查看；无新增运行时依赖、WebGL、加载器或滚动接管。原业务文案中的标点与真实内容优先保留。

## 独立 /jury 前后对比

以下为两个独立批评者基于截图与测量的 Skill 模拟评分，**不是 Awwwards 官方评分**；评分不是仪器实测数据。最终批评者没有看到代码、设计说明或基线评分。一次中间评审意外看到基线信息，被作废为问题备忘；另启全新盲评作为最终评分。

| 维度 / 10 | 改版前 | 改版后 |
|---|---:|---:|
| Design | 7.0 | 7.8 |
| Usability | 6.5 | 8.0 |
| Creativity | 6.0 | 7.0 |
| Content | 7.0 | 7.6 |
| Accessibility | 5.0 | 8.2 |
| Responsive | 7.0 | 8.0 |
| 加权总分 | 6.65 | 7.68 |

完整证据论证见 AFTER_DARK_V1_BEFORE_JURY.md / AFTER_DARK_V1_AFTER_JURY.md。主要维度未全部达到内部 8 分目标，不通过调整评分来宣称达标。已先修复高影响问题：对比度、焦点/菜单、Bridal 留白、锚点落点、按钮可访问名称、首屏艺术家链接悬停、邮件触控面积。保留范围内剩余问题是部分页首构图重复、768px Portfolio 信息间距和缺少经核实的项目 brief/造型决策叙事；后续不应虚构案例或无限追加特效。

## 真实浏览器验证

Playwright 1.55.1、Chromium 140.0.7339.186、axe-core 4.14.0、Lighthouse 13.5.0。最新 Playwright 浏览器下载失败后使用可安装的固定版本；没有将工具失败视为网站失败。测试源为本地静态生产文件，没有开发覆盖层。

| 检查 | 结果 | 证据包路径 |
|---|---|---|
| 1440 / 768 / 390 / 375px × 10 路由状态 | 40 组合，无横向溢出、无运行异常、一页一个可见 H1 | after-verified-matrix/ |
| 最终悬停/邮件点击区域修改 | 首页和询价页 8 组合复核，0 axe、0 小目标、0 溢出 | after-interaction-polish-matrix/ |
| 全 8 位艺术家 × 桌面/手机 | 16 视图可访问，原图片数组顺序和数量全部一致 | final-links/report.json |
| WCAG 2/2.1/2.2 A/AA axe 标签 | 最终矩阵每组 0 违规；不等于全面合规认证 | summary.json |
| 键盘 | skip link 第一；22 个真实 Tab 焦点均可见并有轮廓 | final-proof/proof.json |
| 移动菜单 | 焦点约束、Escape、inert 与焦点返回通过 | interaction-results.json |
| 减少动态效果 | 10 状态无隐藏内容/无限动画，交互检查无运行动画/平滑滚动 | matrix + interaction-results.json |
| 交互与业务回归 | 14 项通过；所有 POST 拦截，无邮件或客户写入 | interaction-results.json |
| SEO / 404 / 控制台 | 10 状态标题描述；OG图片、favicon、robots、sitemap 200；不存在路径404；应用console错误0 | meta-results.json |

业务回归覆盖：skip link、菜单、妆面细节开关、服务预选、必填验证、过去日期、入库失败不发邮件、邮件失败保留输入、重试复用 ID、确认成功后重置/成功页/归因/抄送/单次统计、历史返回、Mira13张/Michelle10张、减少动态效果、零应用异常。其他艺术家图数：Angelina26、Elaine13、Emily8、Giselle19、Miranda40、Yuki13。

## 性能与测量边界

默认模拟移动 Lighthouse，采用与 GitHub Pages 实际相同的 gzip 文本传输；无缓存，本地临时静态服务器。无 CDN/公网/真实用户效果保证。

| 条件 | 前性能 | 后性能 | 前LCP | 后LCP | 后CLS / TBT |
|---|---:|---:|---:|---:|---|
| gzip、单独性能审计 | 90 | 99 | 3.612s | 2.156s | 0 / 8ms |
| 同条件最终代码重复测量 | - | 99 | - | 2.107s | 0 / 0ms |
| gzip、最终全类别审计 | 90（前一轮） | 71 | 3.616s | 2.105s | 0 / 1899.5ms |

最终全类别的无障碍/最佳实践/SEO 都为 100；但其性能 71 必须保留。long-tasks 显示 `_lighthouse-eval.js` 注入审计任务 913ms + 722ms，可能贡献了测量开销；据此另做隔离性能测量，两次均为99，不能据此删除低分或声称全场景99。前一轮全类别曾为99（LCP2.108s/TBT0），但包含后来修正的标签名称问题，不用作最终无障碍凭据。

最初无压缩本地测试：前82/LCP4.358s，后90/LCP3.457s，CLS均0；与gzip组分开保存，不混为同条件比较。基线 Lighthouse 环境外链 Google 字体未直接加载；前后截图通过验证后的字体响应恢复正确原字体，性能比较仍受该环境限制。首屏自托管两字体共44,620B，响应式Hero420/700px，新版初始实际传输347,842B，非全站20MB图片库存。

实验室 Event Timing 样本48-56ms，**不是现场 INP**。LCP≤2.5s、CLS≤0.1 在所列实验条件下达到；没有现场 CWV 或 INP≤200ms 的结论。上线后需积累真实用户数据。

原始 Skill 审计保留：静态9个H1来自隐藏hash路由；图片总重量是全集库存，不是首屏传输；其 crawler 跳过 hash 导航。原始1FAIL/3WARN没有篡改，用渲染H1、真实网络传输、单独转场帧和键盘复核补充。原标点保留以遵从内容要求。截图不能证明完整动效体感、所有屏幕阅读器或真实手机硬件表现。

## 上线与回滚

预览是独立私有 Site，未改变现有官网的访问权限。静态镜像提交 `21849d2b5cad70aae015ab81cea5e0d01628139f`，与最终源码静态文件一致。预览域名不在原 enquiry API CORS 白名单，真实发送不在预览验收范围内；不为了预览扩大后台授权。测试链路使用拦截。上线后在现有授权域名执行一次受控业务验收，并观察真实移动网络/CWV。

建议审阅预览后 Squash and merge 此 Draft PR，通过已有 GitHub Pages 流程发布；本任务未执行合并。分支包含一次增量树提交失误及紧接的完整树修复，交付前已验证249个原/新增文件、本地与远程源码一致，main未受影响。保留真实提交记录。

当前生产无需回滚。未来若合并，可通过 GitHub Revert 撤销该合并，或恢复基线91e5619静态文件再运行Pages部署；无数据库回滚。原站及当前Afterdark生产继续可用。

## 交付索引

- WORK_LOG.md：按多伦多日期记录的完整工作日志；DESIGN.md：现有内容、受众、备选概念、设计系统与取舍。
- 代码提交：5c72a92主视觉；64eb1c1交互细节（随后修复文件树）；f592bf2完整源树恢复；文档提交见PR记录。
- PDF质量报告、桌面/手机对比PNG、证据ZIP：包含正确字体的前后截图、原始LighthouseHTML/JSON、独立评分卡、浏览器结果、QA脚本。
- 未测试真实投递、真实客户写入、屏幕阅读器全流程、实机硬件和生产CDN下CWV；不把自动化检测或模拟评分称为这类验收。
