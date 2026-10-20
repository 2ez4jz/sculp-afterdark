# SCULP Studio · 工作日志

按多伦多时间记录网站修改。每次改动后，在这里追加日期、改动内容和对应提交，方便回看。

## 2026-10-20

### The SCULP Edit V2 - 全面重设（独立开发）

- 用户授权风格与客户流程重设，不再限定暗色。独立 design/sculp-editorial-v2 分支，以V1的2c58790为基线，生产main保持91e5619。
- 以真实作品的妆面/发型观察连接造型偏好与询价；明亮底色、钴蓝、SCULP杂志式字标、独立内页构图。不虚构客户brief、结果或资历。
- 复用原服务、价格与完整作品，将现有片段生成真实静态页面，保留旧hash转接；每页独立元信息和H1，无框架迁移。
- 两步询价保留原字段与先入库后邮件、失败保留和重试ID流程，仅适配原生成功页导航与路径统计；未改后台、数据库、密钥、环境变量或来源白名单。


- V2 第一轮盲评 7.41，未达目标；继续落实细节裁切与单细节保存、表单前置缩略参考、手机首屏照片节奏、真实共享图片转场和重叠简介的照片观察。所有描述限定于现有照片可见内容。
- 浏览器已完成 19 页面 × 4 宽度共 76 组：axe 0、溢出 0、运行异常 0；19 项交互回归全部通过，所有 POST 模拟。逐页原始 HTML/元信息/分享图验证 19 组通过，真实 404；静态审计 0 FAIL / 0 WARN。
- Lighthouse 13.5 的完整手机实验室审计为性能/无障碍/最佳实践/SEO 各 100；LCP 1.584s、CLS 0、TBT 0。没有现场 INP。Miranda 图库使用 40 张 720px WebP 显示副本，全部 142 原图及其顺序仍完整可访问。
- The SCULP Edit V2 账户私有预览版本已部署成功，源码镜像提交 88f80f2490f7；保留原 V1 预览版本可回滚。正式官网及生产 main 保持原版本。本地后续盲评与各页面性能采集继续进行，最终结果另追加。

- 第二轮独立盲评 7.47，再修复真实中间帧中的旧图叠影、静止悬停链接、手机艺术家页留白和页脚孤立箭头。加入原有 Toronto bride 反馈的事件/响应/感受叙事，不新增未有依据的客户事实。
- 将参考流程扩展至八位艺术家的全部 142 张原始作品：打开照片后可带入询价，保存准确艺术家、作品序号与原图链接；可移除参考。21 项真实浏览器交互回归通过，照片查看器打开态 axe 0，所有 POST 继续模拟。
- 为实际使用的 171 张照片提供 420/720px 展示副本；保留完整原图和顺序。首屏加载后在空闲时提前解码附近照片，避免整本图库预载；滚动深度统计缓存页面高度，保留原事件与转换口径。
- 最终 76 组全路由与 32 组艺术家补充检查均 axe 0、溢出 0、异常 0；9 类页面独立手机实验室 LCP 0.752–1.384s、CLS 0，滚动冷采样 58–61fps（单帧峰值仍保留在原始报告）。Team 冷/热采样均61fps，最慢17ms。现场 INP 未测，不将软件 GPU 实验室数据承诺为真实设备帧率。
- 最终 Lighthouse 完整审计四项100，LCP1.582s、CLS0、TBT0，初始传输112,341bytes。无后台/数据库/密钥/环境变量变更；第三位全新独立评审进行最终核验，结果单独追加。

### After Dark Design V1.0 - 独立预览升级

- 新建 `design/after-dark-v1` 分支，生产基线为 `91e561953f719cdc931af65aed74d8801e3c5bf7`。本轮只提交分支和独立私有预览，不合并 main、不覆盖现有官网。
- 安装并完整读取 `juliobsz/skills` 的 awwwards / jury，锁定上游 `ea8f1455c2b0e71469d4ecfd32f47862b834d2d0`；CLI 全局列表确认 Codex 可用，当前会话通过读取 Skill 手动应用。独立评审只接收截图和测量结果。
- 基于现有静态 HTML、hash 路由、CSS 和 JavaScript 实现“以光塑形”视觉系统：炭黑层次、自然色作品、Bodoni Moda + Instrument Sans 自托管字体、非对称首屏、透明定价列、统一内页与最终转化区域。新增可逆的真实妆面细节查看交互；原生 View Transitions 渐进增强页面交接，无 WebGL、加载器或滚动接管，也无新增运行时包。
- 手机独立排版，Header 增加直接询价入口；补齐跳转正文、键盘焦点、移动菜单焦点约束和 Escape 返回、减少动态效果、路由标题/描述、favicon、分享图与品牌 404。仅改写 Portfolio 一句面向布局实现的说明，替换为帮助客户选择作品/艺术家的提示；业务事实、服务、价格、作品、联系方式均保留。
- 完整对比确认表单/API 提交处理与 analytics.js 字节内容未变，所有原作品来源及价格字符串保留；未修改数据库、后端逻辑、验证、密钥或环境变量。浏览器测试中的 POST 全部模拟，未发送邮件或创建客户。
- 已完成多轮 Playwright：1440/768/390/375px × 10 路由视图，包含 Mira、Michelle 与成功页；修复 Concierge 对比度、程序焦点样式、内页和 Bridal gutter。最终矩阵及 14 项交互回归、axe、减少动态效果、控制台、图片和链接检查详见质量报告。
- 传输优化：字体从外部链路改为 2 个 WOFF2 共约 44.6KB；新增 420/700px 首页响应式图，不改变原图色彩与构图。按实际官网 gzip 传输方式进行本地 Lighthouse：性能 99、无障碍/最佳实践/SEO 均 100，模拟手机 LCP 2.108s、CLS 0、TBT 0。现场用户 INP/真实 CWV 尚无数据；Event Timing 只作实验室样本。
- /jury 初评与复评是独立模拟评分，不是 Awwwards 官方评分。原始静态审计对 hash SPA 的隐藏文章 H1 和图片全集存在误计；记录原始结果并用渲染后的一页一个 H1、实际初始传输与 axe 复核，不篡改审计分数。
- 最终交付：Draft PR #1、账户私有预览部署成功；独立模拟评审 6.65 → 7.68，如实记录主要项目未全达8分。40组合+8组修复复测、16组全艺术家检查、14交互回归、真实404/SEO验证完成；质量报告与独立评分卡见 docs/AFTER_DARK_V1_QUALITY.md，生产未合并。
- 分支提交校验发现一次远程文件树仅包含增量文件，立即以完整视觉源码树重建后追加修复提交；本地与预览完整，main 未受影响。交付前再次核对全树、资源哈希与分支内容。
- 最终盲评补齐首屏艺术家入口的下划线与箭头位移反馈，直接邮件入口增加至 28px 高；另做 8 组首页/询价页复测。完整审计复跑出现审计注入脚本长任务，保留该次性能 71 / TBT 1899.5ms 原始结果；同条件隔离性能测量两次均为 99（LCP 2.156s / 2.107s，TBT 8ms / 0ms）。此差异与基线外链字体加载限制均在质量报告披露。


- 逐页对照原站线上版本与源码 `eb79edb`，同步 Afterdark 内容至 10 月 18 日原站状态：Mira 13 张作品、Michelle 10 张作品、全部服务与价格、团队、地址、联系方式及咨询文案。补入 23 张同源 WebP，保留 Afterdark 深色视觉、字体、动画及已修边的首页 Hero。
- 将询价从旧 mailto 改为原站的直接提交流程：先保存 SCULPY 线索，再发送现有 FormSubmit 邮件通知；收件人为 sculpstudio.ca@gmail.com，抄送 museycyk@gmail.com。同步 24 小时回复承诺、成功页、发送中状态、防重复提交、失败保留数据、日期限制与 UTM 归因；原生表单回跳地址适配 Afterdark 自身路径。
- 同步原站 canonical、分享元信息、robots.txt 与 sitemap.xml，canonical 继续指向主官网；未复制主站 CNAME。更新分析事件为确认提交成功后记录，移除旧 mailto 成功口径，并补齐历史返回导航事件。
- 同步更新 Supabase sculp-enquiry 的精确来源白名单，加入 Afterdark 所在的 https://2ez4jz.github.io；保留原站、www、输入验证、限流和幂等写入。后端源码已提交至 sculp-database，Edge Function v3 已部署，线上 Afterdark OPTIONS 返回 204 且 CORS 来源匹配。
- 验证：原站下载页面与选用源码完全一致；9 个页面的可见文字与导航相同，209 处图片引用均存在，无重复 ID 或断裂站内锚点；JavaScript 语法检查通过。表单集成测试覆盖成功、入库/邮件失败、重试复用 ID、重复提交防护、过去日期、归因、成功后统计及作品切换，外部写入全部模拟；浏览器检查桌面作品集与询价页。未发送真实测试邮件或新增测试客户，未作手机实机验收。

## 2026-10-03

- 修复首页 Kind Words 好评卡片署名后的黑色横条：评价中的语义 footer 不再继承网站底部页脚背景，恢复为透明背景的普通署名小字。

- 修复首页 SCULP Concierge 深色区的选项可读性：未选中项目改为清晰浅灰，悬停时提高亮度，选中项保持高对比米白，并同步增强选项分隔线。

- 修复 After Dark 深色页面的文字对比度：Portfolio 化妆师目录、个人作品集返回/选择按钮与 Occasions 次按钮统一改为高对比浅色；同时移除滚动入场时的文字模糊滤镜，保留更快、更清晰的轻微淡入。

- 将用户指定的 6 张 Miranda 作品移至个人 Portfolio 最前：依次为柔和双人白纱、黑白花饰头纱、吊灯室内、黑白飞扬头纱、现代建筑动态与古堡窗景；其余 34 张保持原有相对顺序，不重复新增。

- 将 About 页 Our Philosophy 左侧第一张妆面照替换为同一造型的睁眼侧望版本，复用 Miranda 新作品集中已优化的高清原比例图片，页面尺寸与拱形版式保持不变。

- 从新提供的 Miranda 作品包 69 张照片中精选 40 张，按妆面完成度、构图张力、风格覆盖与重复度筛选；删除 Miranda 个人 Portfolio 原有全部 19 张作品，以新选 40 张自然比例 WebP 瀑布流完整替换，并将阳光妆面、羽毛头纱、近景肌理、黑白肖像与建筑感婚纱照前置。

- 将 About Studio 左侧两张辅助空间图从左右并排改为整栏宽度上下排列，解决横向化妆台照片显示过小的问题；三张图继续保持原比例、不裁切。

- 修正 About Studio 实景区的二次裁切：保留一张主图加两张辅助图的大图结构，但取消固定高度与 cover 裁剪，三张图均按原始比例完整显示；手机端同样自然比例纵向排列。

- 按截图从 Occasions 瀑布流删除黑色露背礼服、双手举过头顶的暖色人像，保留其余 11 张非婚礼作品。

- 按页面截图从 Miranda 个人 Portfolio 精确移除 7 张指定作品：粉色侧躺妆面、面纱特写、黑白侧脸、鲜色眼妆、黑金服装、双人黑衣与毛绒帽造型；其他页面正在使用的同源图片保持不变。

- 删除 About 页原有的 “The SCULP eye / Texture, proportion, presence” 婚礼作品区，替换为真实 Studio 空间与到访信息：精选休息区、化妆台、咨询区三张照片；裁掉原图中的 Miyan Beauty 标志并重新导出；加入 200 Town Centre Boulevard, Unit 409, Markham 地址、停车与入口示意图。

- 移除 Portfolio 首页整组混合作品图和中间咨询按钮，页面开场后直接显示八位化妆师入口；将该组 26 张作品完整转入 Miranda 个人 Portfolio，并替换她原有的 18 张作品顺序，不重复叠加。

- 将 Occasion 首屏作品从 5 张扩充为 12 张明确非婚礼的编辑、时装、红毯、晚宴与后台造型图；用自然比例三列瀑布流排版，三列分别以双人创意构图、毛绒时装和鲜色眼妆开场，平板2列、手机1列。同步为 Event Styling、Personal Styling、Commercial Beauty、Photoshoot Styling 增加起价 $200、$150、$100/小时、$200。

- 在 Bridal 定价页 Choose Your Artist 下方、Additional Services 之前加入 Civil Ceremony Styling 价格图；桌面端居中限宽展示，手机端自适应满宽，保持原比例和全部价格文字可见。

- 将首页评价区中间一条替换为强调审美、技术与 editorial-level makeup 的客户反馈，避免与左侧持妆体验重复；三条现分别体现情绪体验、艺术与技术、临场服务。

- 将 Bridal Stories 三图最右侧替换为本次提供的柔和妆面与纹理盘发特写；压缩为原比例 WebP，不做强制裁剪，左侧与中间图片保持不变。

- 将 Bridal 的 The Half-Day Experience 中 Signature Artist / Founder 价格由 $1,200 调整为 $1,100；Director Artist $900、Senior Artist $600 及其他套餐价格不变。

- 从本次提供的七组真实反馈中筛选三条互补内容，翻译并精简为英文客户原话，分别突出婚礼当天的自信感、长时间持妆与临时变动下的服务可靠性；以响应式三栏文字评价区放在首页 The Artists 上方，手机端改为单栏。

- 将首页 SCULP Concierge 的第三个选择从 “I’m creating images” 改为更直接的 “I have a photoshoot”，对应内容与跳转保持不变。

## 2026-10-02

- 删除首页重复的 Selected Work / Made to be remembered 展示栏，包括三张主图、横向预览和作品集链接；首页现由品牌理念直接进入 Services，保留 Portfolio 与各化妆师作品页的完整图片展示。

- 全站统一三档化妆师职称：Founder / Creative Styling Director 改为 Signature Artist / Founder，Senior Styling Artist 改为 Director Artist，Styling Artist 改为 Senior Artist；同步更新 Team 分组、Bridal 价格表、预约选项与图片辅助文本，价格数字不变。

- 从 editorial 包的 22 张照片中精选 18 张并压缩为原比例 WebP：将双人创意构图、毛绒时装与鲜色眼妆等张力强的作品前置；替换首页 Selected Work 主图并扩充横向预览，在主 Portfolio 前部增加 6 张非婚礼作品，完整开通 Miranda 的 18 张编辑作品集，Occasion 改为创意妆、时装、晚宴、TIFF 红毯与活动现场组合。对自带白色外框的后台照只做轻微裁边，不改人物比例。

- 调整 Emily 作品集排序：将红色中式造型、常春藤礼服和喷泉双人照从三列顶部下移，顶部改为更干净的妆面、柔和新娘照与婚礼现场图。

- 在 Styling Artists 新增 Michelle：将提供的人像处理为柔和黑白团队风格，补充与其他成员同等篇幅的介绍、Team 入口、Portfolio 目录卡片、独立作品区和浮动快捷导航；作品区目前以肖像开位，后续可直接追加作品图。

## 2026-10-01

- 将首页 Selected Work、Bridal Stories 与 Occasions 首屏三图从“一大两小”固定裁剪改为普通原比例三列图片墙，平板2列、手机1列；以后这些位置直接替换原图，只压缩不裁剪。同步导入 Emily 的 8 张精选作品，剔除 1 张带社交平台界面的截图并按妆面、中式造型、完整礼服与婚礼场景排序。

- 导入 Yuki 提供的 14 张作品，移除 1 张近似重复的暖光双人照，将其余 13 张压缩为 WebP；按头纱妆面、发型细节、中式与编辑造型、完整新娘造型和婚礼场景排序至个人瀑布流。

- 导入 Giselle 的 19 张作品并压缩为 WebP，按妆面近景、完整新娘造型、现代中式造型与婚礼场景排序至个人瀑布流；两版保持原比例展示、无图下注释、无点击放大。

- 导入 Elaine 的 13 张作品并压缩为 WebP，按妆面特写、完整新娘造型、双人与场景叙事排序至个人瀑布流；同步重新编辑 Angelina 的 26 张展示顺序，将妆面清楚、构图有冲击力的作品提前。此后新增个人作品默认按视觉表现力排序，不按文件名或上传顺序排列。

- 在 Artist Portfolios 页面加入常驻右下角悬浮导航：Top 按钮可平滑回到页面顶部，Artists 菜单可从任意滚动位置直接切换七位化妆师，并标记当前人物；手机端缩小控件并适配安全区。

- 主 Portfolio 同步改为无小字的紧凑自然比例瀑布流，桌面3列、平板2列、手机1列；Artist Portfolios 的入口卡片与顶部切换按钮改为 Miranda 优先，其余成员仍保持相同尺寸和视觉权重。

- 收紧个人作品页视觉：Angelina 作品改为无文字、无编号的自然高度瀑布流，桌面3列、平板2列、手机1列，图片间距缩至 14px；保留完整原始比例，不影响主 Portfolio 的常规图片墙。

- 导入 Angelina 提供的 26 张作品图，自动旋转、压缩为 WebP 并按妆容特写、完整造型、婚礼现场与创意妆交替排序；个人作品区采用不限数量的原比例三列图片墙（平板2列、手机1列），加入轻编号、细分隔线与桌面端错落留白，未启用裁剪或点击放大。两版素材各约 2.3 MB。

- 将 Portfolio 从“3张主图＋横向小图”改为直接展示的原比例作品墙：桌面3列、平板2列、手机1列，共保留20张现有作品且不再强制裁剪；移除点击放大与放大光标。Artist Portfolios 同步使用相同自适应图片墙，并在选择化妆师后只展示该人的作品区，避免未来每人约20张时形成超长页面。

- 新增独立 Artist Portfolios 页面：为七位化妆师按字母顺序设置等尺寸入口与各三个作品预留位；Portfolio 底部加入统一入口，Team 每位成员加入对应作品按钮，页面补充咨询 CTA 与返回 Portfolio 按钮。检查两版均为 7 个入口、7 个作品区、21 个预留位，无 HTML 解析或差异格式错误；当前环境缺少浏览器执行文件，未完成自动截图检查。

- 调整 Bridal Trial 的 Senior Styling Artist 中间档价格：One-Look $350、Two-Look $450、Three-Look $550；其他档位与 Wedding-Day Services 保持不变。

- 重构 Bridal Pricing：先展示 Bridal Trial，再展示 Wedding-Day Services；两组各三档服务，采用新价格表数字并补入中间价。化妆师职务统一为 Team 页的 Founder / Creative Styling Director、Senior Styling Artist 与 Styling Artist；移除 Additional Services 中重复的 Trial Session。

- 更新 Occasions 首屏右上图片为红色重影妆容肖像；保留左侧白裙图与右下黑白双人照，形成氛围、妆容创意与场合叙事的组合，并校准横向裁剪焦点。

- 调整 Occasions 首屏三图：保留左侧原图并上移焦点避免裁头；右上替换为红花妆容特写，右下替换为黑白双人照，并分别校准人物裁剪。

- 将用户提供的横向新娘艺术照放入首页 Selected Work 三图的右下位置；保留 706 左侧大图和 717 右上图，并同步主站与 After Dark。

## 2026-09-30

- 去除 After Dark Hero 图片源文件左侧残留的白色像素线，同时清理其余边缘并为图片地址增加版本参数；保持人物构图和颜色不变。

- 复查 After Dark Hero 线上效果后，进一步移除压暗图片的渐变遮罩及悬停缩放，并为样式表增加版本参数强制浏览器更新；Hero 现在始终直接显示原图。

- 关闭 After Dark 首页 Hero 的灰度、复古色调及悬停暖色滤镜，所有状态均显示原图颜色；检查鼠标移入前后滤镜一致。

- 在首页 “The artists” 团队预览区加入 Miranda 肖像，替换空白图片框；同步主站与 After Dark，并检查桌面、手机裁切。

- 将用户提供的户外新娘肖像设为首页 Hero，裁除原图白边并转为 WebP；分别为主站和 After Dark 调整焦点位置，检查桌面与手机裁切。

- 为 After Dark 增加基础统计层：支持 GA4 与 Microsoft Clarity，并记录虚拟页面访问、来源、分区浏览、滚动深度、CTA/作品点击、服务兴趣、表单开始与有效提交、各页面有效停留。统计脚本不读取或发送表单内容；待填入两个平台生成的项目编号后开始收数。

- 调整 Yuki / Mira 照片尺寸层级：桌面肖像宽度上限 400px，图片在上、介绍在下；平板与下方成员等宽，手机使用单列。检查照片不大于 Miranda、不小于下方成员，以及页面溢出。

- 重新排版 Yuki / Mira：桌面使用紧凑肖像与介绍并排布局，照片上限 240px；平板单列并排，手机使用 220px 小幅肖像及下方介绍。保留 4:5 比例，检查多尺寸排版与裁切。

- 将 Yuki、Mira 与其他团队成员卡片照片统一为 4:5 竖版比例，取消不同固定最小高度；检查桌面与手机六张卡片比例一致、人物裁切正常。

- 同步主站七位团队成员的黑白肖像到 After Dark Team 页：Miranda、Yuki、Mira、Angelina、Elaine、Emily、Giselle。保留深色视觉和动画；检查桌面及手机加载与裁切。

- 将主站选好的 13 张用户婚礼照片复用到 After Dark 的 22 个图片展示位：首页 Hero / Selected Work、Bridal 及 Portfolio。保留深色视觉、图片处理与动画，便于对比两版效果。
- 替换所有概念网图展示位，撤掉 CONCEPT IMAGE 及内部待补标注；Portfolio 本轮统一为 Bridal 分类。新增 WebP 素材和来源映射清单。
- 验证：桌面及手机图片加载、横向溢出、Portfolio 灯箱与键盘切换；无 JavaScript 错误。

## 2026-09-24

- 将实验版所有标题、Logo、价格和 FAQ 标题字体从 Italiana 恢复为网站原先使用的 Playfair Display；保留深色 editorial 视觉、字号层级、图片与动画交互。

- 在 `sculp-test` 制作独立的深色 editorial 视觉概念：时装感大字、暖灰与酒红配色、全幅影像、服务与作品页的新节奏；原有七个页面、文案、链接及咨询表单内容保持一致。
- 加入滚动揭示、阅读进度线、作品灯箱与键盘导航，并提供减少动态效果的系统偏好支持。内部待确认提示在这个展示版本中仅做视觉隐藏，原文仍在源码内。
- 使用 22 处 Unsplash 概念图，素材来源列在 `assets/IMAGE_SOURCES.md`。作品图明确标注 CONCEPT IMAGE；团队成员及 Studio 实景仍保留占位，正式使用前需替换为获批的真实照片。
- 本次提交（`sculp-test`）：已静态核对全部 7 个页面、44 个链接、11 个表单字段和原有文案，图片文件均存在，JavaScript 通过语法检查。浏览器视觉检查受当前环境限制，尚待线上预览复核。

## 2026-09-23

- 完成全站术语审查：将 42 处 **Makeup / makeup** 全部统一为 **Styling / styling**，覆盖首页、Bridal、Occasions、Education、Team、About、SEO 标题与描述、咨询表单及交互跳转参数。
- 将 6 处与试妆服务有关的 **Preview / preview** 统一为 **Trial / trial**，包括套餐说明、附加服务、价格说明、What's Included 与 Studio 说明；保留无障碍标签中的 “Selected work preview”，因为它指作品预览而非试妆。
- 同步将内部区块锚点 `occasion-makeup` 更新为 `occasion-styling`，确保页面链接继续正确跳转。
- 网站修改提交：[`541aa93`](https://github.com/2ez4jz/sculpstudio/commit/541aa935d7f310c298064d0b570f1d4c2a7fccd1)。

- SCULP Concierge 的 Bridal 说明更新为 **“Wedding-day styling, wedding trial, bridal-party services, and follow-up services…”**。
- 同步更新页面默认文案与交互数据，确保切换选项后返回 Bridal 仍显示新版内容；标题 **“Start with SCULP Bridal.”** 保持不变。
- 网站修改提交：[`50cf504`](https://github.com/2ez4jz/sculpstudio/commit/50cf5048edf45403d49a1cf5766571d87c23100e)。

- 首页 Services 左侧 Bridal 正文更新为 **“A look that feels like you…”**，并移除首页显示的 $290 起价。
- 右侧 Occasions 正文将 “Makeup” 改为 **“Styling”**，覆盖 events、personal appointments、commercial projects、photoshoots 和 education。
- 保留原有标题、链接与双栏布局。
- 网站修改提交：[`2fd5b96`](https://github.com/2ez4jz/sculpstudio/commit/2fd5b96581bf4b41d913b563ce33c2d1cc5c7981)。

- 首页首屏位置文案由 **“Toronto · Available for travel”** 更新为 **“Toronto + Available Worldwide”**。
- 将 “+” 设计为独立的衬线分隔符，并保留原有小标题的大小写、字距和整体位置。
- 网站修改提交：[`86e6d28`](https://github.com/2ez4jz/sculpstudio/commit/86e6d28099a2c4edb2b51b963235c73b8beb6158)。

- 保留首页第二段标题 **“Beauty that still feels like you.”**，正文更新为 “Beauty should feel familiar — only more considered.” 开头的新版品牌文案。
- 保留原有段落结构和样式，仅替换正文内容。
- 网站修改提交：[`ad70745`](https://github.com/2ez4jz/sculpstudio/commit/ad7074535b85ed5551f2433be272b9b674883177)。

- 首页首屏标题更新为 **“Make moments that matter.”**，正文改为以人物、个人风格和场合为核心的品牌介绍。
- 保留原有 Hero 的 HTML 结构、按钮和样式，只替换标题与正文，避免影响现有排版系统。
- 网站修改提交：[`62c0b2b`](https://github.com/2ez4jz/sculpstudio/commit/62c0b2bd8060c7c2b84aa3ca11bfd83c7e7dba23)。

- 将全站服务名称 **Event Makeup** 改为 **Event Styling**，**Personal Makeup** 改为 **Personal Styling**。
- 同步更新 Occasions 页面、咨询表单、推荐模块及预选服务链接，确保名称一致。
- 网站修改提交：[`43a1a6a`](https://github.com/2ez4jz/sculpstudio/commit/43a1a6adc2b34b026677998846362bcb93a31350)。

- 将左侧套餐的 **Preview** 改为 **Trial**，套餐标题更新为 **Wedding Day + Trial**。
- 新增 **The Full-Day Experience**：包含最长 10 小时现场服务，起价 $1,490；SCULP Artist / Senior Artist / Founder 价格分别为 $1,490 / $1,690 / $1,990。
- Bridal 价格区恢复为桌面端三列布局，Half-Day 继续标记为 “Most Chosen”。
- 网站修改提交：[`4ae1bc5`](https://github.com/2ez4jz/sculpstudio/commit/4ae1bc565a92da01276494a1de776617792954e0)。

- 删除 Bridal 价格区最左侧的 **Wedding Day Makeup** 单独套餐，只保留 **Wedding Day + Preview** 和 **The Half-Day Experience**。
- 桌面端价格区改为两列等宽布局；移动端继续采用单列显示。
- 网站修改提交：[`bc7e3e9`](https://github.com/2ez4jz/sculpstudio/commit/bc7e3e93942b5f8c388be550e2e18f17aa477f8e)。

- 将 Bridal 价格卡片中的 “Most Chosen” 从 **Wedding Day + Preview** 移至 **The Half-Day Experience**，并同步移动卡片强调样式。
- Wedding Day + Preview 的小标签改为 “With Preview”；价格和套餐内容未改。
- 网站修改提交：[`b0fb6ea`](https://github.com/2ez4jz/sculpstudio/commit/b0fb6ea45f076dba3736abc2526607093550a19c)。

- 2026-09-30: Updated the homepage Selected Work trio with the three supplied images, placing the second film portrait in the largest position and optimizing all three as WebP.

- 2026-09-30: Swapped the left feature and lower-right Selected Work images, moving the sepia portrait into the largest position.

- 2026-09-30: Re-curated the homepage Selected Work trio with images 708, 707, and 714 for a cohesive bridal story across scene, detail, and emotion.

- 2026-09-30: Rebuilt the non-hero image system across Home, Bridal, Occasions, Portfolio, and About using the 20 supplied photographs; added page-specific visual narratives and optimized WebP assets.

- 2026-09-30: Updated the homepage Selected Work trio to images 717, 666, and 598, and corrected the Occasions feature crop focal points.

- 2026-09-30: Swapped homepage Selected Work images 598 and 717, placing 598 in the large left position and 717 at lower right.

- 2026-09-30: Updated the homepage Selected Work trio to 706 at left, 717 at upper right, and the 694 couple portrait at lower right.
- 2026-09-30: Replaced the left homepage Selected Work image with 598, keeping 717 at upper right and the 694 couple portrait at lower right.
- 2026-09-30: Restored image 706 to the largest left homepage position, with 717 at upper right and the 694 couple portrait at lower right.
- 2026-09-30: Replaced the Bridal approach feature image with the supplied orchid-bouquet bridal portrait and tuned its focal crop.
- 2026-09-30: Moved the Bridal approach portrait crop to the top edge so the bride’s full head remains visible.
- 2026-09-30: Replaced the homepage Craft feature image with the supplied auburn editorial makeup close-up and tuned its crop.
